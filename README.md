# Serve Locally — Official Product Website

Official product website, documentation, and download portal for **Serve Locally** — an ultra-lightweight, bloat-free local web development environment for Windows 11 & 10 built with **Tauri v2** and **Rust**.

---

## 🌟 Overview

Serve Locally is a modern, high-performance alternative to legacy dev stacks like XAMPP, WampServer, and Laragon. Built with native Windows NT primitives, it ensures:
- **Zero Zombie Processes:** Kernel-enforced termination via Win32 Job Objects (`KILL_ON_JOB_CLOSE`).
- **Sub-25MB Idle Memory:** Lean resource consumption using Microsoft Edge WebView2 and tuned MariaDB buffer pools.
- **Zero Windows Services:** 100% isolated, portable, and runs without administrator elevation.
- **Dynamic `*.test` Virtual Hosts:** Automatic `/public` document root detection (Laravel, Symfony, Vite) and instant Nginx recompilation with zero downtime.
- **1-Click Multi-PHP Switcher:** Seamless switching between PHP 8.1, 8.2, 8.3, and 8.4 on FastCGI `:9000`.
- **Integrated Mailpit Sandbox:** Safe local SMTP capture on `:1025` and web inbox on `:8025`.

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Dark-first, developer aesthetic)
- **Animations:** Framer Motion & CSS keyframe transitions
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form with Zod validation
- **Excel Processing:** ExcelJS (Workbook generation with formula injection defense)
- **SEO & Social:** Open Graph, Twitter/X meta, dynamic XML sitemaps, semantic schema markup (JSON-LD `SoftwareApplication`, `WebSite`, `BreadcrumbList`)

---

## 📁 Repository Structure

```
d:/Projects/servelocally.github.io/
├── public/
│   ├── downloads/
│   │   └── ServeLocally-Setup.exe      # Official 64-bit installer (64.1 MB)
│   ├── images/
│   │   ├── logo.png                   # Official 256x256 branding logo
│   │   └── logo-small.png             # Small icon
│   ├── icons/
│   │   └── icon-128.png               # App icon
│   └── favicon.ico                    # Windows icon
├── scripts/
│   └── local-contact-receiver.mjs     # Standalone Node.js Excel receiver for PC
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts           # Configurable contact API endpoint
│   │   ├── docs/
│   │   │   ├── layout.tsx             # Documentation layout with sidebar
│   │   │   └── getting-started/
│   │   │       └── page.tsx           # Step-by-step setup guide
│   │   ├── features/
│   │   │   └── page.tsx               # Technical architecture & features
│   │   ├── download/
│   │   │   └── page.tsx               # Download page with SHA-256 checksum
│   │   ├── about/
│   │   │   └── page.tsx               # Problem, vision & developer profile
│   │   ├── contact/
│   │   │   └── page.tsx               # Professional contact page
│   │   ├── globals.css                # Tailwind directives & developer styles
│   │   ├── layout.tsx                 # Root layout with navbar, footer & SEO
│   │   ├── page.tsx                   # Homepage with interactive showcase
│   │   ├── not-found.tsx              # Custom 404 error page
│   │   ├── robots.ts                  # Dynamic robots.txt
│   │   └── sitemap.ts                 # Dynamic XML sitemap
│   ├── components/
│   │   ├── AppShowcase.tsx            # Interactive UI simulator of desktop app
│   │   ├── ComparisonTable.tsx        # Factual comparison vs XAMPP & Laragon
│   │   ├── ContactForm.tsx            # Client form with Zod & rate limiting
│   │   ├── CookieBanner.tsx           # Privacy notice banner
│   │   ├── DocsSidebar.tsx            # Sticky documentation navigation
│   │   ├── FaqAccordion.tsx           # Technical developer FAQs
│   │   ├── Footer.tsx                 # Footer with creator credentials
│   │   ├── Navbar.tsx                 # Sticky navigation with mobile menu
│   │   └── StructuredData.tsx         # JSON-LD Schema generators
│   └── lib/
│       ├── excel-storage.ts           # ExcelJS helper with formula sanitization
│       ├── rate-limit.ts              # In-memory IP rate limiter
│       └── utils.ts                   # Classname utility helpers
├── storage/
│   └── contact_submissions.xlsx       # Excel workbook (stored outside public web)
├── .env.example                       # Environment template
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Installation
Clone this repository and install dependencies:
```bash
git clone https://github.com/servelocally/servelocally.github.io.git
cd servelocally.github.io
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📊 Contact Form & Local PC Excel Storage Architecture

The website is designed so that the public web application can be deployed on a remote hosting provider (e.g. Vercel, Node VPS), while contact submissions are forwarded to and stored on the developer's personal computer in an Excel workbook (`.xlsx`).

```
[ Visitor on Public Website ]
             │
             ▼ (POST /api/contact)
[ Next.js API Route (Validation + Anti-Spam Rate Limit) ]
             │
      ┌──────┴─────────────────────────────────┐
      │ (If CONTACT_API_URL configured)       │ (If running locally)
      ▼                                        ▼
[ Secure Forwarding via Bearer Auth ]    [ Direct Storage ]
      │                                        │
      ▼                                        │
[ Local Receiver on PC (:8790) ]               │
      │                                        │
      ▼                                        ▼
[ Formula Sanitization (=, +, -, @ escaped) ]
      │
      ▼
[ Excel Workbook (.xlsx) outside public folder ]
```

### Running the Local Contact Receiver on your PC

1. **Start the Receiver Service:**
   ```bash
   npm run receiver
   # Or: node scripts/local-contact-receiver.mjs
   ```
   The service listens on `http://127.0.0.1:8790`.

2. **Securely Expose to Public Web:**
   Use **Cloudflare Tunnel** (recommended, free & secure) or **ngrok**:
   ```bash
   # Via Cloudflare Tunnel:
   cloudflared tunnel --url http://localhost:8790
   
   # Or via ngrok:
   ngrok http 8790
   ```

3. **Configure Public Next.js Environment:**
   Set the resulting public tunnel URL in your deployment environment variables:
   ```env
   CONTACT_API_URL=https://<your-tunnel-domain>/api/receive
   CONTACT_API_SECRET=your_secure_secret_token
   ```

4. **Honest Offline Handling:**
   If your PC is switched off or disconnected, the API transparently responds with HTTP 503 and presents a polite message with direct email links (`Khushwinder.dev@gmail.com`). It **never** falsely reports that a message was saved when it was not.

5. **Formula Injection Sanitization:**
   Any input starting with `=`, `+`, `-`, `@`, `\t`, or `\r` is automatically escaped with a leading apostrophe (`'`) to prevent CSV/Excel Formula Injection vulnerabilities when opening the workbook.

---

## 🌐 Official Links & Creator

- **Developer:** Khushwinder (Full Stack Developer & Systems Engineer)
- **Portfolio:** [https://khushwinder-dev.github.io/](https://khushwinder-dev.github.io/)
- **LinkedIn:** [https://www.linkedin.com/in/khushwinder-dev](https://www.linkedin.com/in/khushwinder-dev)
- **GitHub:** [https://github.com/Khushwinder-Dev](https://github.com/Khushwinder-Dev)
- **Email:** [Khushwinder.dev@gmail.com](mailto:Khushwinder.dev@gmail.com)

---

## 📄 License

MIT License © 2026 Serve Locally. Created by Khushwinder.
