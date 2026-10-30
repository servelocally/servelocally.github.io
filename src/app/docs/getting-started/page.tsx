import React from "react";
import Link from "next/link";
import {
  Download,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Folder,
  Globe,
  Database,
  Mail,
  Layers,
  Code2,
  ArrowRight,
  ShieldCheck,
  FileCode,
  Copy,
} from "lucide-react";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

export const metadata = {
  title: "Getting Started Guide — Documentation",
  description:
    "Complete step-by-step documentation for installing, configuring, and using Serve Locally on Windows 11 & 10.",
};

export default function GettingStartedPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://servelocally.github.io" },
    { name: "Documentation", url: "https://servelocally.github.io/docs/getting-started" },
    { name: "Getting Started", url: "https://servelocally.github.io/docs/getting-started" },
  ];

  return (
    <article className="space-y-14 text-slate-300 leading-relaxed text-sm">
      <BreadcrumbStructuredData items={breadcrumbItems} />

      {/* Guide Header */}
      <header className="space-y-3 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20 text-xs font-mono text-brand-300">
          <span>Documentation / Getting Started</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Serve Locally Getting Started Guide
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Learn how to install Serve Locally, deploy your first web project, configure PHP & MariaDB, and debug emails with Mailpit.
        </p>
      </header>

      {/* 1. Overview & Requirements */}
      <section id="overview" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>1. Overview & System Requirements</span>
        </h2>
        <p>
          Serve Locally is an ultra-lightweight Windows desktop manager designed for PHP, MySQL, and Nginx web development.
          Before installing, ensure your PC meets these minimal specifications:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <span className="text-slate-500">Operating System:</span>
            <div className="text-white font-semibold">Windows 11 or Windows 10 (64-bit)</div>
          </div>
          <div className="p-3 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <span className="text-slate-500">Available RAM:</span>
            <div className="text-white font-semibold">&lt; 25 MB Idle (256MB+ for apps)</div>
          </div>
          <div className="p-3 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <span className="text-slate-500">Disk Space:</span>
            <div className="text-white font-semibold">~250 MB for core stack & binaries</div>
          </div>
          <div className="p-3 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <span className="text-slate-500">Web Engine:</span>
            <div className="text-white font-semibold">Microsoft Edge WebView2 (Built-in)</div>
          </div>
        </div>
      </section>

      {/* 2. Downloading Serve Locally */}
      <section id="download" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>2. Downloading the Installer</span>
        </h2>
        <p>
          Download the latest stable Windows executable directly from the official download repository.
        </p>
        <div className="p-5 rounded-2xl bg-surface-100/70 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-semibold text-white text-sm">
              ServeLocally-Setup.exe (v1.0.0 Stable)
            </div>
            <div className="text-xs text-slate-400 font-mono">
              64.1 MB • Windows 10/11 x64 NSIS Installer
            </div>
          </div>
          <Link
            href="/downloads/ServeLocally-Setup.exe"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-semibold text-xs hover:brightness-110 transition-all shrink-0 shadow-md shadow-brand-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Installer</span>
          </Link>
        </div>
      </section>

      {/* 3. Installation */}
      <section id="installation" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>3. Installation Steps</span>
        </h2>
        <ol className="space-y-3 list-decimal list-inside text-xs sm:text-sm">
          <li className="leading-relaxed">
            <strong className="text-white">Run the Setup:</strong> Double-click <code className="text-brand-300 font-mono text-xs">ServeLocally-Setup.exe</code>.
          </li>
          <li className="leading-relaxed">
            <strong className="text-white">CurrentUser Mode:</strong> Serve Locally installs cleanly in your user profile without requiring administrator rights or touching sensitive Windows registry keys.
          </li>
          <li className="leading-relaxed">
            <strong className="text-white">No System Services:</strong> Zero background Windows Services are created. When the application is closed, no background daemons continue running.
          </li>
        </ol>
      </section>

      {/* 4. First-Time Launch */}
      <section id="first-launch" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>4. First-Time Setup & Portable Binaries</span>
        </h2>
        <p>
          Upon launching Serve Locally, the supervisor checks for portable stack binaries in <code className="text-brand-300 font-mono text-xs">./bin</code>:
        </p>
        <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
          <li><code className="text-slate-300">./bin/nginx/</code> — Portable Nginx 1.26 Stable</li>
          <li><code className="text-slate-300">./bin/php/php-8.3/</code> — PHP 8.3 Non-Thread-Safe (NTS) x64</li>
          <li><code className="text-slate-300">./bin/mysql/</code> — MariaDB 10.11 x64 engine with low-memory configuration</li>
          <li><code className="text-slate-300">./bin/mailpit/</code> — Mailpit SMTP and Web UI binary</li>
        </ul>
      </section>

      {/* 5. Starting & Stopping Services */}
      <section id="services" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>5. Starting & Stopping Services</span>
        </h2>
        <p>
          Serve Locally offers two modes of service management:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-surface-100/70 border border-white/5 space-y-2">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <span className="text-brand-400 font-bold">▶</span>
              <span>Master Start / Stop All</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Click the prominent banner toggle at the top of the interface.
              All four services (Nginx, PHP, MariaDB, Mailpit) start or stop in parallel with instant optimistic UI feedback.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/70 border border-white/5 space-y-2">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <span className="text-brand-400 font-bold">⚙</span>
              <span>Individual Service Switches</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              In the <strong className="text-slate-200">Services</strong> tab, toggle individual switches to start only MariaDB, or restart Nginx with the ↻ button without resetting your database connections.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-surface-100/60 border border-white/10 text-xs space-y-2">
          <div className="font-semibold text-white">Default Port Allocations:</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px] text-slate-300">
            <div>Nginx: :80</div>
            <div>PHP FastCGI: :9000</div>
            <div>MariaDB: :3306</div>
            <div>Mailpit: :8025 / :1025</div>
          </div>
        </div>
      </section>

      {/* 6. Deploying Local Projects */}
      <section id="projects" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>6. Deploying Local Projects in ./www</span>
        </h2>
        <p>
          Your project directory root is located in <code className="text-brand-300 font-mono text-xs">./www</code>.
          You can quickly open this folder by clicking <strong className="text-slate-200">WebRoot (📁)</strong> in the application toolbar.
        </p>

        <div className="p-4 rounded-xl bg-[#090d18] border border-white/10 font-mono text-xs text-slate-300 space-y-1">
          <div className="text-slate-500"># Project folder structure example:</div>
          <div>D:\Projects\serverApp\www\</div>
          <div className="pl-4">├── index.php <span className="text-slate-500">(Default welcome dashboard at http://localhost)</span></div>
          <div className="pl-4">├── adminer.php <span className="text-slate-500">(Database manager at http://localhost/adminer.php)</span></div>
          <div className="pl-4">└── my-app\ <span className="text-slate-500">(Auto-mapped to http://my-app.test)</span></div>
          <div className="pl-8">└── public\</div>
          <div className="pl-12">└── index.php</div>
        </div>
      </section>

      {/* 7. Automatic /public Detection */}
      <section id="public-detection" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>7. Automatic /public Document Root Detection</span>
        </h2>
        <p>
          Serve Locally intelligently determines the correct web document root:
        </p>
        <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
          <li>
            <strong className="text-white">Frameworks (Laravel, Symfony, Vite, CakePHP):</strong> If a <code className="text-brand-300 font-mono text-xs">./www/my-app/public</code> folder is detected, Serve Locally automatically routes incoming web requests directly to <code className="text-brand-300 font-mono text-xs">/public</code>, preventing security leaks of <code className="text-slate-300">.env</code> and vendor files.
          </li>
          <li>
            <strong className="text-white">Classic Web Apps (WordPress, custom PHP):</strong> If no <code className="text-brand-300 font-mono text-xs">/public</code> folder exists, the root folder is served directly.
          </li>
        </ul>
      </section>

      {/* 8. DNS & Hosts */}
      <section id="dns-hosts" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>8. Embedded DNS Proxy & Hosts File Sync</span>
        </h2>
        <p>
          To access your projects seamlessly at <code className="text-brand-300 font-mono text-xs">http://&lt;folder&gt;.test</code>:
        </p>
        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <strong className="text-white">Embedded UDP DNS Proxy:</strong>
            <p className="text-slate-400">
              Serve Locally includes a background UDP DNS proxy responding to any <code className="text-brand-300 font-mono text-xs">*.test</code> domain request and resolving it to <code className="text-slate-300">127.0.0.1</code> automatically without editing your system files.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-100/70 border border-white/5 space-y-1">
            <strong className="text-white">Windows Hosts File Fallback (&quot;Sync Hosts&quot;):</strong>
            <p className="text-slate-400">
              If your corporate network or VPN overrides local DNS, click the <strong className="text-slate-200">Sync Hosts</strong> button in the toolbar.
              Serve Locally safely writes the domains into <code className="text-brand-300 font-mono text-xs">C:\Windows\System32\drivers\etc\hosts</code> enclosed inside safe delimiters:
            </p>
            <pre className="p-2 rounded bg-black/40 font-mono text-[11px] text-slate-300 mt-1">
              <code>{`# >>> AERODEV MANAGED HOSTS
127.0.0.1 demo-app.test
127.0.0.1 my-project.test
# <<< AERODEV MANAGED HOSTS`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* 9. PHP & Database Configuration */}
      <section id="database" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>9. Configuring PHP & MariaDB Database</span>
        </h2>
        <p>
          In your PHP application code or framework <code className="text-brand-300 font-mono text-xs">.env</code> configuration file, use the following database credentials:
        </p>
        <div className="p-4 rounded-xl bg-[#090d18] border border-white/10 font-mono text-xs text-slate-300 space-y-1">
          <div>DB_CONNECTION=mysql</div>
          <div>DB_HOST=127.0.0.1</div>
          <div>DB_PORT=3306</div>
          <div>DB_DATABASE=your_database_name</div>
          <div>DB_USERNAME=root</div>
          <div>DB_PASSWORD=</div>
        </div>
        <p className="text-xs text-slate-400">
          To create new databases or import SQL dumps, click <strong className="text-slate-200">phpMyAdmin</strong> in the toolbar, or open <code className="text-brand-300 font-mono text-xs">http://localhost/adminer.php</code>.
        </p>
      </section>

      {/* 10. Mailpit Sandbox */}
      <section id="mailpit" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>10. Testing Emails with Mailpit</span>
        </h2>
        <p>
          Configure your web application or framework to route outgoing mail through local Mailpit:
        </p>
        <div className="p-4 rounded-xl bg-[#090d18] border border-white/10 font-mono text-xs text-slate-300 space-y-1">
          <div>MAIL_MAILER=smtp</div>
          <div>MAIL_HOST=127.0.0.1</div>
          <div>MAIL_PORT=1025</div>
          <div>MAIL_ENCRYPTION=null</div>
        </div>
        <p className="text-xs text-slate-400">
          All sent emails are instantly trapped and displayed in the Mailpit web interface at <strong className="text-white">http://localhost:8025</strong>.
        </p>
      </section>

      {/* 11. Troubleshooting Common Errors */}
      <section id="troubleshooting" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>11. Troubleshooting Common Errors</span>
        </h2>

        <div className="space-y-4 text-xs sm:text-sm">
          {/* Issue 1 */}
          <div className="p-4 rounded-xl bg-surface-100/70 border border-white/10 space-y-2">
            <h4 className="font-semibold text-white">
              Issue 1: Port 80 Conflict (Nginx fails to bind)
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Windows IIS (World Wide Web Publishing Service), Skype, or another server may already be occupying port 80.
            </p>
            <div className="font-mono text-xs bg-black/40 p-2.5 rounded text-brand-300 space-y-1">
              <div className="text-slate-500"># Check which process is occupying port 80:</div>
              <div>netstat -ano | findstr :80</div>
              <div className="text-slate-500 pt-1"># Stop IIS if installed:</div>
              <div>iisreset /stop</div>
            </div>
          </div>

          {/* Issue 2 */}
          <div className="p-4 rounded-xl bg-surface-100/70 border border-white/10 space-y-2">
            <h4 className="font-semibold text-white">
              Issue 2: Windows Defender or Antivirus Slowing Down PHP
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Real-time Windows Defender scanning of thousands of PHP files in <code className="text-slate-300">vendor/</code> folders can cause noticeable file I/O latency.
            </p>
            <div className="font-mono text-xs bg-black/40 p-2.5 rounded text-brand-300 space-y-1">
              <div className="text-slate-500"># Add exclusion for Serve Locally directory in PowerShell (Admin):</div>
              <div>Add-MpPreference -ExclusionPath &quot;C:\Users\&lt;YourUser&gt;\AppData\Local\ServeLocally&quot;</div>
            </div>
          </div>

          {/* Issue 3 */}
          <div className="p-4 rounded-xl bg-surface-100/70 border border-white/10 space-y-2">
            <h4 className="font-semibold text-white">
              Issue 3: &quot;Server Binaries Missing&quot; Yellow Alert Banner
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              If Nginx, PHP, or MariaDB executables were moved or deleted from the <code className="text-slate-300">./bin</code> directory, run the provisioner script to restore them:
            </p>
            <div className="font-mono text-xs bg-black/40 p-2.5 rounded text-brand-300 space-y-1">
              <div>powershell -ExecutionPolicy Bypass -File ./scripts/setup-binaries.ps1</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step Footer */}
      <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs text-slate-500">Need help or discovered a bug?</span>
          <div className="text-sm font-semibold text-white">Contact the Developer</div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-slate-950 font-semibold text-xs hover:brightness-110 transition-all shadow-md shadow-brand-500/20"
        >
          <span>Submit a Support Request</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </footer>
    </article>
  );
}

