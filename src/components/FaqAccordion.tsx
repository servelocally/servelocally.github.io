"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How does the Win32 Job Object prevent port locking bugs?",
    answer:
      "Legacy dev stacks (like XAMPP or WampServer) frequently leave orphan processes running if the control panel is closed improperly or crashes, locking ports 80, 9000, and 3306. Serve Locally binds every spawned child process (nginx.exe, php-cgi.exe, mysqld.exe, mailpit.exe) to a native Win32 Job Object with the `JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE` flag. The Windows NT kernel itself terminates all child processes instantly when Serve Locally closes or is killed in Task Manager.",
  },
  {
    question: "Do I need Administrator privileges to install and use Serve Locally?",
    answer:
      "No! Serve Locally installs in `currentUser` mode without modifying system-wide registry hives or registering background Windows Services. The core stack runs completely in user space. The only optional feature requiring administrative elevation is clicking 'Sync Hosts' if you want fallback entries written to C:\\Windows\\System32\\drivers\\etc\\hosts. The built-in DNS proxy resolves *.test automatically without touching the hosts file.",
  },
  {
    question: "How does automatic *.test virtual host resolution work?",
    answer:
      "Serve Locally watches the `./www` project folder in real time. Whenever you drop or create a project folder (e.g. `my-app`), it automatically checks if a `/public` subfolder exists (such as for Laravel, Symfony, Vite, or CakePHP). It instantly generates an optimized Nginx server block in `./bin/nginx/conf/vhosts/my-app.conf` and reloads Nginx with zero downtime. You can immediately visit `http://my-app.test` in your browser.",
  },
  {
    question: "What are the default database credentials for MariaDB / MySQL?",
    answer:
      "MariaDB 10.11 listens on `127.0.0.1:3306`. The default username is `root` with no password (empty string `\"\"`). You can manage databases through the pre-integrated phpMyAdmin at `http://localhost/phpmyadmin/` or the ultra-fast single-file Adminer interface at `http://localhost/adminer.php`.",
  },
  {
    question: "How do I test outgoing emails with the built-in Mailpit sandbox?",
    answer:
      "Serve Locally embeds Mailpit as an isolated local SMTP server listening on `127.0.0.1:1025` with a web UI on `http://localhost:8025`. PHP's `php.ini` is pre-configured so standard `mail()` functions and framework SMTP mailers route directly into Mailpit. Emails are trapped safely on your machine without risk of spamming real users.",
  },
  {
    question: "Can I install or switch between different PHP versions?",
    answer:
      "Yes! Serve Locally features a built-in PHP Version Manager supporting PHP 8.1, 8.2, 8.3 (stable default), and 8.4. You can switch the active runtime with 1 click from the 'PHP & Exts' tab, which gracefully recycles the FastCGI process on `127.0.0.1:9000` without having to manually edit config files.",
  },
  {
    question: "Why is the idle RAM usage so much lower than XAMPP or Laragon?",
    answer:
      "XAMPP uses legacy Windows Forms and spawns heavy unoptimized Apache and MySQL default configurations that consume 120MB+ idle RAM. Serve Locally is built with Rust and Tauri v2 (utilizing the native Microsoft Edge WebView2 runtime already built into Windows 10/11) and tunes MariaDB's buffer pool to 32MB, resulting in a featherweight idle footprint of under 25 MB RAM total.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-xl border border-white/5 bg-[#0b101d]/60 backdrop-blur-sm overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/[0.02]"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-medium text-slate-200">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-brand-400" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-150">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

