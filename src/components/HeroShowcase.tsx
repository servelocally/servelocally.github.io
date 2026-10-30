"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Cpu,
  Zap,
  Eye,
  Maximize2,
  CheckCircle2,
  Terminal,
  Activity,
} from "lucide-react";
import { AppShowcase } from "./AppShowcase";

export function HeroShowcase() {
  const [viewMode, setViewMode] = useState<"real" | "simulator">("real");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto pt-6 space-y-6">
      {/* View Switcher Pill */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="inline-flex p-1 rounded-xl bg-surface-100/90 border border-white/10 backdrop-blur-md shadow-xl">
          <button
            type="button"
            onClick={() => setViewMode("real")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "real"
                ? "bg-gradient-to-r from-brand-500 to-sky-400 text-slate-950 shadow-md font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Windows 11 Live App (Real UI)</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                viewMode === "real"
                  ? "bg-slate-950/20 text-slate-900"
                  : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              }`}
            >
              Verified
            </span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("simulator")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "simulator"
                ? "bg-gradient-to-r from-brand-500 to-sky-400 text-slate-950 shadow-md font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                viewMode === "simulator"
                  ? "bg-slate-950/20 text-slate-900"
                  : "bg-white/10 text-slate-300"
              }`}
            >
              Interactive
            </span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Authentic Real Screenshot */}
      {viewMode === "real" && (
        <div className="relative group">
          {/* Subtle Outer Neon Ambient Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500/20 via-sky-400/20 to-purple-500/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* Window Container */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#090d18] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
            {/* Top Windows 11 Chrome Banner */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#060a12]/95 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 inline-block" />
                </div>
                <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />
                <span className="text-xs font-medium text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">Serve Locally v1.0</span>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="text-slate-400 hidden sm:inline">Windows 11 Native Desktop</span>
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  RAM: 12.5 MB Live
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-100 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs font-medium cursor-pointer"
                  title="View full resolution screenshot"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Zoom</span>
                </button>
              </div>
            </div>

            {/* Main Showcase Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
              {/* Image Column */}
              <div className="lg:col-span-6 flex justify-center">
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0c1220] max-w-[380px] w-full cursor-pointer hover:border-brand-400/50 hover:shadow-brand-500/20 transition-all duration-300 group/img"
                >
                  <Image
                    src="/images/servelocally-app-ui.png"
                    alt="Serve Locally desktop application running natively on Windows 11, showing 12.5MB RAM, Nginx, PHP 8.3, MariaDB, and Mailpit"
                    width={562}
                    height={779}
                    priority
                    quality={100}
                    className="w-full h-auto object-contain transform group-hover/img:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500/80 backdrop-blur-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Click to expand full resolution
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Telemetry & Feature Annotations */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Live Windows Process Telemetry</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Authentic Fluent Dark Interface
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Captured directly from the running Windows 11 application. Built with Tauri v2 and Rust, Serve Locally pairs native Win32 kernel controls with an ultra-responsive interface.
                </p>

                {/* Highlight Cards */}
                <div className="space-y-2.5 pt-2">
                  <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <span>12.5 MB Active Memory</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">
                          Measured
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        Near-zero idle footprint. No background telemetry or invasive Windows Services.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-400/30 flex items-center justify-center shrink-0 text-brand-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-white">
                        Win32 Job Object Process Supervision
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        Child processes (Nginx, PHP, MariaDB, Mailpit) are bound to Windows NT Job Objects. Zero orphaned zombie processes when closed.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/10 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-400/30 flex items-center justify-center shrink-0 text-purple-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-white">
                        1-Click Toolbar & Auto Virtual Hosts
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        Instant access to WebRoot, Mailpit inbox (:8025), phpMyAdmin, and automatic *.test hosts synchronization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Interactive Live Simulator */}
      {viewMode === "simulator" && (
        <div className="space-y-3">
          <div className="text-center text-xs text-slate-400 font-mono">
            Interactive Live Simulator — Toggle services and extensions to test behavior:
          </div>
          <AppShowcase />
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-xl w-full bg-[#090d18] rounded-2xl border border-white/20 p-4 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm font-semibold text-white">
                  Serve Locally v1.0 — Windows 11 Running Interface
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors text-sm"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto rounded-xl flex justify-center bg-[#070b14] p-2">
              <Image
                src="/images/servelocally-app-ui.png"
                alt="Serve Locally desktop application full resolution screenshot"
                width={562}
                height={779}
                quality={100}
                className="w-auto h-auto max-h-[75vh] object-contain rounded-lg shadow-xl"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>Native Tauri v2 + Rust Windows 11 Fluent UI</span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-brand-500 text-slate-950 font-semibold hover:brightness-110"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

