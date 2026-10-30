import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Download } from "lucide-react";

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
        The requested URL does not exist in the Serve Locally documentation or product pages.
        It may have been moved or updated.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-semibold text-xs hover:brightness-110 transition-all shadow-md shadow-brand-500/20"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/docs/getting-started"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-100/70 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
          <span>Read Documentation</span>
        </Link>
        <Link
          href="/download"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-100/70 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-slate-400" />
          <span>Download Installer</span>
        </Link>
      </div>
    </div>
  );
}

