'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Aura Next',
    date: '2024',
    description: 'A high-performance e-commerce experience blending 3D assets with minimal typography.',
  },
  {
    title: 'Nova UI',
    date: '2023',
    description: 'A design system focusing on extreme micro-interactions and smooth physics.',
  },
  {
    title: 'Nexus Studio',
    date: '2023',
    description: 'A WebGL-powered interactive portfolio showcasing cinematic real-time rendering.',
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 min-h-screen text-white z-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-zinc-500 mb-8 sm:mb-12">
          Selected Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm overflow-hidden hover:bg-zinc-800/40 transition-colors duration-500 cursor-pointer flex flex-col justify-between min-h-72 sm:h-80"
            >
              {/* Subtle hover glow at top left */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex justify-between items-start mb-auto relative z-10">
                <span className="text-xs font-mono text-zinc-400 border border-zinc-800 rounded-full px-2.5 py-1 sm:px-3 sm:py-1 bg-zinc-900/50">
                  {project.date}
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight strokeWidth={1.5} size={16} className="sm:block" />
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4 tracking-tight group-hover:text-white text-zinc-100 transition-colors">
                  {project.title}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
