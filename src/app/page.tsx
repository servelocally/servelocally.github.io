import React from "react";
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
  Lock,
  ExternalLink,
  Github,
  Linkedin,
  User,
  Check,
  RefreshCw,
  FolderSync,
  Box,
} from "lucide-react";
import { HeroShowcase } from "@/components/HeroShowcase";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FAQS } from "@/data/faqs";
import { FaqStructuredData } from "@/components/StructuredData";

export const metadata = {
  title:
    "Serve Locally — Fast, Lightweight Local PHP & MySQL Server for Windows | Modern XAMPP Alternative",
  description:
    "Download Serve Locally: the fast, ultra-lightweight local web development environment for Windows 11 & 10. Runs Nginx, multi-version PHP (8.1-8.4), MariaDB, and Mailpit under 25 MB RAM with zero zombie processes.",
};

export default function HomePage() {
  const sha256 = "DBDC7FD99ECACDBE522CDF8E59CE74EAFF6EE959743535E77F6888A4861B8FAA";

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      <FaqStructuredData faqs={FAQS} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100/80 border border-white/10 text-xs text-slate-300 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">Serve Locally v1.0.0 Stable</span>
            <span className="text-slate-500">•</span>
            <a
              href="#download"
              className="text-brand-300 hover:text-white font-medium flex items-center gap-1"
            >
              Get Windows Installer <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Fast, Lightweight Local Server for Windows.{" "}
              <span className="bg-gradient-to-r from-brand-300 via-sky-400 to-brand-500 bg-clip-text text-transparent">
                Zero Zombie Processes.
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The modern <strong className="text-white font-semibold">XAMPP &amp; Laragon alternative</strong> for Windows 11 &amp; 10.
              Built natively with Tauri v2 and Rust for{" "}
              <strong className="text-brand-300 font-semibold">&lt; 25 MB idle RAM</strong>,
              automated{" "}
              <code className="text-brand-300 font-mono text-sm px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                *.test
              </code>{" "}
              virtual hosts, multi-version PHP, and zero locked ports.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-sky-500/25 border border-sky-400/30 hover:shadow-sky-500/40 active:scale-95 transition-all relative overflow-hidden group"
            >
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <Download className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-y-0.5" />
              <span className="text-white">Download Free for Windows (75.5 MB)</span>
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-100/80 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-sm transition-all"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="https://khushwinder-dev.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              <span>Contact Developer</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
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
              Zero Windows Services Installed
            </span>
          </div>

          {/* Desktop Application Showcase (Authentic Screenshot & Simulator) */}
          <div className="pt-8">
            <HeroShowcase />
          </div>
        </div>
      </section>

      {/* 2. KEY BENEFITS & FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-400 font-mono">
            Engineered for Developers
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Why developers are switching to Serve Locally
          </p>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern development demands speed, cleanliness, and reliability. Traditional monolithic
            stacks rely on background Windows services and manual process polling that leave ports locked after exit.
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
              100% Portable &amp; Isolated
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Installs in currentUser space with zero background Windows
              Services. Clean directory structure with portable Nginx, PHP,
              MariaDB, and Mailpit binaries. Doesn&apos;t alter your system path or registry.
            </p>
          </div>
        </div>
      </section>

      {/* 3. VERIFIED SUPPORTED COMPONENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-400 font-mono">
            Verified Stack Components
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
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
            <div className="text-[11px] text-brand-300 font-mono">SMTP &amp; Web UI</div>
            <div className="text-[10px] text-slate-500">:1025 / :8025</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 text-center space-y-1">
            <span className="text-2xl">🗄️</span>
            <div className="font-semibold text-white text-xs sm:text-sm">Database UI</div>
            <div className="text-[11px] text-brand-300 font-mono">phpMyAdmin &amp; Adminer</div>
            <div className="text-[10px] text-slate-500">Pre-configured</div>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/5 text-center space-y-1">
            <span className="text-2xl">🦀</span>
            <div className="font-semibold text-white text-xs sm:text-sm">Rust &amp; Tauri v2</div>
            <div className="text-[11px] text-brand-300 font-mono">Job Object Supervisor</div>
            <div className="text-[10px] text-slate-500">Native NT Kernel</div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (3 STEPS) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
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
                Download &amp; Install
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
                1-Click Start &amp; Browse
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

      {/* 5. FRAMEWORK & CMS SUPPORT (WordPress, Laravel, Symfony) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090e1a]/80 border border-white/10 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-400 font-mono">
              Framework &amp; CMS Ready
            </h2>
            <p className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Built for Modern PHP Frameworks &amp; CMS Platforms
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Whether you are developing enterprise Laravel applications, building custom WordPress themes,
              or running modern full-stack web apps, Serve Locally provides zero-friction configuration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface-100/50 border border-white/10 hover:border-brand-400/30 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-lg">
                L
              </div>
              <h3 className="text-lg font-semibold text-white">Laravel &amp; Symfony</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Automatic <code className="text-brand-300 font-mono text-xs">/public</code> document root detection
                generates optimized Nginx rewrites for <code className="text-brand-300 font-mono text-xs">index.php?$query_string</code>.
                Connect your <code className="text-slate-300 font-mono text-xs">.env</code> directly to MariaDB on port 3306 and route verification emails through Mailpit on port 1025.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-100/50 border border-white/10 hover:border-brand-400/30 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">
                W
              </div>
              <h3 className="text-lg font-semibold text-white">WordPress &amp; WooCommerce</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Say goodbye to Apache `.htaccess` slowdowns. Serve Locally serves WordPress assets via Nginx with instant rewrite rules.
                Create MySQL databases in seconds using phpMyAdmin or the featherweight single-file Adminer tool.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-100/50 border border-white/10 hover:border-brand-400/30 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-lg">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-white">Full-Stack &amp; Headless</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Pair modern frontend apps (Vite, Next.js, Nuxt) with PHP FastCGI APIs.
                Switch active PHP runtimes between 8.1, 8.2, 8.3, and 8.4 in 1 click to test backwards compatibility and new language features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 2-MINUTE MIGRATION GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-surface-100 via-[#0a101d] to-surface-100 border border-white/10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20 text-xs font-mono text-brand-300">
                <FolderSync className="w-3.5 h-3.5" />
                <span>Zero-Friction Switch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Migrate from XAMPP or Laragon in Under 2 Minutes
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Tired of port collisions and slow Apache setups? Your existing projects transfer seamlessly.
              </p>
            </div>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500/15 hover:bg-brand-500/25 border border-brand-400/30 text-brand-300 font-semibold text-xs sm:text-sm transition-all shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Get Serve Locally Installer</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-black/30 border border-white/5 space-y-2">
              <div className="text-brand-400 font-mono font-bold text-xs">Step 1 • Export Databases</div>
              <h4 className="font-semibold text-white">Export Your MySQL Data</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Export databases from XAMPP or Laragon via phpMyAdmin or run <code className="text-slate-300 font-mono">mysqldump -u root --all-databases &gt; backup.sql</code>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/30 border border-white/5 space-y-2">
              <div className="text-sky-400 font-mono font-bold text-xs">Step 2 • Move Folders</div>
              <h4 className="font-semibold text-white">Copy Projects to ./www</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Copy your project folders from <code className="text-slate-300 font-mono">C:\xampp\htdocs</code> or <code className="text-slate-300 font-mono">C:\laragon\www</code> straight into Serve Locally&apos;s <code className="text-slate-300 font-mono">./www</code> directory.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/30 border border-white/5 space-y-2">
              <div className="text-emerald-400 font-mono font-bold text-xs">Step 3 • Start &amp; Browse</div>
              <h4 className="font-semibold text-white">Click &ldquo;Start All&rdquo;</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Launch Serve Locally, click &ldquo;Start All&rdquo;, and import your SQL backup via phpMyAdmin. Your projects immediately resolve at <code className="text-brand-300 font-mono">http://project-name.test</code>!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMPARISON & REQUIREMENTS */}
      <section id="comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
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

        {/* System Requirements Grid */}
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
              <div className="text-[11px] text-slate-400">Pre-installed on Win 10 &amp; 11</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DEDICATED OFFICIAL DOWNLOAD SECTION */}
      <section id="download" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
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
                  Official Windows 64-bit NSIS Setup Package • Fast, Bloat-Free Local Server
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="/downloads/ServeLocally-Setup.exe"
                download="ServeLocally-Setup.exe"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 border border-sky-400/30 hover:shadow-sky-500/40 active:scale-95 transition-all text-center relative overflow-hidden group"
              >
                <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <Download className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-y-0.5" />
                <span className="text-white">Download Installer (75.5 MB)</span>
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
              <div className="text-white font-semibold">75.5 MB (79,221,676 bytes)</div>
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

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-2.5 text-emerald-300">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>VirusTotal Clean</span>
            </div>
            <div className="p-3 rounded-xl bg-sky-500/5 border border-sky-500/20 flex items-center gap-2.5 text-sky-300">
              <HardDrive className="w-4 h-4 shrink-0 text-sky-400" />
              <span>100% Offline Installer</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-center gap-2.5 text-amber-300">
              <Zap className="w-4 h-4 shrink-0 text-amber-400" />
              <span>0 Background Services</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 flex items-center gap-2.5 text-purple-300">
              <Lock className="w-4 h-4 shrink-0 text-purple-400" />
              <span>Job Object Isolation</span>
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

          {/* Package Inclusions Preview */}
          <div className="pt-4 border-t border-white/5 space-y-2 text-xs text-slate-300">
            <div className="font-semibold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>What&apos;s Included in the 75.5 MB Package:</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400 text-xs">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Portable Nginx 1.26 Stable with dynamic vhost compiler</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>PHP 8.3 NTS FastCGI with pre-configured extensions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>MariaDB 10.11 Server configured with 32MB low buffer pool</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mailpit SMTP &amp; Web Inbox Sandbox for local email debugging</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. ABOUT THE CREATOR & DIRECT CONTACT */}
      <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface-100 via-[#0e1628] to-surface-100 border border-white/10 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20 text-xs font-mono text-brand-300 mb-2">
                <User className="w-3.5 h-3.5" />
                <span>Creator &amp; Engineer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                About the Developer
              </h2>
              <p className="text-sm text-slate-400">
                Created by <strong className="text-white">Khushwinder</strong> — Full Stack &amp; Systems Developer
              </p>
            </div>

            {/* Direct Contact Button */}
            <a
              href="https://khushwinder-dev.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 border border-sky-400/30 hover:shadow-sky-500/40 active:scale-95 transition-all text-center relative overflow-hidden group shrink-0"
            >
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <Mail className="w-4 h-4 text-white" />
              <span>Contact Khushwinder</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-base">The Philosophy</h3>
              <p className="text-slate-400">
                For over two decades, web developers on Windows have struggled with monolithic stacks that leave orphan background processes locking ports, bloat system memory, and clutter registry keys.
              </p>
              <p className="text-slate-400">
                Serve Locally was built using <strong className="text-slate-200">Rust, Tauri v2</strong>, and <strong className="text-slate-200">Win32 NT Job Objects</strong> to give developers a featherweight, rock-solid alternative with zero zombie processes and an idle footprint under 25 MB RAM.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white text-base">Connect &amp; Inquiries</h3>
              <p className="text-slate-400">
                Have a question, feedback, or collaboration inquiry? You can reach me directly through my portfolio website, social profiles, or email:
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://khushwinder-dev.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-400" />
                  <span>Portfolio</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href="https://github.com/Khushwinder-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-brand-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href="https://www.linkedin.com/in/khushwinder-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-brand-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href="mailto:Khushwinder.dev@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-400" />
                  <span>Khushwinder.dev@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-400 font-mono">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Developer Questions Answered
          </p>
          <p className="text-xs sm:text-sm text-slate-400">
            Everything you need to know about switching, architecture, and running Serve Locally
          </p>
        </div>

        <FaqAccordion />
      </section>

      {/* 11. FINAL DOWNLOAD CTA BANNER */}
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
              Free, lightweight, and bloat-free. Download Serve Locally for Windows now and never battle zombie processes again.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="/downloads/ServeLocally-Setup.exe"
              download="ServeLocally-Setup.exe"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 border border-sky-400/30 hover:shadow-sky-500/40 active:scale-95 transition-all relative overflow-hidden group"
            >
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <Download className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>Download Serve Locally v1.0 (75.5 MB)</span>
            </a>

            <a
              href="https://khushwinder-dev.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all"
            >
              <span>Contact Developer</span>
              <ExternalLink className="w-4 h-4 text-slate-300" />
            </a>
          </div>

          <div className="text-[11px] text-slate-400 font-mono pt-2">
            Version 1.0.0 Stable • Windows 10/11 (x64) • SHA-256 Checksum Verified • 100% Free
          </div>
        </div>
      </section>
    </div>
  );
}
