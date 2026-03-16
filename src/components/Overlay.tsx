'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          Prithvi Chauhan
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-2xl text-zinc-300">
          Product Manager building data-driven and AI-powered products
        </p>
        <p className="mt-4 max-w-3xl text-sm md:text-lg text-zinc-400">
          I build marketplace, analytics, and AI-assisted products that improve revenue,
          decision-making, and operational efficiency.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-zinc-300">
          <span>$2M+ revenue impact</span>
          <span>•</span>
          <span>15% conversion lift</span>
          <span>•</span>
          <span>35% efficiency gain</span>
          <span>•</span>
          <span>5 global market launches</span>
        </div>
        <a
          href="/resume/Prithvi_Chauhan_Resume.pdf"
          download="Prithvi_Chauhan_Resume.pdf"
          className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold transition hover:scale-105 pointer-events-auto"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Driving <span className="italic font-light text-zinc-300">data-driven</span>
          <span className="text-2xl md:text-3xl text-zinc-400 mt-4 block font-normal">
            product decisions
          </span>
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24 lg:p-32 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Building <span className="text-zinc-400">AI-powered</span> product systems
          <span className="text-2xl md:text-3xl text-zinc-400 mt-4 block font-normal">
            with LLMs, data, and automation
          </span>
        </h2>
      </motion.div>
    </div>
  );
}







