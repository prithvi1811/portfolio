'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudyStep {
  label: string;
  content: string;
}

interface CaseStudyProps {
  title: string;
  period: string;
  metric: string;
  metricColor: string;
  summary: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  steps: CaseStudyStep[];
  index?: number;
}

export default function CaseStudyCard({
  title,
  period,
  metric,
  metricColor,
  summary,
  tags,
  link,
  linkLabel,
  steps,
  index = 0,
}: CaseStudyProps) {
  const [expanded, setExpanded] = useState(false);

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

  const expandVariants = {
    collapsed: { height: 'auto' },
    expanded: { height: 'auto' },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm transition hover:border-zinc-600 hover:bg-zinc-900/90"
    >
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{period}</p>
      </div>

      <p className={`mt-4 text-sm font-medium ${metricColor}`}>{metric}</p>

      <p className="mt-4 text-sm leading-7 text-zinc-200">{summary}</p>

      {/* Steps Overview */}
      <AnimatePresence mode="wait">
        {!expanded && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2 text-xs text-zinc-400 overflow-hidden"
          >
            {steps.map((step) => (
              <div key={step.label} className="flex gap-2">
                <span className="font-semibold text-zinc-300">{step.label}:</span>
                <span className="line-clamp-1">{step.content}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Expanded View */}
        {expanded && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="mt-6 space-y-5 border-t border-zinc-800 pt-5 overflow-hidden"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
              >
                <h4 className="text-sm font-semibold text-blue-400">{step.label}</h4>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{step.content}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <motion.div
        className="mt-6 flex flex-wrap gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          {expanded ? '← Collapse' : 'Read Full Case Study →'}
        </motion.button>
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            {linkLabel} →
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}
