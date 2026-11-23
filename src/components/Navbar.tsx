"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Menu,
  X,
  Github,
  Layers,
  BookOpen,
  Info,
  Mail,
  ChevronRight,
  ExternalLink,
  HelpCircle,
} from "lucide-react";

interface NavLinkItem {
  name: string;
  href: string;
  icon: React.ElementType;
  isExternal?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "Features", href: "#features", icon: Layers },
  { name: "How It Works", href: "#how-it-works", icon: BookOpen },
  { name: "Comparison", href: "#comparison", icon: Info },
  { name: "Download", href: "#download", icon: Download },
  { name: "FAQ", href: "#faq", icon: HelpCircle },
  {
    name: "Contact",
    href: "https://khushwinder-dev.github.io/",
    icon: Mail,
    isExternal: true,
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Serve Locally Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500/20 to-sky-400/10 border border-brand-400/30 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-brand-400/60 transition-colors">
              <Image
                src="/images/logo.png"
                alt="Serve Locally Logo"
                width={26}
                height={26}
                className="w-6 h-6 object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tracking-tight text-lg group-hover:text-brand-300 transition-colors">
                Serve Locally
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-brand-500/10 border border-brand-400/20 text-brand-400 font-medium">
                v1.0
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-100/60 border border-white/5 rounded-full px-3 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              if (link.isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium px-3.5 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium px-3.5 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Khushwinder-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-colors"
              title="GitHub Repository"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="#download"
              className="group relative inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 via-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 border border-sky-400/30 active:scale-[0.98] transition-all duration-200 overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <Download className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-y-0.5" />
              <span className="text-white font-semibold tracking-wide">Download Free</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#download"
              className="group relative inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white border border-sky-400/30 shadow-md shadow-sky-500/20 active:scale-95 transition-all overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <Download className="w-3.5 h-3.5 text-white" />
              <span>Get v1.0</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#080c14]/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              if (link.isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-brand-400" />
                      <span>{link.name}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40" />
                  </a>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-brand-400" />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
              <a
                href="https://github.com/Khushwinder-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-40" />
              </a>

              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-2 py-2.5 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 border border-sky-400/30 active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download for Windows (64-bit)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
