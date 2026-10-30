import React from "react";
import { Check, X, Minus, ShieldCheck, Zap } from "lucide-react";

export function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Idle Memory Footprint (GUI + Core)",
      serveLocally: "< 25 MB (Tauri v2 + Rust)",
      xampp: "~120 MB",
      laragon: "~85 MB",
      highlight: true,
    },
    {
      feature: "Zombie Process Prevention",
      serveLocally: "Win32 Job Object (KILL_ON_JOB_CLOSE)",
      xampp: "None (Orphans easily, locks ports)",
      laragon: "Partial (Process polling)",
      highlight: true,
    },
    {
      feature: "Windows Services Installed",
      serveLocally: "0 (100% Portable & Isolated)",
      xampp: "Registers system services",
      laragon: "Optional background services",
      highlight: false,
    },
    {
      feature: "Dynamic *.test Virtual Hosts",
      serveLocally: "Auto-detects /public & auto-compiles Nginx",
      xampp: "Manual httpd-vhosts.conf editing",
      laragon: "Symlink-based generation",
      highlight: true,
    },
    {
      feature: "Domain Resolution Mechanism",
      serveLocally: "Embedded UDP DNS Proxy + Hosts Sync",
      xampp: "Manual hosts file editing",
      laragon: "Hosts file modification",
      highlight: false,
    },
    {
      feature: "Modern Desktop UI",
      serveLocally: "Windows 11 Fluent Dark (Mica)",
      xampp: "Legacy Windows Forms (2004)",
      laragon: "Legacy Delphi 7",
      highlight: false,
    },
    {
      feature: "Email Testing Sandbox",
      serveLocally: "Mailpit Built-in (:1025 SMTP / :8025 Web UI)",
      xampp: "Fake sendmail / Mercury",
      laragon: "MailHog / Mailer",
      highlight: false,
    },
    {
      feature: "Database Web Administration",
      serveLocally: "phpMyAdmin + Lightweight Adminer",
      xampp: "phpMyAdmin",
      laragon: "External HeidiSQL",
      highlight: false,
    },
    {
      feature: "1-Click PHP Version Switching",
      serveLocally: "Supported (8.1 - 8.4 FastCGI)",
      xampp: "Requires separate package installs",
      laragon: "Supported",
      highlight: false,
    },
  ];

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-[#0a0f1c]/80 backdrop-blur-md shadow-2xl">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-[#0e1628]/90">
            <th className="py-4 px-4 sm:px-6 font-semibold text-slate-300">
              Architecture & Capability
            </th>
            <th className="py-4 px-4 sm:px-6 font-bold text-brand-300 bg-brand-500/10 border-x border-brand-500/20">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-brand-400" />
                <span>Serve Locally</span>
              </div>
            </th>
            <th className="py-4 px-4 sm:px-6 font-semibold text-slate-400">
              XAMPP
            </th>
            <th className="py-4 px-4 sm:px-6 font-semibold text-slate-400">
              Laragon
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {comparisonData.map((row, idx) => (
            <tr
              key={idx}
              className={`hover:bg-white/[0.02] transition-colors ${
                row.highlight ? "bg-brand-500/[0.02]" : ""
              }`}
            >
              <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-200">
                {row.feature}
              </td>
              <td className="py-3.5 px-4 sm:px-6 font-semibold text-brand-300 bg-brand-500/[0.07] border-x border-brand-500/20">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{row.serveLocally}</span>
                </span>
              </td>
              <td className="py-3.5 px-4 sm:px-6 text-slate-400">
                {row.xampp.includes("None") || row.xampp.includes("Manual") ? (
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                    <span>{row.xampp}</span>
                  </span>
                ) : (
                  <span>{row.xampp}</span>
                )}
              </td>
              <td className="py-3.5 px-4 sm:px-6 text-slate-400">
                {row.laragon.includes("Partial") ? (
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Minus className="w-4 h-4 text-amber-400/80 shrink-0" />
                    <span>{row.laragon}</span>
                  </span>
                ) : (
                  <span>{row.laragon}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

