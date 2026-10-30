"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Database,
  Mail,
  Folder,
  RefreshCw,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  port: number;
  icon: string;
  running: boolean;
  pid: number | null;
}

export function AppShowcase() {
  const [activeTab, setActiveTab] = useState<"services" | "vhosts" | "php" | "console">("services");
  const [allRunning, setAllRunning] = useState(true);
  const [activePhp, setActivePhp] = useState("php-8.3");
  const [ramUsage, setRamUsage] = useState("18.4 MB");

  const [services, setServices] = useState<ServiceItem[]>([
    { id: "nginx", name: "Nginx Web Server", port: 80, icon: "🌐", running: true, pid: 4920 },
    { id: "php", name: "PHP FastCGI", port: 9000, icon: "🐘", running: true, pid: 6184 },
    { id: "mysql", name: "MariaDB / MySQL", port: 3306, icon: "🐬", running: true, pid: 5824 },
    { id: "mailpit", name: "Mailpit Sandbox", port: 8025, icon: "📬", running: true, pid: 7412 },
  ]);

  const [extensions, setExtensions] = useState([
    { name: "pdo_mysql", desc: "MySQL PDO Driver", enabled: true },
    { name: "curl", desc: "cURL Library", enabled: true },
    { name: "mbstring", desc: "Multibyte String", enabled: true },
    { name: "openssl", desc: "OpenSSL Crypto", enabled: true },
    { name: "fileinfo", desc: "File MIME Detection", enabled: true },
    { name: "gd", desc: "GD Image Processing", enabled: true },
    { name: "intl", desc: "Internationalization", enabled: false },
    { name: "zip", desc: "Zip File Processing", enabled: true },
  ]);

  const [logs, setLogs] = useState<string[]>([
    "[10:14:02] [System] ServeLocally Supervisor Initialized.",
    "[10:14:02] [Win32 Kernel] Job Object attached: KILL_ON_JOB_CLOSE enabled.",
    "[10:14:03] [Nginx 1.26] Master process started on port 80.",
    "[10:14:03] [PHP FastCGI] php-cgi.exe listening on 127.0.0.1:9000 (v8.3.36 NTS).",
    "[10:14:03] [MariaDB 10.11] Engine ready on 127.0.0.1:3306 (Buffer pool: 32MB).",
    "[10:14:04] [Mailpit] SMTP listening on :1025 | Web UI active at :8025.",
    "[10:14:04] [DNS Proxy] *.test query routing active -> 127.0.0.1.",
    "[10:14:05] [VHosts] Auto-compiled config for demo-app.test (DocRoot: /public).",
  ]);

  const toggleAll = () => {
    const nextState = !allRunning;
    setAllRunning(nextState);
    setServices((prev) =>
      prev.map((s) => ({
        ...s,
        running: nextState,
        pid: nextState ? Math.floor(3000 + Math.random() * 5000) : null,
      }))
    );
    setRamUsage(nextState ? "18.4 MB" : "4.2 MB");
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [
      ...prev,
      `[${timestamp}] [Master] ${nextState ? "Started" : "Stopped"} all 4 stack services in parallel.`,
    ]);
  };

  const toggleService = (id: string) => {
    setServices((prev) => {
      const updated = prev.map((s) =>
        s.id === id
          ? { ...s, running: !s.running, pid: !s.running ? Math.floor(3000 + Math.random() * 5000) : null }
          : s
      );
      const runningCount = updated.filter((s) => s.running).length;
      setAllRunning(runningCount === updated.length);
      setRamUsage(`${(4.2 + runningCount * 3.5).toFixed(1)} MB`);
      return updated;
    });
  };

  const toggleExtension = (name: string) => {
    setExtensions((prev) =>
      prev.map((ext) => (ext.name === name ? { ...ext, enabled: !ext.enabled } : ext))
    );
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [
      ...prev,
      `[${timestamp}] [PHP Manager] Extension '${name}' toggled in php.ini. FastCGI recycled gracefully.`,
    ]);
  };

  const runningCount = services.filter((s) => s.running).length;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Decorative Outer Glow */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-brand-400/30 via-white/10 to-transparent shadow-2xl shadow-sky-500/10">
        {/* App Frame Window */}
        <div className="bg-[#0b101c] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Windows 11 Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#080d17] border-b border-white/5 select-none">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-brand-500/20 border border-brand-400/40 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="ServeLocally App Icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-slate-200">ServeLocally</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-500/10 border border-brand-400/20 text-brand-300">
                v1.0
              </span>
            </div>

            {/* Window control buttons */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/10"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/40"></span>
            </div>
          </div>

          {/* Master Control Banner */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-surface-100 via-[#101726] to-surface-100 border-b border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      runningCount > 0
                        ? "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)] animate-pulse"
                        : "bg-red-400/60"
                    }`}
                  />
                  <span className="text-sm font-semibold text-white">
                    {runningCount === services.length
                      ? `All Services Running (${runningCount}/${services.length})`
                      : runningCount > 0
                      ? `Partial Services Active (${runningCount}/${services.length})`
                      : "All Services Stopped"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span>
                    Active PHP: <strong className="text-brand-300">{activePhp}</strong>
                  </span>
                  <span>•</span>
                  <span>
                    Idle RAM: <strong className="text-emerald-400">{ramUsage}</strong>
                  </span>
                  <span>•</span>
                  <span>Kernel: Win32 Job Object</span>
                </div>
              </div>

              <button
                onClick={toggleAll}
                className={`px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 ${
                  allRunning
                    ? "bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30"
                    : "bg-gradient-to-r from-brand-500 to-sky-400 text-slate-950 font-bold hover:brightness-110 shadow-brand-500/20"
                }`}
              >
                <span>{allRunning ? "⏹ Stop All" : "▶ Start All"}</span>
              </button>
            </div>
          </div>

          {/* Quick Toolbar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-[#0a0f1b] border-b border-white/5 text-xs">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
              <Folder className="w-3.5 h-3.5 text-amber-400" />
              <span>./www WebRoot</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>Mailpit (:8025)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span>phpMyAdmin (:80)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span>Hosts Auto-Sync</span>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-white/5 bg-[#090d18] px-3 pt-2 gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-colors border-b-2 flex items-center gap-2 ${
                activeTab === "services"
                  ? "border-brand-400 text-white bg-white/5"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <span>Services</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-brand-500/20 text-brand-300 font-mono">
                {runningCount}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("vhosts")}
              className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-colors border-b-2 flex items-center gap-2 ${
                activeTab === "vhosts"
                  ? "border-brand-400 text-white bg-white/5"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <span>Virtual Hosts</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white/10 text-slate-300 font-mono">
                3
              </span>
            </button>
            <button
              onClick={() => setActiveTab("php")}
              className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-colors border-b-2 flex items-center gap-2 ${
                activeTab === "php"
                  ? "border-brand-400 text-white bg-white/5"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <span>PHP & Exts</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">
                8.3
              </span>
            </button>
            <button
              onClick={() => setActiveTab("console")}
              className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-colors border-b-2 flex items-center gap-2 ${
                activeTab === "console"
                  ? "border-brand-400 text-white bg-white/5"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Terminal className="w-3 h-3 text-slate-400" />
              <span>Console Logs</span>
            </button>
          </div>

          {/* Tab Content Panes */}
          <div className="p-4 sm:p-6 min-h-[340px] bg-[#0c1220]/70">
            {/* 1. SERVICES TAB */}
            {activeTab === "services" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((svc) => (
                  <div
                    key={svc.id}
                    className="p-3.5 rounded-xl bg-surface-100/70 border border-white/5 hover:border-white/10 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{svc.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-white">
                            {svc.name}
                          </span>
                          <span
                            className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                              svc.running
                                ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                                : "bg-white/5 text-slate-400"
                            }`}
                          >
                            {svc.running ? "Online" : "Stopped"}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          Port: :{svc.port} {svc.pid && `• PID: ${svc.pid}`}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleService(svc.id)}
                        className={`w-10 h-5 rounded-full transition-colors relative p-0.5 ${
                          svc.running ? "bg-brand-500" : "bg-slate-700"
                        }`}
                        title={svc.running ? "Click to Stop" : "Click to Start"}
                      >
                        <span
                          className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                            svc.running ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. VIRTUAL HOSTS TAB */}
            {activeTab === "vhosts" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                  <p>Projects dropped into <code className="text-brand-300 font-mono">./www</code> auto-compile to *.test with zero downtime.</p>
                  <span className="text-[11px] text-emerald-400 font-mono">3 Virtual Hosts Active</span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-surface-100/70 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-white">demo-app.test</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-400/20 text-sky-300">
                          /public
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">D:/Projects/serverApp/www/demo-app/public</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-brand-500/20 text-xs text-brand-300 font-mono flex items-center gap-1 border border-white/10">
                        Launch <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-100/70 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-white">wordpress-site.test</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-400/20 text-amber-300">
                          root
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">D:/Projects/serverApp/www/wordpress-site</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-brand-500/20 text-xs text-brand-300 font-mono flex items-center gap-1 border border-white/10">
                        Launch <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-100/70 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-white">laravel-shop.test</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-400/20 text-sky-300">
                          /public
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">D:/Projects/serverApp/www/laravel-shop/public</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-brand-500/20 text-xs text-brand-300 font-mono flex items-center gap-1 border border-white/10">
                        Launch <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. PHP & EXTENSIONS TAB */}
            {activeTab === "php" && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 mb-2">1-Click PHP Version Switcher</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: "php-8.4", title: "PHP 8.4", status: "Latest" },
                      { id: "php-8.3", title: "PHP 8.3", status: "Stable" },
                      { id: "php-8.2", title: "PHP 8.2", status: "LTS" },
                      { id: "php-8.1", title: "PHP 8.1", status: "Legacy" },
                    ].map((p) => (
                      <div
                        key={p.id}
                        onClick={() => setActivePhp(p.id)}
                        className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                          activePhp === p.id
                            ? "bg-brand-500/15 border-brand-400/50 text-white shadow-sm"
                            : "bg-surface-100/60 border-white/5 text-slate-400 hover:text-white"
                        }`}
                      >
                        <div className="text-xs font-semibold">{p.title}</div>
                        <div className="text-[10px] font-mono text-brand-300 mt-0.5">
                          {activePhp === p.id ? "✓ Active" : p.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-semibold text-slate-300">Common Extensions (php.ini)</h4>
                    <span className="text-[11px] text-slate-500">Recycles PHP-CGI without server downtime</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {extensions.map((ext) => (
                      <div
                        key={ext.name}
                        onClick={() => toggleExtension(ext.name)}
                        className={`p-2 rounded-lg border text-left cursor-pointer transition-all flex items-center justify-between ${
                          ext.enabled
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-200"
                            : "bg-surface-100/40 border-white/5 text-slate-500"
                        }`}
                      >
                        <div>
                          <div className="text-xs font-mono font-medium">{ext.name}</div>
                          <div className="text-[10px] opacity-75">{ext.desc}</div>
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            ext.enabled ? "bg-emerald-400 shadow-[0_0_6px_#10b981]" : "bg-slate-700"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. CONSOLE LOGS TAB */}
            {activeTab === "console" && (
              <div className="bg-[#070b14] rounded-xl p-3 border border-white/5 font-mono text-xs text-slate-300 space-y-1.5 h-64 overflow-y-auto">
                {logs.map((line, idx) => (
                  <div key={idx} className="leading-relaxed">
                    <span className="text-slate-500">{line.substring(0, 10)}</span>
                    <span className="text-brand-300 font-semibold">{line.substring(10, 24)}</span>
                    <span className="text-slate-300">{line.substring(24)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-3 bg-[#080d17] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <div>
              Created by <strong className="text-white">Khushwinder</strong> • Native Rust & Tauri v2
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Live Supervisor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

