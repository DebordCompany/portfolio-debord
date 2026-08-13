"use client";
import LinkIcon from "@/app/icons/LinkIcon";
import { useState } from "react";

const COMMAND =
  'curl -fsSL "https://s3.debord-services.com/f/d/G7kHV/install.sh" | bash';

export default function InstallTerminal() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="w-full bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-50">
      <div className="flex items-center justify-between gap-4 px-4 py-4 overflow-x-auto">
        <p className="text-sm md:text-base whitespace-pre">
          <span className="text-amber-500 dark:text-amber-400 font-bold">
            $&nbsp;
          </span>
          {COMMAND}
        </p>
        <div className="px-4 py-2">
          <button
            onClick={copy}
            aria-label={copied ? "Comando copiado" : "Copiar comando"}
            className="hover:scale-105 transition-all font-semibold cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
