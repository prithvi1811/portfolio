'use client';

interface FailureCardProps {
  title: string;
  situation: string;
  lesson: string;
  application: string;
}

export default function FailureCard({
  title,
  situation,
  lesson,
  application,
}: FailureCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm transition hover:border-zinc-700">
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
    </div>
  );
}
