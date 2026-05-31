'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: 25% to 45%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] text-center leading-tight">
          Prithvi Chauhan
        </h1>
        <a 
          href="/resume/Prithvi_Chauhan_Resume.pdf" 
          download="Prithvi_Chauhan_Resume.pdf"
          className="px-8 py-3 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 pointer-events-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24 lg:p-32"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] max-w-2xl">
          Driving <span className="italic font-light text-zinc-300">marketplace dynamics.</span> <br/>
          <span className="text-2xl md:text-3xl text-zinc-400 mt-4 block font-normal tracking-normal">$2M+ Revenue Impact & 15% Conversion Lift.</span>
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24 lg:p-32"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white text-right drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] max-w-3xl">
          Architecting <span className="text-zinc-400">AI-powered</span> products. <br/>
          <span className="text-2xl md:text-3xl text-zinc-400 mt-4 block font-normal tracking-normal text-right">LLMs, RAG & Vector Search Prototypes.</span>
        </h2>
      </motion.div>
    </div>
  );
}
