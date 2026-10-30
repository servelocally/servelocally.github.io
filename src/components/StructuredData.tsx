import React from "react";

export function SoftwareStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Serve Locally",
    "alternateName": "ServeLocally",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Windows 10, Windows 11 (64-bit)",
    "softwareVersion": "1.0.0",
    "fileSize": "64.1 MB",
    "downloadUrl": "https://servelocally.github.io/downloads/ServeLocally-Setup.exe",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "description":
      "Ultra-lightweight Windows 11 local development environment manager built with Tauri v2 and Rust. Runs Nginx, multi-version PHP, MariaDB, and Mailpit with Win32 Job Object zombie process prevention and dynamic *.test virtual hosts under 25 MB idle RAM.",
    "author": {
      "@type": "Person",
      "name": "Khushwinder",
      "url": "https://khushwinder-dev.github.io",
      "sameAs": [
        "https://www.linkedin.com/in/khushwinder-dev",
        "https://github.com/Khushwinder-Dev"
      ]
    },
    "requirements": "Windows 10 64-bit or Windows 11 64-bit, Microsoft Edge WebView2",
    "featureList": [
      "Win32 Job Object Zombie Process Killer",
      "Sub-25MB Idle Memory Footprint",
      "Zero Windows Background Services Installed",
      "Automatic *.test Virtual Hosts with /public Document Root Detection",
      "Multi-Version PHP Manager (8.1 to 8.4) with 1-Click FastCGI Switching",
      "1-Click php.ini Extension Toggling",
      "Low-Memory Tuned MariaDB 10.11 Server",
      "Built-in Mailpit SMTP & Web Inbox Sandbox",
      "Embedded UDP DNS Proxy and Hosts File Synchronization",
      "Windows 11 Fluent Dark UI (Mica/Acrylic)"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Serve Locally",
    "url": "https://servelocally.github.io",
    "description": "The official product website and documentation for Serve Locally — a modern, lightweight local server stack for Windows.",
    "publisher": {
      "@type": "Person",
      "name": "Khushwinder",
      "url": "https://khushwinder-dev.github.io"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

