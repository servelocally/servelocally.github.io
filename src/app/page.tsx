import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
  Globe,
  Terminal,
  Database,
  Mail,
  Code2,
  HardDrive,
  Sparkles,
  Server,
  Workflow,
  ExternalLink,
} from "lucide-react";
import { AppShowcase } from "@/components/AppShowcase";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata = {
  title: "Serve Locally — Your Local Development Environment. Simplified.",
  description:
    "An ultra-lightweight, bloat-free local web development environment for Windows 11 & 10. Runs Nginx, multi-version PHP (8.1-8.4), MariaDB, and Mailpit under 25 MB RAM.",
};

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100/80 border border-white/10 text-xs text-slate-300 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">Serve Locally v1.0 Released</span>
            <span className="text-slate-500">•</span>
            <Link
              href="/download"
              className="text-brand-300 hover:text-white font-medium flex items-center gap-1"
            >
              Get Installer <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Your Local Development Environment.{" "}
              <span className="bg-gradient-to-r from-brand-300 via-sky-400 to-brand-500 bg-clip-text text-transparent">
                Simplified.
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A high-performance, bloat-free local server stack for Windows 11 & 10.
              Built with Tauri v2 and Rust for{" "}
              <strong className="text-slate-200 font-semibold">&lt; 25 MB idle RAM</strong>,
              zero orphaned zombie processes, and instant{" "}
              <code className="text-brand-300 font-mono text-sm px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                *.test
              </code>{" "}
              virtual hosts.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-sky-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-brand-500/25 hover:brightness-110 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows (64-bit)</span>
            </Link>

            <Link
              href="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-100/80 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-sm transition-all"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Architecture Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Win32 Job Object Isolation
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-brand-400" />
              &lt; 25 MB RAM Idle
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              Zero Windows Services
            </span>
          </div>

          {/* Interactive Desktop Application Showcase */}
          <div className="pt-8">
            <div className="text-center pb-4">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">
                Interactive Live Preview (Try Clicking Tabs & Switches)
              </span>
            </div>
            <AppShowcase />
          </div>
        </div>
      </section>

      {/* 2. KEY BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-400 font-mono">
            Engineered for Developers
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Why developers are switching from legacy stacks
          </p>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern development demands speed and cleanliness. Traditional stacks
            like XAMPP clutter your system registry and lock ports with zombie processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 hover:border-brand-400/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-400/30 flex items-center justify-center text-brand-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Zero Zombie Processes
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Bind child processes to native Windows NT Job Objects with{" "}
              <code className="text-brand-300 font-mono text-xs">
                KILL_ON_JOB_CLOSE
              </code>
              . If Serve Locally exits, all child processes terminate immediately.
              Never battle locked ports 80, 9000, or 3306 again.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 hover:border-brand-400/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Ultra-Low Idle Memory (&lt; 25 MB)
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Built with Rust and Tauri v2 using the built-in Windows WebView2
              runtime. MariaDB is optimized with a low-memory 32MB buffer pool.
              Save hundreds of megabytes of RAM compared to heavyweight alternatives.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 hover:border-brand-400/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Dynamic *.test Virtual Hosts
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Drop any folder into <code className="text-brand-300 font-mono text-xs">./www</code>.
              Serve Locally automatically detects <code className="text-brand-300 font-mono text-xs">/public</code>{" "}
              document roots (Laravel, Symfony, Vite) vs root projects, and writes
              dynamic Nginx configs with zero downtime.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 hover:border-brand-400/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              1-Click PHP Version Manager
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Switch seamlessly between PHP 8.1, 8.2, 8.3, and 8.4. FastCGI
              gracefully recycles on port 9000. Toggle extensions like{" "}
              <code className="text-brand-300 font-mono text-xs">pdo_mysql</code>,{" "}
              <code className="text-brand-300 font-mono text-xs">curl</code>, and{" "}
              <code className="text-brand-300 font-mono text-xs">mbstring</code> directly from the UI.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 hover:border-brand-400/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Embedded Mailpit Sandbox
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              No more fake sendmail or broken SMTP scripts. Mailpit listens on{" "}
              <code className="text-brand-300 font-mono text-xs">127.0.0.1:1025</code>{" "}
              and provides a clean, fast webmail inbox on port 8025 to inspect
              all transactional emails safely.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 hover:border-brand-400/30 transition-all space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              100% Portable & Isolated
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Installs in currentUser space with zero background Windows
              Services. Clean directory structure with portable Nginx, PHP,
              MariaDB, and Mailpit binaries. Doesn&apos;t alter your system path or registry.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (3 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0e1628] to-[#0a0f1c] border border-white/10 shadow-2xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-400 font-mono">
              Simple 3-Step Workflow
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              From zero to running your first local website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="space-y-4 relative">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/15 border border-brand-400/30 text-brand-300 font-mono text-lg font-bold flex items-center justify-center">
                01
              </div>
              <h3 className="text-base font-semibold text-white">
                Download & Install
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Run the lightweight <strong className="text-slate-200">ServeLocally-Setup.exe</strong> installer.
                Installs in seconds under your user profile without admin rights or Windows service registration.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 relative">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 text-sky-300 font-mono text-lg font-bold flex items-center justify-center">
                02
              </div>
              <h3 className="text-base font-semibold text-white">
                Drop Projects in ./www
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Create a folder in <code className="text-brand-300 font-mono text-xs">./www/my-project</code>.
                Serve Locally automatically detects <code className="text-brand-300 font-mono text-xs">/public</code>{" "}
                subdirectories and compiles the Nginx server block.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 relative">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono text-lg font-bold flex items-center justify-center">
                03
              </div>
              <h3 className="text-base font-semibold text-white">
                1-Click Start & Browse
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Hit <strong className="text-slate-200">Start All</strong> in the UI.
                Your website is live at <code className="text-brand-300 font-mono text-xs">http://my-project.test</code>.
                Mailpit and phpMyAdmin are ready instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERIFIED SUPPORTED COMPONENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-400 font-mono">
            Verified Stack Components
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Only real, confirmed technologies
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            Everything is isolated in portable binaries without external dependencies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 text-center space-y-1">
            <span className="text-2xl">🌐</span>
            <div className="font-semibold text-white text-xs sm:text-sm">Nginx</div>
            <div className="text-[11px] text-brand-300 font-mono">v1.26 Stable</div>
            <div className="text-[10px] text-slate-500">Port :80</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 text-center space-y-1">
            <span className="text-2xl">🐘</span>
            <div className="font-semibold text-white text-xs sm:text-sm">PHP FastCGI</div>
            <div className="text-[11px] text-brand-300 font-mono">8.1 / 8.2 / 8.3 / 8.4</div>
            <div className="text-[10px] text-slate-500">Port :9000</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 text-center space-y-1">
            <span className="text-2xl">🐬</span>
            <div className="font-semibold text-white text-xs sm:text-sm">MariaDB</div>
            <div className="text-[11px] text-brand-300 font-mono">v10.11 x64</div>
            <div className="text-[10px] text-slate-500">Port :3306</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 text-center space-y-1">
            <span className="text-2xl">📬</span>
            <div className="font-semibold text-white text-xs sm:text-sm">Mailpit</div>
            <div className="text-[11px] text-brand-300 font-mono">SMTP & Web UI</div>
            <div className="text-[10px] text-slate-500">:1025 / :8025</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 text-center space-y-1">
            <span className="text-2xl">🗄️</span>
            <div className="font-semibold text-white text-xs sm:text-sm">Database UI</div>
            <div className="text-[11px] text-brand-300 font-mono">phpMyAdmin & Adminer</div>
            <div className="text-[10px] text-slate-500">Pre-configured</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 text-center space-y-1">
            <span className="text-2xl">🦀</span>
            <div className="font-semibold text-white text-xs sm:text-sm">Rust & Tauri v2</div>
            <div className="text-[11px] text-brand-300 font-mono">Job Object Supervisor</div>
            <div className="text-[10px] text-slate-500">Native NT Kernel</div>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-400 font-mono">
            Side-by-Side Comparison
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Serve Locally vs XAMPP vs Laragon
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            Factual engineering comparison based on actual software architecture.
          </p>
        </div>

        <ComparisonTable />
      </section>

      {/* 6. SYSTEM REQUIREMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-100/60 border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Windows System Requirements
              </h3>
              <p className="text-xs text-slate-400">
                Lightweight requirements suitable for laptops, desktops, and ultrabooks
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-[#080d17] border border-white/5 space-y-1">
              <div className="text-slate-500 font-mono">Operating System</div>
              <div className="font-semibold text-white">Windows 11 / 10 (64-bit)</div>
              <div className="text-[11px] text-slate-400">Build 1809 or newer</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#080d17] border border-white/5 space-y-1">
              <div className="text-slate-500 font-mono">Memory (RAM)</div>
              <div className="font-semibold text-white">&lt; 25 MB Idle</div>
              <div className="text-[11px] text-slate-400">512 MB+ recommended for apps</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#080d17] border border-white/5 space-y-1">
              <div className="text-slate-500 font-mono">Storage Space</div>
              <div className="font-semibold text-white">250 MB Free Disk</div>
              <div className="text-[11px] text-slate-400">Portable core stack binaries</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#080d17] border border-white/5 space-y-1">
              <div className="text-slate-500 font-mono">UI Runtime</div>
              <div className="font-semibold text-white">Microsoft Edge WebView2</div>
              <div className="text-[11px] text-slate-400">Pre-installed on Win 10 & 11</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-400 font-mono">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Developer Questions Answered
          </p>
        </div>

        <FaqAccordion />
      </section>

      {/* 8. FINAL DOWNLOAD CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-brand-600/20 via-sky-500/10 to-brand-700/20 border border-brand-400/30 text-center space-y-6 overflow-hidden shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center shadow-lg shadow-brand-500/20">
            <Image
              src="/images/logo.png"
              alt="Serve Locally"
              width={38}
              height={38}
              className="w-10 h-10 object-contain"
            />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready for a faster local development workflow?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Free, lightweight, and bloat-free. Download Serve Locally for Windows now.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-sky-400 text-slate-950 font-bold text-sm shadow-xl shadow-brand-500/25 hover:brightness-110 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Serve Locally v1.0 (64.1 MB)</span>
            </Link>

            <Link
              href="/docs/getting-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all"
            >
              <span>Read Documentation</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          <div className="text-[11px] text-slate-400 font-mono pt-2">
            Version 1.0.0 Stable • Windows 10/11 (x64) • SHA-256 Checksum Verified
          </div>
        </div>
      </section>
    </div>
  );
}

