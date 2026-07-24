"use client";

import { useEffect, useState } from "react";

interface Demo {
  name: string;
  description: string;
  href: string;
}

const demos: Demo[] = [
  {
    name: "RAG Chatbot",
    description:
      "Answers questions from GitHub repositories, built from scratch with Llama3, LangChain, and vector embeddings.",
    href: "https://app-repo-ai-chatbot-6eqxjdot9kmeyukobcteth.streamlit.app/",
  },
  {
    name: "Explanation of Benefits Explainer",
    description:
      "Reads a medical bill (text, photo, or PDF) with Claude, flags billing errors, and explains what you owe in plain English.",
    href: "https://eob-explainer.vercel.app",
  },
];

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path
        d="M4 5.5h16v10H9l-4 4v-4H4v-10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M7 3.5h6.5L18 8v11.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 3.5V8h5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12h6M9 15h6" strokeLinecap="round" />
    </svg>
  );
}

const icons = [ChatIcon, ReceiptIcon];

export default function DemoPicker() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
      >
        View AI Demo
      </button>

      {open && (
        <div
          className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-900/95 p-6 backdrop-blur-md sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Pick a demo</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Two working AI products, both built end to end.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full p-1.5 text-zinc-400 transition hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              {demos.map((demo, i) => {
                const Icon = icons[i];
                return (
                  <a
                    key={demo.name}
                    href={demo.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-zinc-300 group-hover:text-white">
                      <Icon />
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                        {demo.name}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          className="h-3.5 w-3.5 text-zinc-500 transition group-hover:text-zinc-300"
                        >
                          <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-zinc-400">
                        {demo.description}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
