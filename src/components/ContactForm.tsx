"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  FileSpreadsheet,
} from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  category: z.enum([
    "General Inquiry",
    "Bug Report",
    "Feature Request",
    "Business Inquiry",
    "Other",
  ]),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(10, "Please provide at least 10 characters in your message")
    .max(5000, "Message cannot exceed 5000 characters"),
  companyWebsite: z.string().optional(), // Honeypot field
});

type FormValues = z.infer<typeof formSchema>;

// Custom pure Zod resolver for React Hook Form
const zodResolverCustom = (schema: typeof formSchema) => async (data: any) => {
  const result = schema.safeParse(data);
  if (result.success) {
    return { values: result.data, errors: {} };
  }
  const errors: Record<string, any> = {};
  for (const issue of result.error.issues) {
    const path = issue.path[0] as string;
    if (!errors[path]) {
      errors[path] = { type: issue.code, message: issue.message };
    }
  }
  return { values: {}, errors };
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [submissionId, setSubmissionId] = useState<string>("");
  const [offlineNotice, setOfflineNotice] = useState(false);
  const [fallbackEmail, setFallbackEmail] = useState("Khushwinder.dev@gmail.com");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolverCustom(formSchema),
    defaultValues: {
      category: "General Inquiry",
      companyWebsite: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    setStatusMessage("");
    setOfflineNotice(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(
          resData.error || "Failed to deliver submission. Please try again."
        );
        if (resData.offlineNotice) {
          setOfflineNotice(true);
        }
        if (resData.fallbackEmail) {
          setFallbackEmail(resData.fallbackEmail);
        }
        return;
      }

      setStatus("success");
      setSubmissionId(resData.submissionId || "");
      setStatusMessage(
        resData.message || "Your message was successfully received and logged."
      );
      reset();
    } catch (err: any) {
      setStatus("error");
      setStatusMessage(
        "Network connection error while contacting the server. Please verify your connection."
      );
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a0f1c]/90 backdrop-blur-md p-6 sm:p-8 shadow-2xl">
      {/* Success Banner */}
      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm space-y-2 animate-in fade-in">
          <div className="flex items-center gap-2 font-semibold text-emerald-300">
            <CheckCircle2 className="w-5 h-5" />
            <span>Submission Successfully Logged</span>
          </div>
          <p className="text-slate-300">{statusMessage}</p>
          {submissionId && (
            <div className="font-mono text-xs bg-emerald-950/40 px-3 py-1.5 rounded border border-emerald-500/20 text-emerald-300">
              Reference ID: <strong>{submissionId}</strong>
            </div>
          )}
          <p className="text-[11px] text-slate-400">
            This message has been securely registered into the developer&apos;s ledger. Thank you!
          </p>
        </div>
      )}

      {/* Error / Offline Alert */}
      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs sm:text-sm space-y-3 animate-in fade-in">
          <div className="flex items-center gap-2 font-semibold text-rose-300">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{offlineNotice ? "Local Storage Service Offline" : "Notice"}</span>
          </div>
          <p className="text-slate-300 leading-relaxed">{statusMessage}</p>
          {offlineNotice && (
            <div className="pt-2 border-t border-rose-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">
                You can email Khushwinder directly:
              </span>
              <a
                href={`mailto:${fallbackEmail}?subject=Direct%20Inquiry%20via%20Serve%20Locally`}
                className="inline-flex items-center gap-1.5 font-medium text-brand-300 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{fallbackEmail}</span>
              </a>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Anti-spam honeypot (hidden from humans) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="companyWebsite">Website</label>
          <input
            id="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("companyWebsite")}
          />
        </div>

        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Full Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Alex Smith"
              {...register("name")}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-surface-100/70 border text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors ${
                errors.name ? "border-rose-500" : "border-white/10"
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-rose-400">{errors.name.message as string}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Email Address <span className="text-rose-400">*</span>
            </label>
            <input
              type="email"
              placeholder="alex@domain.com"
              {...register("email")}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-surface-100/70 border text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors ${
                errors.email ? "border-rose-500" : "border-white/10"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-rose-400">{errors.email.message as string}</p>
            )}
          </div>
        </div>

        {/* Row 2: Category and Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Inquiry Category
            </label>
            <select
              {...register("category")}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#11192a] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Bug Report">Bug Report</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Business Inquiry">Business Inquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Subject <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Brief summary of inquiry"
              {...register("subject")}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-surface-100/70 border text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors ${
                errors.subject ? "border-rose-500" : "border-white/10"
              }`}
            />
            {errors.subject && (
              <p className="text-[11px] text-rose-400">
                {errors.subject.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Message <span className="text-rose-400">*</span>
          </label>
          <textarea
            rows={5}
            placeholder="Type your message, issue details, or feature feedback..."
            {...register("message")}
            className={`w-full px-3.5 py-2.5 rounded-xl bg-surface-100/70 border text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-400 transition-colors ${
              errors.message ? "border-rose-500" : "border-white/10"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-[11px] text-rose-400">{errors.message.message as string}</p>
          )}
        </div>

        {/* Footer info: Excel storage notice & Submit button */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Direct Excel ledger logging with formula injection defense</span>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-brand-500 to-sky-400 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-brand-500/20 disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Recording Submission...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Submit Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
