"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export default function CountUp({
  to,
  suffix = "",
  duration = 1.6,
  active,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  active: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!active || !node) return;

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = `${Math.round(value).toLocaleString()}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [active, to, suffix, duration]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}
