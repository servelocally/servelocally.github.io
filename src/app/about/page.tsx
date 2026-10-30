import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Cpu,
  Zap,
  Terminal,
  Heart,
  ExternalLink,
  Code2,
} from "lucide-react";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

export const metadata = {
  title: "About Serve Locally — Story, Vision & Developer Background",
  description:
    "Learn why Serve Locally was built, how it solves legacy server stack problems with Rust and Win32 Job Objects, and meet creator Khushwinder.",
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://servelocally.github.io" },
    { name: "About", url: "https://servelocally.github.io/about" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-24 text-slate-300 leading-relaxed text-sm">
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20 text-xs font-mono text-brand-300">
          <span>Project Story & Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About Serve Locally
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Reimagining local web development on Windows for speed, isolation, and zero headaches.
        </p>
      </div>

      {/* The Problem */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">
          The Problem: Legacy Architectural Debt
        </h2>
        <p>
          For over two decades, web developers on Windows relied on stacks like XAMPP, WAMP, and Laragon.
          While these tools powered an era of development, their architectures date back to Windows XP and Windows 7:
        </p>
        <ul className="space-y-2 list-disc list-inside text-slate-400 text-xs sm:text-sm">
          <li>
            <strong className="text-white">Orphaned Zombie Processes:</strong> If the control panel crashes, gets killed, or exits unexpectedly, background binaries (<code className="text-brand-300 font-mono text-xs">httpd.exe</code>, <code className="text-brand-300 font-mono text-xs">mysqld.exe</code>) remain running, stubbornly locking ports 80 and 3306.
          </li>
          <li>
            <strong className="text-white">Bloated Idle Footprint:</strong> Legacy stacks commonly consume 120MB to 200MB of RAM just sitting idle in the background.
          </li>
          <li>
            <strong className="text-white">Invasive System Modification:</strong> They frequently register Windows Services, write into registry keys, and require full administrative elevation just to start a local web server.
          </li>
          <li>
            <strong className="text-white">Manual Configuration Chores:</strong> Developers spend valuable time manually editing <code className="text-slate-300">httpd-vhosts.conf</code> and modifying Windows hosts files just to run a new project.
          </li>
        </ul>
      </section>

      {/* The Solution */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">
          The Vision: Native, Lightweight, and Clean
        </h2>
        <p>
          Serve Locally was engineered from the ground up with a clear goal: <strong className="text-white">build a modern, lightweight local server manager that respects system resources and never leaves zombie processes behind.</strong>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-surface-100/70 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Win32 Job Objects</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Using the Windows NT kernel primitive <code className="text-brand-300 font-mono text-xs">KILL_ON_JOB_CLOSE</code>, all child processes are bound to the parent. When Serve Locally exits, all background processes terminate instantly and cleanly.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/70 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-white">
              <Cpu className="w-4 h-4 text-brand-400" />
              <span>Rust + Tauri v2 Architecture</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              By pairing Rust with the built-in Microsoft Edge WebView2 runtime, Serve Locally avoids bundling heavy Electron or CEF runtimes, keeping memory consumption under 25 MB RAM total.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Profile Card */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">
          About the Developer
        </h2>

        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-surface-100 via-[#0e1628] to-surface-100 border border-white/10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">Khushwinder</h3>
              <p className="text-xs text-brand-300 font-mono">
                Full Stack Developer & Software Product Engineer
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://khushwinder-dev.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Portfolio</span>
              </a>
              <a
                href="https://github.com/Khushwinder-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/khushwinder-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            I am a software engineer focused on building fast, reliable web applications and developer tools.
            Having experienced firsthand the recurring frustrations of port lockups, high memory usage, and messy configuration in traditional Windows local stacks, I created Serve Locally to provide a clean, modern alternative for the developer community.
          </p>

          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <div>
              Direct Contact:{" "}
              <a
                href="mailto:Khushwinder.dev@gmail.com"
                className="text-brand-300 font-medium hover:underline"
              >
                Khushwinder.dev@gmail.com
              </a>
            </div>
            <Link
              href="/contact"
              className="text-white hover:text-brand-300 font-medium flex items-center gap-1"
            >
              <span>Send a message via Contact Form</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

