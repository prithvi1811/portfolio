'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Overlay from './Overlay';

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.92, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0"
        >
          {/* Base AI-style gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.08),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.07),_transparent_35%),linear-gradient(to_bottom,_#ffffff,_#fafafa,_#f5f5f5)]" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* Floating background images */}
          <img
            src="/bg/ai1.jpg"
            alt="AI abstract background"
            className="absolute top-10 left-8 w-64 md:w-80 rounded-2xl opacity-[0.14] blur-sm object-cover"
          />

          <img
            src="/bg/ai2.jpg"
            alt="Data visualization background"
            className="absolute bottom-16 right-8 w-72 md:w-96 rounded-2xl opacity-[0.14] blur-sm object-cover"
          />

          <img
            src="/bg/ai3.jpg"
            alt="Neural network background"
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 md:w-[28rem] rounded-2xl opacity-[0.10] blur-md object-cover"
          />

          {/* Glow orbs */}
          <div className="absolute left-[12%] top-[18%] h-44 w-44 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute right-[12%] top-[25%] h-52 w-52 rounded-full bg-violet-400/10 blur-3xl" />
          <div className="absolute left-1/2 bottom-[12%] h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

          {/* Light vignette */}
          <div className="absolute inset-0 bg-white/40" />
        </motion.div>

        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
