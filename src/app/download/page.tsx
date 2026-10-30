import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Terminal,
  FileCode,
  HardDrive,
  Cpu,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Lock,
} from "lucide-react";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

export const metadata = {
  title: "Download Serve Locally — Official Windows Installer (v1.0.0)",
  description:
    "Download the official Serve Locally v1.0.0 installer for Windows 11 and 10. Lightweight, portable, 64-bit NSIS setup with verified SHA-256 checksum.",
};

export default function DownloadPage() {
  const sha256 = "43EA35DFE4F8DD8DAF743E5A00945ED29894E8BDF10A472EAB510A891F814982";

  const breadcrumbItems = [
    { name: "Home", url: "https://servelocally.github.io" },
    { name: "Download", url: "https://servelocally.github.io/download" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-24">
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Latest Stable Release</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Download Serve Locally for Windows
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Get the fast, lightweight local server stack. Instant currentUser installation with zero background Windows services.
        </p>
      </div>

      {/* Primary Download Card */}
      <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#0f172a] to-[#090d18] border border-brand-400/30 shadow-2xl space-y-8 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/15 border border-brand-400/40 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/10">
              <Image
                src="/images/logo.png"
                alt="Serve Locally"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Serve Locally v1.0.0
                </h2>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  Stable
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Official Windows 64-bit NSIS Setup Package
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="/downloads/ServeLocally-Setup.exe"
              download="ServeLocally-Setup.exe"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-sky-400 text-slate-950 font-bold text-sm shadow-xl shadow-brand-500/25 hover:brightness-110 active:scale-95 transition-all text-center"
            >
              <Download className="w-4 h-4" />
              <span>Download Installer (64.1 MB)</span>
            </a>
          </div>
        </div>

        {/* Release Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <span className="text-slate-500">File Name:</span>
            <div className="text-white font-semibold truncate">ServeLocally-Setup.exe</div>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <span className="text-slate-500">File Size:</span>
            <div className="text-white font-semibold">64.1 MB (67,235,271 bytes)</div>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <span className="text-slate-500">Architecture:</span>
            <div className="text-white font-semibold">Windows 10/11 x64</div>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <span className="text-slate-500">Release Date:</span>
            <div className="text-white font-semibold">October 2026</div>
          </div>
        </div>

        {/* Cryptographic SHA-256 Checksum */}
        <div className="p-4 rounded-xl bg-[#060a12] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <Lock className="w-3.5 h-3.5 text-brand-400" />
              SHA-256 Authenticity Checksum
            </span>
            <span className="text-[11px] text-slate-500">Cryptographically Verified</span>
          </div>
          <div className="p-2.5 rounded-lg bg-black/40 font-mono text-[11px] sm:text-xs text-brand-300 break-all select-all border border-white/5">
            {sha256}
          </div>
          <p className="text-[11px] text-slate-500">
            Verify in Windows PowerShell: <code className="text-slate-400">Get-FileHash .\ServeLocally-Setup.exe -Algorithm SHA256</code>
          </p>
        </div>
      </div>

      {/* Release Notes */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileCode className="w-5 h-5 text-brand-400" />
            <span>Release Notes — Version 1.0.0</span>
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p className="font-medium text-white">
            Initial production release of Serve Locally for Windows 64-bit systems.
          </p>
          <ul className="space-y-2 list-disc list-inside text-slate-400">
            <li>
              <strong className="text-slate-200">Win32 Job Object Process Supervision:</strong> Binds Nginx, PHP, MariaDB, and Mailpit to the kernel job object with <code className="text-brand-300 font-mono text-xs">KILL_ON_JOB_CLOSE</code>. Zero zombie processes locking ports.
            </li>
            <li>
              <strong className="text-slate-200">Sub-25MB Idle RAM Footprint:</strong> Native Rust and Tauri v2 desktop frontend with WebView2 integration.
            </li>
            <li>
              <strong className="text-slate-200">Dynamic Virtual Hosts:</strong> Real-time filesystem watcher in <code className="text-brand-300 font-mono text-xs">./www</code> with automatic <code className="text-brand-300 font-mono text-xs">/public</code> document root detection and zero-downtime Nginx reload.
            </li>
            <li>
              <strong className="text-slate-200">Embedded UDP DNS Proxy:</strong> Automatically routes all <code className="text-brand-300 font-mono text-xs">*.test</code> queries to 127.0.0.1 without requiring hosts file edits.
            </li>
            <li>
              <strong className="text-slate-200">Multi-Version PHP Manager:</strong> 1-click switching between PHP 8.1, 8.2, 8.3 (stable default), and 8.4 on FastCGI port 9000.
            </li>
            <li>
              <strong className="text-slate-200">UI Extension Toggles:</strong> Enable and disable <code className="text-slate-300">pdo_mysql</code>, <code className="text-slate-300">curl</code>, <code className="text-slate-300">mbstring</code>, <code className="text-slate-300">openssl</code>, <code className="text-slate-300">gd</code>, and <code className="text-slate-300">fileinfo</code> directly from the interface.
            </li>
            <li>
              <strong className="text-slate-200">Low-Memory MariaDB 10.11:</strong> Tuned with 32MB buffer pool for low footprint, pre-bundled with phpMyAdmin and Adminer single-file manager.
            </li>
            <li>
              <strong className="text-slate-200">Mailpit Email Sandbox:</strong> Embedded local SMTP on :1025 with clean webmail UI on :8025.
            </li>
          </ul>
        </div>
      </section>

      {/* Previous Releases Table */}
      <section className="space-y-4">
        <h3 className="text-base font-semibold text-white">Version History</h3>
        <div className="rounded-xl border border-white/10 bg-surface-100/50 overflow-hidden text-xs">
          <div className="grid grid-cols-4 p-3 bg-[#0d1424] border-b border-white/5 font-semibold text-slate-300 font-mono">
            <div>Version</div>
            <div>Release Date</div>
            <div>Target OS</div>
            <div className="text-right">Status</div>
          </div>
          <div className="grid grid-cols-4 p-3 border-b border-white/5 text-slate-400 font-mono items-center">
            <div className="text-brand-300 font-bold">v1.0.0</div>
            <div>Oct 2026</div>
            <div>Windows 10/11 x64</div>
            <div className="text-right text-emerald-400">Current Stable</div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold text-white text-sm">Need help installing or setting up projects?</h4>
          <p className="text-xs text-slate-400">Read our comprehensive getting started tutorial.</p>
        </div>
        <Link
          href="/docs/getting-started"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/10 transition-colors shrink-0"
        >
          <span>Getting Started Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}

