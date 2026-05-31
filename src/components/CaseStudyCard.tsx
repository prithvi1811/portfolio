'use client';

import { useState } from 'react';

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
}: CaseStudyProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm transition hover:border-zinc-700">
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{period}</p>
      </div>

      <p className={`mt-4 text-sm font-medium ${metricColor}`}>{metric}</p>

      <p className="mt-4 text-sm leading-7 text-zinc-200">{summary}</p>

      {/* Steps Overview */}
      {!expanded && (
        <div className="mt-4 space-y-2 text-xs text-zinc-400">
          {steps.map((step) => (
            <div key={step.label} className="flex gap-2">
              <span className="font-semibold text-zinc-300">{step.label}:</span>
              <span className="line-clamp-1">{step.content}</span>
            </div>
          ))}
        </div>
      )}

      {/* Expanded View */}
      {expanded && (
        <div className="mt-6 space-y-5 border-t border-zinc-800 pt-5">
          {steps.map((step) => (
            <div key={step.label}>
              <h4 className="text-sm font-semibold text-blue-400">{step.label}</h4>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{step.content}</p>
            </div>
          ))}
        </div>
      )}

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
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          {expanded ? '← Collapse' : 'Read Full Case Study →'}
        </button>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            {linkLabel} →
          </a>
        )}
      </div>
    </div>
  );
}
