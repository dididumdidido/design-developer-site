"use client";

import { useReveal } from "@/hooks/use-reveal";
import { orgBoard } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Org chart: owner on top, seats connect and fill in one by one. */
export function OrgBoard() {
  const { ref, stage } = useReveal<HTMLDivElement>(0.4);
  const hidden = stage === "ready";
  const n = orgBoard.seats.length;

  return (
    <figure ref={ref} className="surface mt-10 p-6 sm:p-10">
      <figcaption className="sr-only">{orgBoard.caption}</figcaption>

      {/* Owner */}
      <div className="flex justify-center">
        <div className="rounded-md border border-ink bg-ink px-6 py-3 text-center text-white">
          <p className="font-display text-lg font-semibold">{orgBoard.owner}</p>
          <p className="text-[12px] text-zinc-300">{orgBoard.ownerRole}</p>
        </div>
      </div>

      {/* Connector lines (desktop) */}
      <svg className="mx-auto hidden h-12 w-full md:block" viewBox="0 0 1000 48" preserveAspectRatio="none" aria-hidden>
        <path
          d={`M500 0 V20 M100 20 H900 ${Array.from({ length: n }, (_, i) => `M${100 + (800 / (n - 1)) * i} 20 V48`).join(" ")}`}
          fill="none"
          stroke="#c4b5fd"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={hidden ? 1 : 0}
          style={{ transition: "stroke-dashoffset 900ms ease-out" }}
        />
      </svg>
      <div className="mx-auto my-3 h-6 w-px bg-[#c4b5fd] md:hidden" aria-hidden />

      {/* Seats */}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {orgBoard.seats.map((s, i) => {
          const digital = s.kind === "digital";
          return (
            <li
              key={s.name}
              className={cn(
                "rounded-md border px-3 py-4 text-center transition-[opacity,transform] duration-500 ease-out",
                digital ? "border-primary/30 bg-tint" : "border-border bg-white",
                hidden ? "translate-y-3 border-dashed opacity-0" : "translate-y-0 opacity-100",
                i === n - 1 && n % 2 === 1 ? "col-span-2 sm:col-span-1" : ""
              )}
              style={{ transitionDelay: hidden ? "0ms" : `${700 + i * 180}ms` }}
            >
              <p className="text-[15px] font-semibold leading-tight text-ink">{s.name}</p>
              <p className="mt-0.5 text-[12px] text-soft">{digital ? "Digital employee · KPI" : "People"}</p>
            </li>
          );
        })}
      </ul>

      <p className="mx-auto mt-6 max-w-xl text-center text-[15px] leading-relaxed text-soft">{orgBoard.caption}</p>
    </figure>
  );
}
