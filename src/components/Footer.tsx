import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Globe, Mail, Heart, Terminal, ShieldCheck, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060910] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-400/30 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Serve Locally"
                  width={22}
                  height={22}
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="font-semibold text-white tracking-tight text-base">
                Serve Locally
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The ultra-lightweight, bloat-free local web development environment
              for Windows 11 & 10. Built with Tauri v2, Rust kernel job objects,
              and native WebView2.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono">
                <Cpu className="w-3 h-3 text-brand-400" />
                &lt; 25 MB Idle RAM
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                Zero Windows Services
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Product
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/features"
                  className="hover:text-brand-300 transition-colors"
                >
                  Features Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="hover:text-brand-300 transition-colors"
                >
                  Download Installer
                </Link>
              </li>
              <li>
                <Link
                  href="/features#job-objects"
                  className="hover:text-brand-300 transition-colors"
                >
                  Win32 Job Objects
                </Link>
              </li>
              <li>
                <Link
                  href="/features#vhosts"
                  className="hover:text-brand-300 transition-colors"
                >
                  Dynamic *.test VHosts
                </Link>
              </li>
              <li>
                <Link
                  href="/features#php-manager"
                  className="hover:text-brand-300 transition-colors"
                >
                  Multi-PHP Manager
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/docs/getting-started"
                  className="hover:text-brand-300 transition-colors"
                >
                  Getting Started Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started#installation"
                  className="hover:text-brand-300 transition-colors"
                >
                  Installation Steps
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started#first-project"
                  className="hover:text-brand-300 transition-colors"
                >
                  Deploying Local Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started#database"
                  className="hover:text-brand-300 transition-colors"
                >
                  MariaDB & phpMyAdmin
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started#troubleshooting"
                  className="hover:text-brand-300 transition-colors"
                >
                  Troubleshooting & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer & Creator */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Created By
            </h4>
            <div className="text-xs sm:text-sm space-y-2">
              <p className="text-slate-300 font-medium">Khushwinder</p>
              <p className="text-xs text-slate-500">
                Full Stack & Systems Developer
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://khushwinder-dev.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500/20 hover:text-brand-300 transition-colors"
                  title="Portfolio Website"
                  aria-label="Portfolio Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Khushwinder-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500/20 hover:text-brand-300 transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khushwinder-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500/20 hover:text-brand-300 transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:Khushwinder.dev@gmail.com"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500/20 hover:text-brand-300 transition-colors"
                  title="Email Directly"
                  aria-label="Email Directly"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Serve Locally. Developed by Khushwinder.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              About Project
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Contact & Inquiries
            </Link>
            <span className="font-mono text-slate-600">v1.0.0 (Win64)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

