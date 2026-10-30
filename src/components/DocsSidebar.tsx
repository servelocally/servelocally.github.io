"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Rocket,
  Layers,
  Globe,
  Code2,
  Database,
  Mail,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

const DOC_SECTIONS = [
  {
    title: "Quickstart",
    items: [
      { name: "Overview & Requirements", href: "/docs/getting-started#overview", icon: Rocket },
      { name: "Downloading Serve Locally", href: "/docs/getting-started#download", icon: Rocket },
      { name: "Installation (CurrentUser)", href: "/docs/getting-started#installation", icon: Rocket },
      { name: "First-Time Launch", href: "/docs/getting-started#first-launch", icon: Rocket },
    ],
  },
  {
    title: "Services & Architecture",
    items: [
      { name: "Starting & Stopping Services", href: "/docs/getting-started#services", icon: Layers },
      { name: "Win32 Job Object Supervisor", href: "/docs/getting-started#job-objects", icon: Layers },
    ],
  },
  {
    title: "Projects & Domains",
    items: [
      { name: "Deploying Local Projects", href: "/docs/getting-started#projects", icon: Globe },
      { name: "Automatic /public Detection", href: "/docs/getting-started#public-detection", icon: Globe },
      { name: "Embedded DNS Proxy & Hosts Sync", href: "/docs/getting-started#dns-hosts", icon: Globe },
    ],
  },
  {
    title: "PHP & Databases",
    items: [
      { name: "PHP Multi-Version Switching", href: "/docs/getting-started#php-switching", icon: Code2 },
      { name: "Configuring php.ini Extensions", href: "/docs/getting-started#php-extensions", icon: Code2 },
      { name: "MariaDB & phpMyAdmin", href: "/docs/getting-started#database", icon: Database },
      { name: "Mailpit Email Sandbox", href: "/docs/getting-started#mailpit", icon: Mail },
    ],
  },
  {
    title: "Diagnostics",
    items: [
      { name: "Troubleshooting Common Errors", href: "/docs/getting-started#troubleshooting", icon: AlertTriangle },
    ],
  },
];

export function DocsSidebar() {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-6">
      <div className="p-3.5 rounded-xl bg-surface-100/60 border border-white/5 text-xs">
        <span className="text-slate-400 font-mono">Documentation</span>
        <div className="font-semibold text-white text-sm mt-0.5">Serve Locally v1.0</div>
      </div>

      <nav className="space-y-6 text-xs">
        {DOC_SECTIONS.map((section, sIdx) => (
          <div key={sIdx} className="space-y-2">
            <h5 className="font-semibold uppercase tracking-wider text-slate-500 text-[11px] px-2">
              {section.title}
            </h5>
            <ul className="space-y-1">
              {section.items.map((item, iIdx) => {
                return (
                  <li key={iIdx}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors group"
                    >
                      <span className="truncate">{item.name}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-400 shrink-0" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

