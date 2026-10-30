"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
} from "lucide-react";

const NAV_LINKS = [
  { name: "Features", href: "/features", icon: Layers },
  { name: "Documentation", href: "/docs/getting-started", icon: BookOpen },
  { name: "Download", href: "/download", icon: Download },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-brand-500/15 text-brand-300 shadow-sm border border-brand-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
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

            <Link
              href="/download"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-sky-400 text-slate-950 hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-brand-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Free</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/download"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-brand-500 text-slate-950"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get v1.0</span>
            </Link>
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
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-500/15 text-brand-300 border border-brand-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-brand-400" />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </Link>
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

              <Link
                href="/download"
                className="w-full mt-2 py-2.5 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-sky-400 text-slate-950 font-semibold text-sm shadow-md shadow-brand-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download for Windows (64-bit)</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

