import ExcelJS from "exceljs";
import path from "path";
import fs from "fs";

export interface ContactSubmission {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  ip?: string;
  userAgent?: string;
}

/**
 * Sanitizes user input against CSV/Excel Formula Injection.
 * Prefixes strings starting with dangerous characters (=, +, -, @, \t, \r) with an apostrophe.
 */
export function sanitizeForExcel(value: string | undefined | null): string {
  if (!value) return "";
  const trimmed = String(value).trim();
  const dangerousPrefixes = ["=", "+", "-", "@", "\t", "\r"];
  if (dangerousPrefixes.some((prefix) => trimmed.startsWith(prefix))) {
    return `'${trimmed}`;
  }
  return trimmed;
}

/**
 * Appends a contact submission to an Excel workbook.
 * Creates the workbook and directory if they do not exist.
 */
export async function appendSubmissionToExcel(
  submission: ContactSubmission,
  customPath?: string
): Promise<{ success: boolean; filePath: string }> {
  // Store outside public web directory
  const filePath =
    customPath ||
    process.env.CONTACT_STORAGE_PATH ||
    path.join(process.cwd(), "storage", "contact_submissions.xlsx");

  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const workbook = new ExcelJS.Workbook();
  const sheetName = "Submissions";

  if (fs.existsSync(filePath)) {
    await workbook.xlsx.readFile(filePath);
  }

  let worksheet = workbook.getWorksheet(sheetName);
  if (!worksheet) {
    worksheet = workbook.addWorksheet(sheetName, {
      views: [{ state: "frozen", ySplit: 1 }],
    });

    // Setup headers
    worksheet.columns = [
      { header: "Submission ID", key: "id", width: 22 },
      { header: "Date & Time (UTC)", key: "createdAt", width: 22 },
      { header: "Full Name", key: "name", width: 24 },
      { header: "Email Address", key: "email", width: 30 },
      { header: "Category", key: "category", width: 20 },
      { header: "Subject", key: "subject", width: 32 },
      { header: "Message", key: "message", width: 50 },
      { header: "IP Address", key: "ip", width: 18 },
      { header: "User Agent", key: "userAgent", width: 35 },
    ];

    // Style header row
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0E1726" }, // Dark developer slate
    };
    headerRow.alignment = { vertical: "middle", horizontal: "left" };
    headerRow.height = 26;
  }

  // Sanitize all text fields against formula injection
  const sanitizedRow = {
    id: sanitizeForExcel(submission.id),
    createdAt: sanitizeForExcel(submission.createdAt),
    name: sanitizeForExcel(submission.name),
    email: sanitizeForExcel(submission.email),
    category: sanitizeForExcel(submission.category),
    subject: sanitizeForExcel(submission.subject),
    message: sanitizeForExcel(submission.message),
    ip: sanitizeForExcel(submission.ip || "N/A"),
    userAgent: sanitizeForExcel(submission.userAgent || "N/A"),
  };

  const newRow = worksheet.addRow(sanitizedRow);
  newRow.alignment = { vertical: "top", wrapText: true };

  // Subtle alternating row styling
  const rowIndex = newRow.number;
  if (rowIndex % 2 === 0) {
    newRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFF8FAFC" },
    };
  }

  await workbook.xlsx.writeFile(filePath);

  return { success: true, filePath };
}

