'use client';

interface FrameworkCardProps {
  title: string;
  description: string;
  example?: string;
}

export default function FrameworkCard({
  title,
  description,
  example,
}: FrameworkCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-700">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
      {example && (
        <div className="mt-4 border-t border-zinc-800 pt-4">
          <p className="text-xs font-semibold text-blue-400">Example:</p>
          <p className="mt-2 text-sm text-zinc-300">{example}</p>
        </div>
      )}
    </div>
  );
}
