"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  { num: "01", label: "Experience", href: "#experience" },
  { num: "02", label: "Work", href: "#work" },
  { num: "03", label: "Approach", href: "#approach" },
  { num: "04", label: "Skills", href: "#skills" },
  { num: "05", label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      {/* Desktop */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <nav className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white/90 px-2 py-2 backdrop-blur-xl shadow-lg shadow-zinc-300/40">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-full px-4 py-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <span className="relative z-10 block transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0">
                {item.label}
              </span>
              <span className="absolute inset-0 z-20 flex items-center justify-center text-xs font-medium text-blue-600 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.num}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile */}
      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <nav
          className="flex items-center justify-between rounded-full border border-zinc-200 bg-white/95 px-1 backdrop-blur-xl shadow-lg shadow-zinc-300/40"
          style={{ paddingTop: "0.6rem", paddingBottom: "max(0.6rem, env(safe-area-inset-bottom))" }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex-1 rounded-full px-1 text-center text-[11px] font-medium text-zinc-500 transition-colors active:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <motion.div
        style={{ scaleX }}
        className="fixed bottom-0 left-0 right-0 z-[60] h-px origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400"
      />
    </>
  );
}
