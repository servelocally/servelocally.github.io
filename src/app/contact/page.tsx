import React from "react";
import Link from "next/link";
import {
  Mail,
  Linkedin,
  Github,
  Globe,
  FileSpreadsheet,
  ShieldAlert,
  Server,
  Terminal,
  Cpu,
  Lock,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

export const metadata = {
  title: "Contact & Support — Serve Locally",
  description:
    "Get in touch with Khushwinder for questions, bug reports, feature requests, or partnerships. Submissions are processed via secure Excel ledger architecture.",
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://servelocally.github.io" },
    { name: "Contact", url: "https://servelocally.github.io/contact" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-24">
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20 text-xs font-mono text-brand-300">
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Developer Contact & Support</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get in Touch with the Developer
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Have questions, found a bug, or want to suggest a new feature for Serve Locally?
          Send a message below or connect via direct channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right Column: Contact Channels & System Architecture (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Channels Card */}
          <div className="rounded-2xl border border-white/10 bg-[#0a0f1c]/90 backdrop-blur-md p-6 space-y-5">
            <h3 className="text-base font-semibold text-white">
              Direct Communication Channels
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="mailto:Khushwinder.dev@gmail.com"
                className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 hover:border-brand-400/30 flex items-center gap-3 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Direct Email</div>
                  <div className="font-semibold text-white group-hover:text-brand-300">
                    Khushwinder.dev@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/khushwinder-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 hover:border-brand-400/30 flex items-center gap-3 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs">LinkedIn Profile</div>
                  <div className="font-semibold text-white group-hover:text-brand-300">
                    linkedin.com/in/khushwinder-dev
                  </div>
                </div>
              </a>

              <a
                href="https://khushwinder-dev.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 hover:border-brand-400/30 flex items-center gap-3 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs">Developer Portfolio</div>
                  <div className="font-semibold text-white group-hover:text-brand-300">
                    khushwinder-dev.github.io
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Khushwinder-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 hover:border-brand-400/30 flex items-center gap-3 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs">GitHub Repository</div>
                  <div className="font-semibold text-white group-hover:text-brand-300">
                    github.com/Khushwinder-Dev
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Architecture & Privacy Notice Card */}
          <div className="rounded-2xl border border-white/10 bg-[#0a0f1c]/90 backdrop-blur-md p-6 space-y-4 text-xs text-slate-400 leading-relaxed">
            <div className="flex items-center gap-2 font-semibold text-white text-sm">
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span>Contact API & Excel Ledger Architecture</span>
            </div>
            <p>
              Submissions sent through this form use a transparent forwarding pipeline:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong className="text-slate-200">Local PC Storage:</strong> Forwarded securely via configurable <code className="text-brand-300 font-mono text-[11px]">CONTACT_API_URL</code> to the developer&apos;s personal PC receiver service.
              </li>
              <li>
                <strong className="text-slate-200">Formula Injection Sanitization:</strong> All inputs starting with <code className="text-slate-300 font-mono text-[11px]">=, +, -, @, \t, \r</code> are prepended with an apostrophe to prevent CSV/Excel formula injection.
              </li>
              <li>
                <strong className="text-slate-200">Honest Offline Status:</strong> If the local computer is powered off or disconnected, the system never fakes a successful submission and transparently guides you to direct email.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

