"use client";

import Link from "next/link";
import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

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

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22, 0.32], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, -80]);

  const secondOpacity = useTransform(
    scrollYProgress,
    [0.24, 0.36, 0.56, 0.68],
    [0, 1, 1, 0]
  );
  const secondY = useTransform(scrollYProgress, [0.24, 0.68], [80, -80]);

  const thirdOpacity = useTransform(
    scrollYProgress,
    [0.58, 0.68, 0.78, 0.86],
    [0, 1, 1, 0]
  );
  const thirdY = useTransform(scrollYProgress, [0.58, 0.86], [80, -40]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      <div className="relative h-full w-full">
        <motion.section
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="pointer-events-auto mx-auto max-w-6xl text-center">
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
        </motion.section>

        <motion.section
          style={{ opacity: secondOpacity, y: secondY }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="mx-auto max-w-4xl text-center">
            <LabelTag text="Marketplace · Enterprise Integrations · International Scale" />

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-6xl">
              Turning ambiguous problems into shipped, measurable features
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg lg:text-xl">
              From A/B-tested UX improvements at Copart to launching across 5
              international markets — I own the full product lifecycle end-to-end.
            </p>
          </div>
        </motion.section>

        <motion.section
          style={{ opacity: thirdOpacity, y: thirdY }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="mx-auto max-w-4xl text-center">
            <LabelTag text="LLMs · RAG · Vector Search · LangChain" />

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-6xl">
              Building AI-native product systems with hands-on prototyping
              experience
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg lg:text-xl">
              Not just a PM who understands AI — I&apos;ve built a working RAG
              chatbot with Llama3, LangChain, and vector embeddings from scratch.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
