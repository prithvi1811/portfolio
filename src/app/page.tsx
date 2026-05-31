'use client';

import dynamic from 'next/dynamic';

const ScrollyCanvas = dynamic(() => import("@/components/ScrollyCanvas"), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />,
});

const Resume = dynamic(() => import("@/components/Resume"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative bg-black selection:bg-white/30 selection:text-black" suppressHydrationWarning>

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/20 blur-[120px]" />
      </div>

      {/* Content */}
      <ScrollyCanvas />
      <Resume />
      
    </main>
  );
}
