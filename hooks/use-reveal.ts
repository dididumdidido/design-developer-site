"use client";

import * as React from "react";

/**
 * Plays an animation once when the element scrolls into view.
 * - Server render and no-JS: content is shown in its final state.
 * - Reduced motion: final state, no animation.
 * Returns: ref, and `stage`: "static" (show final), "ready" (hidden, waiting), "play" (animating in).
 */
export function useReveal<T extends HTMLElement>(threshold = 0.35) {
  const ref = React.useRef<T>(null);
  const [stage, setStage] = React.useState<"static" | "ready" | "play">("static");

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.85 && r.bottom > 0) return; // already on screen at load: leave as is
    setStage("ready");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStage("play");
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, stage };
}
