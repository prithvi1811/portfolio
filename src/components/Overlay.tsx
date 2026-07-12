"use client";

import Link from "next/link";
import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

const metrics = [
  { value: "20", label: "Carrier Integrations" },
  { value: "100K+", label: "Lots Onboarded" },
  { value: "1M+", label: "Inventory Units Added" },
  { value: "30%", label: "Account Revenue Lift" },
];

function LabelTag({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-sm">
      {text}
    </div>
  );
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18, 0.28], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -80]);

  const secondOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.32, 0.52, 0.62],
    [0, 1, 1, 0]
  );
  const secondY = useTransform(scrollYProgress, [0.22, 0.62], [80, -80]);

  const thirdOpacity = useTransform(
    scrollYProgress,
    [0.56, 0.66, 0.85, 0.95],
    [0, 1, 1, 0]
  );
  const thirdY = useTransform(scrollYProgress, [0.56, 0.95], [80, -40]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      <div className="relative h-full w-full">
        <motion.section
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="pointer-events-auto mx-auto max-w-6xl text-center">
            <LabelTag text="B2B Marketplace · Seller Integrations · AI Products" />

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Prithvi Chauhan
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              I ship B2B marketplace platforms — leading seller integrations,
              AI-powered insights, and automation that scales global
              operations.
            </p>

            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5 backdrop-blur-md"
                >
                  <div className="text-2xl font-semibold text-white">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/resume/Prithvi_Chauhan-A.pdf"
                target="_blank"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Download Resume
              </Link>

              <Link
href="https://app-repo-ai-chatbot-6eqxjdot9kmeyukobcteth.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View AI Demo
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section
          style={{ opacity: secondOpacity, y: secondY }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="mx-auto max-w-4xl text-center">
            <LabelTag text="Marketplace · Enterprise Integrations · International Scale" />

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Turning ambiguous problems into shipped, measurable features
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              From launching MAO 2.0 in the UK to automating bid-limit logic
              across UAE, Oman, and Bahrain — I own the full product
              lifecycle end-to-end.
            </p>
          </div>
        </motion.section>

        <motion.section
          style={{ opacity: thirdOpacity, y: thirdY }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="mx-auto max-w-4xl text-center">
            <LabelTag text="LLMs · RAG · Vector Search · LangChain" />

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Building AI-native product systems with hands-on prototyping
              experience
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Not just a PM who understands AI — I&apos;ve shipped
              machine-learning-driven features into Copart&apos;s production
              platform, and built a working RAG chatbot with Llama3,
              LangChain, and vector embeddings from scratch.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
