import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Globe,
  Code2,
  Database,
  Mail,
  Zap,
  Terminal,
  Layers,
  ArrowRight,
  Download,
  Settings,
  HardDrive,
  RefreshCw,
  Sparkles,
  Lock,
} from "lucide-react";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

export const metadata = {
  title: "Features — Serve Locally Technical Capabilities & Architecture",
  description:
    "Explore the engineering behind Serve Locally: Win32 Job Object zombie process killer, sub-25MB idle RAM, dynamic *.test virtual hosts, and 1-click PHP version switching.",
};

export default function FeaturesPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://servelocally.github.io" },
    { name: "Features", url: "https://servelocally.github.io/features" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 pb-24">
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20 text-xs font-mono text-brand-300">
          <Zap className="w-3.5 h-3.5" />
          <span>Technical Architecture & Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineered for Clean, Fast Development
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Every feature in Serve Locally was designed to solve a specific pain point found in
          legacy stacks: orphaned processes, bloated memory, messy config files, and broken mail.
        </p>
      </div>

      {/* Category 1: Core Process Architecture & Stability */}
      <section id="job-objects" className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-brand-400">
            01 / System Kernel & Process Supervision
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Rock-Solid Process Supervision with Win32 Job Objects
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              In traditional development stacks like XAMPP, closing the application or
              experiencing an unexpected crash leaves child processes (<code className="text-brand-300 font-mono text-xs">nginx.exe</code>, <code className="text-brand-300 font-mono text-xs">php-cgi.exe</code>, <code className="text-brand-300 font-mono text-xs">mysqld.exe</code>)
              running as headless zombies. This locks ports 80, 9000, and 3306 until you manually dig through Windows Task Manager.
            </p>
            <p>
              Serve Locally completely eliminates this problem at the Windows NT Kernel level using{" "}
              <strong className="text-white">Win32 Job Objects</strong> with the{" "}
              <code className="text-brand-300 font-mono text-xs">JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE</code> flag.
              Every process spawned by the supervisor is attached to this handle.
            </p>
            <div className="p-4 rounded-xl bg-surface-100/70 border border-white/10 space-y-2">
              <div className="font-semibold text-white text-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Developer Benefits:</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>Zero orphaned background processes locking ports</li>
                <li>Instant kernel-enforced cleanup even on crashes or Task Manager kill</li>
                <li>Zero Windows Services registered in the system registry</li>
                <li>100% portable, non-intrusive currentUser installation</li>
              </ul>
            </div>
          </div>

          {/* Rust Code Block */}
          <div className="rounded-2xl border border-white/10 bg-[#090d18] overflow-hidden shadow-2xl">
            <div className="px-4 py-2.5 bg-[#060a12] border-b border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-400/60" />
                <span>src-tauri/src/job_object.rs</span>
              </span>
              <span className="text-brand-400 text-[11px]">Rust (Win32 API)</span>
            </div>
            <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
              <code>{`// Native NT Kernel Process Management
let mut info: JOBOBJECT_EXTENDED_LIMIT_INFORMATION = 
    std::mem::zeroed();

// Enforce immediate child kill when parent closes
info.BasicLimitInformation.LimitFlags = 
    JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE;

SetInformationJobObject(
    handle,
    JobObjectExtendedLimitInformation,
    &info as *const _ as *const _,
    std::mem::size_of::<JOBOBJECT_EXTENDED_LIMIT_INFORMATION>() as u32,
);`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Category 2: Web Server & Virtual Hosts */}
      <section id="vhosts" className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400">
            02 / Web Server & Domain Routing
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Dynamic *.test Virtual Hosts with Automatic /public Detection
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              Forget manually editing <code className="text-brand-300 font-mono text-xs">httpd-vhosts.conf</code> or
              dealing with fragile symlinks. Serve Locally includes an active filesystem watcher on{" "}
              <code className="text-brand-300 font-mono text-xs">./www</code>.
            </p>
            <p>
              When you create a project directory, Serve Locally analyzes its structure.
              If a <code className="text-brand-300 font-mono text-xs">/public</code> folder exists
              (standard in Laravel, Symfony, Vite, and CakePHP), it sets the Nginx document root to{" "}
              <code className="text-brand-300 font-mono text-xs">/public</code>. Otherwise, it serves from the root
              (ideal for WordPress and standalone PHP scripts).
            </p>
            <div className="p-4 rounded-xl bg-surface-100/70 border border-white/10 space-y-2">
              <div className="font-semibold text-white text-xs flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400" />
                <span>Zero Configuration Virtual Hosts:</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>Automatic domain generation: folder name becomes <code className="text-slate-300">&lt;folder&gt;.test</code></li>
                <li>Zero-downtime Nginx configuration reload via <code className="text-slate-300">nginx -s reload</code></li>
                <li>Embedded UDP DNS Proxy: routes all <code className="text-slate-300">*.test</code> queries to <code className="text-slate-300">127.0.0.1</code></li>
                <li>Safe delimited Windows hosts file sync fallback when needed</li>
              </ul>
            </div>
          </div>

          {/* Nginx Config Block */}
          <div className="rounded-2xl border border-white/10 bg-[#090d18] overflow-hidden shadow-2xl">
            <div className="px-4 py-2.5 bg-[#060a12] border-b border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400/60" />
                <span>bin/nginx/conf/vhosts/&lt;app&gt;.conf</span>
              </span>
              <span className="text-sky-400 text-[11px]">Nginx 1.26 Stable</span>
            </div>
            <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
              <code>{`# Auto-Compiled Virtual Host Block
server {
    listen 80;
    server_name my-app.test;
    root "D:/Projects/serverApp/www/my-app/public";
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \\.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Category 3: PHP Runtime & Extensions */}
      <section id="php-manager" className="space-y-8">
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400">
            03 / PHP Runtime & Extensions
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Multi-Version PHP Switching & UI Extension Toggling
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-surface-100/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-base">PHP 8.4</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Latest
              </span>
            </div>
            <p className="text-xs text-slate-400">
              PHP 8.4.27 NTS x64 with property hooks, asymmetric visibility, and new array functions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-100/60 border border-brand-400/40 bg-brand-500/[0.03] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-base">PHP 8.3</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Default Stable
              </span>
            </div>
            <p className="text-xs text-slate-400">
              PHP 8.3.36 NTS x64 with typed class constants, json_validate(), and dynamic class fetching.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-100/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-base">PHP 8.2</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                LTS
              </span>
            </div>
            <p className="text-xs text-slate-400">
              PHP 8.2.27 NTS x64 readonly classes, null/false standalone types, and Disjunctive Normal Form types.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-100/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-base">PHP 8.1</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Legacy Support
              </span>
            </div>
            <p className="text-xs text-slate-400">
              PHP 8.1.31 NTS x64 for legacy maintenance, enums, fibers, and readonly properties.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 space-y-4">
          <h4 className="text-sm font-semibold text-white">
            1-Click php.ini Extension Toggles (FastCGI Recycled Gracefully)
          </h4>
          <p className="text-xs text-slate-400">
            No need to search for <code className="text-brand-300 font-mono text-xs">php.ini</code> in subdirectories and uncomment semicolons. Toggle standard development extensions directly from the UI:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-slate-200">pdo_mysql</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-slate-200">curl</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-slate-200">mbstring</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-slate-200">openssl</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-slate-200">fileinfo</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-slate-200">gd</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-slate-200">zip</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-slate-200">intl</span>
              <span className="w-2 h-2 rounded-full bg-slate-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Category 4: Database & Email Sandbox */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MariaDB & phpMyAdmin */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-100/60 border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">
            MariaDB 10.11 & Database Tools
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            MariaDB 10.11 is pre-configured with memory tuning (<code className="text-brand-300 font-mono text-xs">innodb_buffer_pool_size = 32M</code>)
            so it stays lean under 30MB RAM. Includes both full <strong className="text-slate-200">phpMyAdmin</strong> and the single-file <strong className="text-slate-200">Adminer</strong> manager.
          </p>
          <div className="space-y-1.5 text-xs font-mono text-slate-300 pt-2 border-t border-white/5">
            <div>Host: 127.0.0.1:3306</div>
            <div>User: root (empty password)</div>
            <div>phpMyAdmin: http://localhost/phpmyadmin/</div>
            <div>Adminer: http://localhost/adminer.php</div>
          </div>
        </div>

        {/* Mailpit Sandbox */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-100/60 border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">
            Embedded Mailpit Email Sandbox
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Catch all outgoing emails locally with zero setup. Mailpit provides an SMTP server on port 1025 and a responsive web inbox on port 8025. Inspect HTML templates, headers, raw MIME, and attachments without external email providers.
          </p>
          <div className="space-y-1.5 text-xs font-mono text-slate-300 pt-2 border-t border-white/5">
            <div>SMTP Host: 127.0.0.1:1025 (No Auth)</div>
            <div>Web Inbox: http://localhost:8025</div>
            <div>PHP mail() Pre-routed</div>
            <div>Fast, zero spam risk sandbox</div>
          </div>
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="text-center p-8 sm:p-12 rounded-3xl bg-surface-100/80 border border-white/10 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Experience the Difference Today
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
          Start building on a modern local server that respects your system memory and terminates cleanly every time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-sky-400 text-slate-950 font-semibold text-xs shadow-lg shadow-brand-500/20 hover:brightness-110 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Serve Locally v1.0</span>
          </Link>
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-all"
          >
            <span>Read Getting Started Guide</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}

