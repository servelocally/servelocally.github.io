import React from "react";
import Link from "next/link";
import { Home, Download, Mail, ExternalLink } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20 text-brand-300 inline-block">
        Error 404: Route Not Found
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        Page Not Located
      </h1>

      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
        Serve Locally is designed as a single, all-in-one product landing page. The page you requested does not exist or has been consolidated.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-sky-500/20 border border-sky-400/30"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/#download"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-100/70 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-slate-400" />
          <span>Download Installer</span>
        </Link>
        <a
          href="https://khushwinder-dev.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-100/70 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-slate-400" />
          <span>Contact Developer</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>
      </div>
    </div>
  );
}
