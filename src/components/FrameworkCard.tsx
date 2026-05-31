'use client';

import { motion } from 'framer-motion';

interface FrameworkCardProps {
  title: string;
  description: string;
  example?: string;
  index?: number;
}

export default function FrameworkCard({
  title,
  description,
  example,
  index = 0,
}: FrameworkCardProps) {
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
      className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:bg-zinc-900/90"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
      {example && (
        <div className="mt-4 border-t border-zinc-800 pt-4">
          <p className="text-xs font-semibold text-blue-400">Example:</p>
          <p className="mt-2 text-sm text-zinc-300">{example}</p>
        </div>
      )}
    </motion.div>
  );
}
