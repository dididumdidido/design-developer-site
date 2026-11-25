"use client";

import * as React from "react";

import { useReveal } from "@/hooks/use-reveal";

/**
 * Renders text; metric-style numbers inside it ($18K, 175+, 1.5M, 10,000) count up once
 * when scrolled into view. Plain numbers like "30 days" stay as they are.
 */
export function CountUp({ text, className }: { text: string; className?: string }) {
  const { ref, stage } = useReveal<HTMLSpanElement>(0.6);
  const [p, setP] = React.useState(1); // progress 0..1, final by default

  React.useEffect(() => {
    if (stage === "ready") setP(0);
    if (stage !== "play") return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 1400);
      setP(1 - Math.pow(1 - k, 3));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stage]);

  const out = text.replace(/(\$?)(\d[\d,]*\.?\d*)([KM]?\+?)/g, (m, cur: string, num: string, suf: string) => {
    if (!cur && !suf && !num.includes(",")) return m;
    const hasComma = num.includes(",");
    const dec = num.includes(".") ? num.split(".")[1].length : 0;
    const v = parseFloat(num.replace(/,/g, "")) * p;
    let shown = dec ? v.toFixed(dec) : Math.round(v).toString();
    if (hasComma) shown = Number(shown).toLocaleString("en-US");
    return `${cur}${shown}${suf}`;
  });

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{out}</span>
    </span>
  );
}
