import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";
import { appendSubmissionToExcel } from "@/lib/excel-storage";

// Validation Schema for Contact Form
const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." })
    .max(150, { message: "Email cannot exceed 150 characters." }),
  category: z.enum([
    "General Inquiry",
    "Bug Report",
    "Feature Request",
    "Business Inquiry",
    "Other",
  ]),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(200, { message: "Subject cannot exceed 200 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(5000, { message: "Message cannot exceed 5000 characters." }),
  // Honeypot field for anti-spam (must be empty)
  companyWebsite: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // 1. Client IP for Rate Limiting & Audit
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "Unknown";

    // 2. Check Rate Limit (max 5 requests per 10 minutes per IP)
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait a few minutes before submitting another message.",
          resetInSec: rateCheck.resetInSec,
        },
        { status: 429 }
      );
    }

    // 3. Parse and Validate Body
    const rawBody = await req.json().catch(() => null);
    if (!rawBody) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    const validation = contactSchema.safeParse(rawBody);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed.",
          details: validation.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = validation.data;

    // 4. Spam Honeypot Check
    if (data.companyWebsite && data.companyWebsite.trim() !== "") {
      // Silently reject bot submissions
      return NextResponse.json(
        { success: true, message: "Submission received." },
        { status: 200 }
      );
    }

    const submissionId = `SUB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const createdAt = new Date().toISOString();

    const submissionPayload = {
      id: submissionId,
      createdAt,
      name: data.name,
      email: data.email,
      category: data.category,
      subject: data.subject,
      message: data.message,
      ip,
      userAgent,
    };

    // 5. Configurable Forwarding Architecture
    const remoteApiUrl = process.env.CONTACT_API_URL?.trim();
    const apiSecret = process.env.CONTACT_API_SECRET?.trim();

    if (remoteApiUrl) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

        const response = await fetch(remoteApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(apiSecret ? { Authorization: `Bearer ${apiSecret}` } : {}),
            "X-Submission-Source": "ServeLocally-Web",
          },
          body: JSON.stringify(submissionPayload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Remote receiver responded with HTTP ${response.status}`);
        }

        const remoteRes = await response.json().catch(() => ({}));

        return NextResponse.json({
          success: true,
          message: "Your message was successfully received and recorded.",
          submissionId,
          destination: "remote-receiver",
          meta: remoteRes,
        });
      } catch (forwardErr: any) {
        // If the developer's PC is switched off or unreachable, never falsely claim success!
        console.error("[Contact API] Remote forward failed:", forwardErr.message || forwardErr);

        return NextResponse.json(
          {
            success: false,
            error:
              "The local contact receiver service on the developer's PC is currently unreachable or offline. Your message could not be saved to the local database.",
            fallbackEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Khushwinder.dev@gmail.com",
            offlineNotice: true,
          },
          { status: 503 }
        );
      }
    }

    // 6. Direct Local Mode Fallback (When deployed where filesystem storage is enabled)
    try {
      await appendSubmissionToExcel(submissionPayload);

      return NextResponse.json({
        success: true,
        message: "Your message has been successfully saved to the Excel ledger.",
        submissionId,
        destination: "local-excel",
      });
    } catch (excelErr: any) {
      console.error("[Contact API] Direct Excel save failed:", excelErr);
      return NextResponse.json(
        {
          success: false,
          error:
            "Local storage could not be written at this time. Please reach out directly via email.",
          fallbackEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Khushwinder.dev@gmail.com",
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("[Contact API Unhandled Error]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}

