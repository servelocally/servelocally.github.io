#!/usr/bin/env node
/**
 * ServeLocally - Local Contact Submission Receiver Service
 *
 * Runs locally on the developer's PC.
 * Receives POST submissions from the public website, sanitizes against Excel formula
 * injection, and appends to an encrypted or formatted .xlsx workbook on disk.
 *
 * Usage:
 *   node scripts/local-contact-receiver.mjs
 *   or: npm run receiver
 */

import http from "node:http";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import ExcelJS from "exceljs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration (can be overridden via environment variables)
const PORT = process.env.RECEIVER_PORT || 8790;
const AUTH_SECRET = process.env.CONTACT_API_SECRET || "development_secret_token_12345";
const DEFAULT_STORAGE_PATH = path.resolve(__dirname, "..", "storage", "personal_pc_submissions.xlsx");
const STORAGE_PATH = process.env.EXCEL_STORAGE_PATH || DEFAULT_STORAGE_PATH;

// Ensure storage directory exists
const storageDir = path.dirname(STORAGE_PATH);
if (!fs.existsSync(storageDir)) {
  fs.mkdirSync(storageDir, { recursive: true });
}

// In-memory rate limiting and duplicate detection
const seenSubmissions = new Set();
const ipRateMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 5 * 60 * 1000; // 5 minutes
  const limit = 10;
  const entry = ipRateMap.get(ip);

  if (!entry || entry.resetAt < now) {
    ipRateMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  if (entry.count >= limit) return true;
  entry.count += 1;
  return false;
}

/**
 * Prevents Excel / CSV Formula Injection
 */
function sanitizeForExcel(value) {
  if (value === undefined || value === null) return "";
  const str = String(value).trim();
  const dangerousPrefixes = ["=", "+", "-", "@", "\t", "\r"];
  if (dangerousPrefixes.some((p) => str.startsWith(p))) {
    return `'${str}`;
  }
  return str;
}

/**
 * Appends submission row to Excel workbook
 */
async function appendToExcelWorkbook(submission) {
  const workbook = new ExcelJS.Workbook();
  const sheetName = "Website Inquiries";

  if (fs.existsSync(STORAGE_PATH)) {
    await workbook.xlsx.readFile(STORAGE_PATH);
  }

  let worksheet = workbook.getWorksheet(sheetName);
  if (!worksheet) {
    worksheet = workbook.addWorksheet(sheetName, {
      views: [{ state: "frozen", ySplit: 1 }],
    });

    worksheet.columns = [
      { header: "ID", key: "id", width: 20 },
      { header: "Timestamp (UTC)", key: "createdAt", width: 22 },
      { header: "Sender Name", key: "name", width: 24 },
      { header: "Email Address", key: "email", width: 32 },
      { header: "Category", key: "category", width: 20 },
      { header: "Subject", key: "subject", width: 34 },
      { header: "Message Content", key: "message", width: 55 },
      { header: "IP Address", key: "ip", width: 18 },
      { header: "User Agent", key: "userAgent", width: 30 },
    ];

    // Header styling
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0B132B" }, // Premium dark navy
    };
    headerRow.height = 28;
    headerRow.alignment = { vertical: "middle", horizontal: "left" };
  }

  const row = worksheet.addRow({
    id: sanitizeForExcel(submission.id),
    createdAt: sanitizeForExcel(submission.createdAt || new Date().toISOString()),
    name: sanitizeForExcel(submission.name),
    email: sanitizeForExcel(submission.email),
    category: sanitizeForExcel(submission.category),
    subject: sanitizeForExcel(submission.subject),
    message: sanitizeForExcel(submission.message),
    ip: sanitizeForExcel(submission.ip || "N/A"),
    userAgent: sanitizeForExcel(submission.userAgent || "N/A"),
  });

  row.alignment = { vertical: "top", wrapText: true };

  // Alternating row styling
  if (row.number % 2 === 0) {
    row.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFF8FAFC" },
    };
  }

  await workbook.xlsx.writeFile(STORAGE_PATH);
  console.log(`[Excel Receiver] Submission ${submission.id} appended to ${STORAGE_PATH}`);
}

const server = http.createServer(async (req, res) => {
  // CORS Headers for secure web integration
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Submission-Source");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check endpoint
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "online",
        service: "ServeLocally Contact Receiver",
        storagePath: STORAGE_PATH,
        timestamp: new Date().toISOString(),
      })
    );
    return;
  }

  // Ingestion endpoint
  if (req.method === "POST" && (req.url === "/api/receive" || req.url === "/submit")) {
    const ip = req.socket.remoteAddress || "127.0.0.1";

    if (isRateLimited(ip)) {
      res.writeHead(429, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Rate limit exceeded on local receiver." }));
      return;
    }

    // Optional Bearer token authorization
    const authHeader = req.headers.authorization;
    if (AUTH_SECRET && AUTH_SECRET !== "") {
      const token = authHeader?.replace(/^Bearer\s+/i, "");
      if (token !== AUTH_SECRET) {
        console.warn(`[Excel Receiver] Unauthorized request from ${ip}`);
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid authorization token." }));
        return;
      }
    }

    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      // Body size limit 1MB
      if (body.length > 1e6) {
        req.destroy();
      }
    });

    req.on("end", async () => {
      try {
        const data = JSON.parse(body);

        if (!data.name || !data.email || !data.message) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Missing required fields." }));
          return;
        }

        // Deduplication based on ID or hash
        const dedupeKey = data.id || `${data.email}-${data.subject}-${data.message.substring(0, 50)}`;
        if (seenSubmissions.has(dedupeKey)) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ status: "already_saved", id: data.id }));
          return;
        }
        seenSubmissions.add(dedupeKey);

        await appendToExcelWorkbook(data);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            status: "success",
            message: "Stored in PC Excel ledger.",
            id: data.id,
            timestamp: new Date().toISOString(),
          })
        );
      } catch (err) {
        console.error("[Excel Receiver Error]", err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to parse or write submission." }));
      }
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("=================================================================");
  console.log("⚡ ServeLocally Local Contact Receiver Service is RUNNING");
  console.log(`📡 Listening on: http://127.0.0.1:${PORT}`);
  console.log(`📁 Saving submissions to: ${STORAGE_PATH}`);
  console.log("🔒 Formula injection sanitization active");
  console.log("=================================================================");
  console.log("To connect this receiver to your deployed website:");
  console.log("1. Use Cloudflare Tunnel, ngrok, or Tailscale to expose this port:");
  console.log(`   cloudflared tunnel --url http://localhost:${PORT}`);
  console.log("2. Set the public tunnel URL in your Next.js environment:");
  console.log("   CONTACT_API_URL=https://<your-tunnel-domain>/api/receive");
  console.log(`   CONTACT_API_SECRET=${AUTH_SECRET}`);
  console.log("=================================================================");
});

