import React from "react";

export function SoftwareStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Serve Locally",
    "alternateName": [
      "ServeLocally",
      "Serve Locally for Windows",
      "ServeLocally Local Server"
    ],
    "applicationCategory": "DeveloperApplication",
    "applicationSubCategory": "Local Web Server & PHP Development Environment",
    "operatingSystem": "Windows 10, Windows 11 (64-bit)",
    "softwareVersion": "1.0.0",
    "fileSize": "75.5 MB",
    "downloadUrl": "https://servelocally.github.io/downloads/ServeLocally-Setup.exe",
    "installUrl": "https://servelocally.github.io/downloads/ServeLocally-Setup.exe",
    "screenshot": "https://servelocally.github.io/images/servelocally-app-ui.png",
    "thumbnailUrl": "https://servelocally.github.io/images/logo.png",
    "image": "https://servelocally.github.io/images/og-image.png",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "category": "Free Open Source Software"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "128",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description":
      "Ultra-lightweight Windows 11 & 10 local development environment manager built with Tauri v2 and Rust. Modern XAMPP and Laragon alternative running portable Nginx 1.26, multi-version PHP (8.1-8.4), low-memory MariaDB 10.11, and Mailpit under 25 MB RAM with zero zombie processes.",
    "author": {
      "@type": "Person",
      "name": "Khushwinder",
      "url": "https://khushwinder-dev.github.io",
      "sameAs": [
        "https://www.linkedin.com/in/khushwinder-dev",
        "https://github.com/Khushwinder-Dev"
      ]
    },
    "requirements": "Windows 10 64-bit (Build 1809+) or Windows 11 64-bit, Microsoft Edge WebView2",
    "featureList": [
      "Win32 Job Object Zombie Process Termination",
      "Sub-25MB Idle Memory Footprint (Rust & Tauri v2)",
      "Zero Windows Background Services Installed",
      "Automatic *.test Virtual Hosts with /public Document Root Detection",
      "Multi-Version PHP Manager (8.1 to 8.4) with 1-Click FastCGI Switching",
      "1-Click php.ini Extension Toggling (pdo_mysql, curl, mbstring, gd)",
      "Low-Memory Tuned MariaDB 10.11 Server (32MB Buffer Pool)",
      "Built-in Mailpit SMTP (:1025) & Web Inbox (:8025) Sandbox",
      "Embedded UDP DNS Proxy and Hosts File Synchronization",
      "Modern Windows 11 Fluent Dark Interface (Mica/Acrylic)"
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
    "alternateName": "ServeLocally",
    "url": "https://servelocally.github.io",
    "description":
      "Fast, lightweight local development server for Windows — Modern XAMPP & Laragon alternative with Nginx, PHP, MariaDB, and Mailpit.",
    "publisher": {
      "@type": "Person",
      "name": "Khushwinder",
      "url": "https://khushwinder-dev.github.io",
      "sameAs": [
        "https://www.linkedin.com/in/khushwinder-dev",
        "https://github.com/Khushwinder-Dev"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://servelocally.github.io/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Download Serve Locally for Windows",
        "item": "https://servelocally.github.io/#download"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqStructuredData({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const list = Array.isArray(faqs) ? faqs : [];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": list.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
