import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import {
  WebsiteStructuredData,
  SoftwareStructuredData,
  BreadcrumbStructuredData,
} from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://servelocally.github.io";

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Serve Locally — Fast, Lightweight Local PHP & MySQL Server for Windows | Modern XAMPP Alternative",
    template: "%s | Serve Locally",
  },
  description:
    "Download Serve Locally: the fast, ultra-lightweight local web development environment for Windows 11 & 10. Runs Nginx 1.26, multi-version PHP (8.1–8.4), MariaDB 10.11, and Mailpit under 25 MB RAM with Win32 Job Object zombie process prevention. Free 64-bit installer.",
  keywords: [
    "Serve Locally",
    "ServeLocally",
    "ServeLocally download",
    "XAMPP alternative",
    "XAMPP alternative Windows 11",
    "Laragon alternative",
    "Laragon alternative 2026",
    "WampServer alternative",
    "Windows local server",
    "lightweight local server Windows",
    "portable Nginx PHP MariaDB",
    "local PHP development environment Windows",
    "Nginx PHP MySQL local server Windows",
    "local WordPress server Windows",
    "local Laravel development Nginx",
    "Windows 11 local development",
    "Tauri local server",
    "Win32 Job Object process supervisor",
    "zero zombie process local server",
    "Mailpit Windows",
    "PHP version switcher Windows",
    "virtual hosts test domains",
  ],
  authors: [{ name: "Khushwinder", url: "https://khushwinder-dev.github.io" }],
  creator: "Khushwinder",
  publisher: "Khushwinder",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-128.png", sizes: "128x128", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icons/icon-128.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Serve Locally — Fast, Lightweight Local Server for Windows (Modern XAMPP Alternative)",
    description:
      "Modern, bloat-free local web development environment for Windows 11 & 10 built with Tauri v2 & Rust. Nginx 1.26, multi-version PHP, MariaDB, and Mailpit under 25 MB RAM with zero zombie processes.",
    siteName: "Serve Locally",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Serve Locally — Ultra-Lightweight Local Server for Windows",
      },
      {
        url: "/images/servelocally-app-ui.png",
        width: 562,
        height: 779,
        alt: "Serve Locally Windows 11 Fluent Dark UI Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serve Locally — Fast, Lightweight Local Server for Windows",
    description:
      "Modern XAMPP & Laragon alternative. Native Windows 11 Fluent dark UI, Nginx, PHP 8.1-8.4, MariaDB, and Mailpit with zero Windows services under 25 MB RAM.",
    creator: "@KhushwinderDev",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9193773194117466"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KKCTDDG3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        <WebsiteStructuredData />
        <SoftwareStructuredData />
        <BreadcrumbStructuredData />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#080c14] text-slate-100 min-h-screen flex flex-col selection:bg-brand-500 selection:text-slate-950`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKCTDDG3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
