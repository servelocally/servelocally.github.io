"use client";

import React, { useState, useEffect } from "react";
import { Shield, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("servelocally_privacy_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("servelocally_privacy_dismissed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full p-4 rounded-xl bg-[#0e1626]/95 border border-white/10 shadow-2xl backdrop-blur-md text-xs text-slate-300 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-start gap-3">
        <div className="p-1.5 rounded-lg bg-brand-500/10 text-brand-400 shrink-0">
          <Shield className="w-4 h-4" />
        </div>
        <div className="flex-1 space-y-1">
          <p className="font-semibold text-white">Developer Privacy First</p>
          <p className="text-slate-400 leading-relaxed">
            Serve Locally does not use tracking or advertising cookies. Submissions and downloads are handled transparently.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={dismiss}
              className="px-3 py-1 bg-brand-500 text-slate-950 font-medium rounded-md hover:brightness-110 transition-all text-[11px]"
            >
              Got it
            </button>
          </div>
        </div>
        <button
          onClick={dismiss}
          className="text-slate-400 hover:text-white p-1"
          aria-label="Dismiss notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

