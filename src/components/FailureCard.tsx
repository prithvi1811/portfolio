'use client';

import { motion } from 'framer-motion';

interface FailureCardProps {
  title: string;
  situation: string;
  lesson: string;
  application: string;
  index?: number;
}

export default function FailureCard({
  title,
  situation,
  lesson,
  application,
  index = 0,
}: FailureCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -4, borderColor: 'rgb(113, 113, 122)' }}
      className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm transition hover:bg-zinc-900/90"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <div className="mt-4 space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-zinc-300">What Happened</h4>
          <p className="mt-2 text-sm leading-7 text-zinc-400">{situation}</p>
        </div>

        <div className="border-l-2 border-amber-500/40 bg-amber-500/5 py-3 pl-4">
          <h4 className="text-sm font-semibold text-amber-400">Key Lesson</h4>
          <p className="mt-2 text-sm leading-7 text-amber-100">{lesson}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-zinc-300">How I Applied It</h4>
          <p className="mt-2 text-sm leading-7 text-zinc-400">{application}</p>
        </div>
      </div>
    </motion.div>
  );
}
