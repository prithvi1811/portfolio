'use client';

import Overlay from './Overlay';

export default function ScrollyCanvas() {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Hero content - normal flow */}
      <div className="relative min-h-screen flex items-center justify-center">
        <Overlay />
      </div>
    </section>
  );
}
