"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { Container, SectionTitle } from "@/components/site/shared";
import { useReveal } from "@/hooks/use-reveal";
import { chatDemo } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ChatDemo() {
  const { ref, stage } = useReveal<HTMLDivElement>(0.4);
  const total = chatDemo.messages.length;
  const [shown, setShown] = React.useState(total + 1); // final state by default
  const [typing, setTyping] = React.useState(false);

  React.useEffect(() => {
    if (stage === "ready") setShown(0);
    if (stage !== "play") return;
    let i = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const step = () => {
      if (i >= total) {
        timers.push(setTimeout(() => setShown(total + 1), 500)); // status chip
        return;
      }
      const isDE = chatDemo.messages[i].from === "de";
      if (isDE) {
        setTyping(true);
        timers.push(
          setTimeout(() => {
            setTyping(false);
            i += 1;
            setShown(i);
            timers.push(setTimeout(step, 700));
          }, 1100)
        );
      } else {
        i += 1;
        setShown(i);
        timers.push(setTimeout(step, 800));
      }
    };
    timers.push(setTimeout(step, 300));
    return () => timers.forEach(clearTimeout);
  }, [stage, total]);

  return (
    <section className="py-16 lg:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <SectionTitle title={chatDemo.title} subtitle={chatDemo.subtitle} />
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {chatDemo.outcomes.map((o) => (
              <div key={o.label}>
                <dt className="sr-only">{o.label}</dt>
                <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">{o.value}</dd>
                <p className="mt-1 text-[13px] leading-snug text-soft sm:text-[14px]">{o.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div ref={ref} className="mx-auto w-full max-w-md">
          <div className="rounded-lg border border-border bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-border px-1 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-full bg-tint text-[13px] font-semibold text-primary">S</span>
                <div className="leading-tight">
                  <p className="text-[14px] font-semibold text-ink">Sarah · New lead</p>
                  <p className="text-[12px] text-soft">Text message</p>
                </div>
              </div>
              <span className="shrink-0 text-[12px] font-medium text-soft">
                <span className="sm:hidden">Example</span>
                <span className="hidden sm:inline">{chatDemo.label}</span>
              </span>
            </div>

            <ol className="flex min-h-[340px] flex-col gap-3 py-4" aria-label="Example conversation between a new lead and a digital employee">
              {chatDemo.messages.map((m, i) => (
                <li
                  key={i}
                  className={cn(
                    "max-w-[85%] transition-[opacity,transform] duration-500 ease-out",
                    m.from === "de" ? "self-end text-right" : "self-start",
                    i < shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                  )}
                >
                  <p
                    className={cn(
                      "inline-block rounded-2xl px-4 py-2.5 text-left text-[15px] leading-snug",
                      m.from === "de" ? "rounded-br-md bg-primary text-white" : "rounded-bl-md bg-muted text-ink"
                    )}
                  >
                    {m.text}
                  </p>
                  <p className="mt-1 px-1 text-[12px] text-soft">
                    {m.from === "de" ? "Digital employee" : "Sarah"} · {m.time}
                  </p>
                </li>
              ))}
              {typing && (
                <li className="self-end" aria-hidden>
                  <span className="inline-flex gap-1 rounded-2xl rounded-br-md bg-tint px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="size-1.5 animate-pulse rounded-full bg-primary"
                        style={{ animationDelay: `${d * 120}ms` }}
                      />
                    ))}
                  </span>
                </li>
              )}
            </ol>

            <p
              className={cn(
                "flex items-center gap-2 rounded-md bg-tint px-3 py-2.5 text-[13px] font-medium text-ink transition-opacity duration-500",
                shown > total ? "opacity-100" : "opacity-0"
              )}
            >
              <Check className="size-4 shrink-0 text-primary" aria-hidden />
              {chatDemo.status}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
