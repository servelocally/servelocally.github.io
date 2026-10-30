import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { WebsiteStructuredData, SoftwareStructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://servelocally.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Serve Locally — Your Local Development Environment. Simplified.",
    template: "%s | Serve Locally",
  },
  description:
    "An ultra-lightweight, bloat-free local web development environment for Windows 11 & 10. Runs Nginx 1.26, multi-version PHP (8.1-8.4), MariaDB 10.11, and Mailpit with Win32 Job Object zombie process prevention under 25 MB idle RAM.",
  keywords: [
    "Serve Locally",
    "ServeLocally",
    "local development environment",
    "XAMPP alternative",
    "Laragon alternative",
    "WampServer alternative",
    "Windows local server",
    "portable Nginx PHP MySQL",
    "Tauri local server",
    "Mailpit Windows",
    "PHP version switcher",
    "virtual hosts test domains",
  ],
  authors: [{ name: "Khushwinder", url: "https://khushwinder-dev.github.io" }],
  creator: "Khushwinder",
  publisher: "Khushwinder",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/icon-128.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Serve Locally — Ultra-Lightweight Windows Local Dev Environment",
    description:
      "Modern, bloat-free alternative to XAMPP and Laragon built with Tauri v2 & Rust. Win32 Job Objects prevent orphan zombie processes. < 25 MB idle RAM.",
    siteName: "Serve Locally",
    images: [
      {
        url: "/images/logo.png",
        width: 256,
        height: 256,
        alt: "Serve Locally Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serve Locally — Your Local Development Environment. Simplified.",
    description:
      "Native Windows 11 Fluent dark UI, Nginx, PHP 8.1-8.4, MariaDB, and Mailpit with zero Windows services under 25 MB RAM.",
    creator: "@KhushwinderDev",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <WebsiteStructuredData />
        <SoftwareStructuredData />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#080c14] text-slate-100 min-h-screen flex flex-col selection:bg-brand-500 selection:text-slate-950`}
      >
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

