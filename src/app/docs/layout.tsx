import React from "react";
import { DocsSidebar } from "@/components/DocsSidebar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
        <span className="text-slate-200">Documentation</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <DocsSidebar />
        <div className="flex-1 min-w-0 max-w-4xl">{children}</div>
      </div>
    </div>
  );
}

