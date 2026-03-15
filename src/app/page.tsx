import ScrollyCanvas from '@/components/ScrollyCanvas';
import Resume from '@/components/Resume';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/30 selection:text-white">
      <ScrollyCanvas />
      <Resume />
    </main>
  );
}
