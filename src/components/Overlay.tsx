"use client";

import Link from "next/link";

const metrics = [
  { value: "$2M+", label: "Revenue Impact" },
  { value: "15%", label: "Conversion Lift" },
  { value: "5", label: "Global Markets" },
  { value: "40%", label: "Reporting Reduction" },
];

function LabelTag({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-sm md:px-4 md:py-2">
      {text}
    </div>
  );
}

export default function Overlay() {
  return (
    <div className="w-full px-6">
      <div className="mx-auto max-w-6xl text-center">
        <LabelTag text="Marketplace · Platform · AI Products" />

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
          Prithvi Chauhan
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg lg:text-xl">
          I ship marketplace products that move revenue — and build AI
          systems that make teams faster.
        </p>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 sm:mt-10">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl sm:rounded-2xl border border-white/10 bg-zinc-900/50 p-3 sm:p-5 backdrop-blur-sm"
            >
              <div className="text-lg sm:text-2xl font-semibold text-white">
                {metric.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-zinc-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/resume/Prithvi_Chauhan_Resume.pdf"
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 sm:py-3.5 text-sm font-medium text-black transition hover:opacity-90 active:opacity-75 min-h-[44px]"
          >
            Download Resume
          </Link>

          <Link
            href="https://app-repo-ai-chatbot-6eqxjdot9kmeyukobcteth.streamlit.app/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 sm:py-3.5 text-sm font-medium text-white transition hover:bg-white/10 active:bg-white/20 min-h-[44px]"
          >
            View AI Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
