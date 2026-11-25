"use client";

import Image from "next/image";
import * as React from "react";

import { Container, SectionTitle } from "@/components/site/shared";
import { useReveal } from "@/hooks/use-reveal";
import { levels } from "@/lib/content";

export function Levels() {
  const { ref, stage } = useReveal<HTMLOListElement>(0.3);
  const [done, setDone] = React.useState(false);
  const spinIn = stage === "play" && !done;
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <SectionTitle title={levels.title} subtitle={levels.subtitle} />
        <ol
          ref={ref}
          className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-7"
        >
          {levels.items.map((l, i) => (
            <li
              key={l.name}
              className="group flex items-center gap-4 bg-white p-4 sm:block sm:p-5"
            >
              <span className="block shrink-0 [perspective:400px] sm:mb-3">
                <Image
                  src={l.icon}
                  alt=""
                  width={240}
                  height={240}
                  className={
                    "icon-3d size-12 sm:size-16" + (spinIn ? " icon-spin-in" : "")
                  }
                  style={spinIn ? { animationDelay: `${i * 120}ms` } : undefined}
                  onAnimationEnd={i === levels.items.length - 1 ? () => setDone(true) : undefined}
                />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-ink">{l.name}</p>
                <p className="mt-1 text-[14px] leading-snug text-soft">{l.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
