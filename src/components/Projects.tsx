'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Buyer Conversion Optimization',
    date: '2023–2024',
    description: 'Increased buyer conversion by 15% through funnel analysis and UX improvements, generating $2M+ revenue impact.',
  },
  {
    title: 'International Marketplace Expansion',
    date: '2023–2024',
    description: 'Scaled auction platform to 5 new markets (UK, Oman, Bahrain, Spain, Finland), contributing 10% of total GMV.',
  },
  {
    title: 'Analytics & KPI Framework',
    date: '2023–Present',
    description: 'Built self-serve analytics layer reducing ad-hoc reporting by 40% and accelerating cross-functional decisions.',
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-8 min-h-screen text-white z-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-12">
          Selected Works
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-md overflow-hidden hover:bg-zinc-800/40 transition-colors duration-500 cursor-pointer flex flex-col justify-between h-80"
            >
              {/* Subtle hover glow at top left */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex justify-between items-start mb-auto relative z-10">
                <span className="text-xs font-mono text-zinc-400 border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/50">
                  {project.date}
                </span>
                <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight strokeWidth={1.5} size={18} />
                </div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-3xl font-semibold mb-4 tracking-tight group-hover:text-white text-zinc-100 transition-colors">
                  {project.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
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
