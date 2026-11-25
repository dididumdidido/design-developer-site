"use client";

import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/shared";
import { bookingHref, pricing } from "@/lib/content";
import { cn } from "@/lib/utils";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export function PricingTable() {
  const [mode, setMode] = React.useState<"annual" | "monthly">("annual");

  return (
    <section className="py-14 lg:py-20">
      <Container>
        {/* Billing toggle */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div role="radiogroup" aria-label="How to pay" className="inline-flex rounded-md border border-border bg-white p-1">
            {[
              { id: "annual", label: "Pay annually", hint: "Lowest total" },
              { id: "monthly", label: "Setup + monthly", hint: "Lower first payment" },
            ].map((o) => (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={mode === o.id}
                onClick={() => setMode(o.id as "annual" | "monthly")}
                className={cn(
                  "min-h-11 rounded px-4 text-left text-[14px] font-semibold transition-colors",
                  mode === o.id ? "bg-primary text-white" : "text-body [@media(hover:hover)]:hover:bg-muted"
                )}
              >
                {o.label}
                <span className={cn("ml-2 hidden text-[12px] font-medium sm:inline", mode === o.id ? "text-white/85" : "text-soft")}>{o.hint}</span>
              </button>
            ))}
          </div>
          <p className="text-[14px] text-soft">Prices per digital employee, in USD.</p>
        </div>

        {/* Tier cards */}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((t) => (
            <li key={t.name} className="flex flex-col rounded-xl border border-border bg-white p-6">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="display text-2xl">{t.name}</h2>
                <span className="text-[13px] font-semibold text-primary">{t.tools}</span>
              </div>

              <div className="mt-5 min-h-[92px]">
                {mode === "annual" ? (
                  <>
                    <p className="font-display text-4xl font-semibold tracking-tight text-ink">
                      {usd(t.annual)}
                      <span className="ml-1 font-sans text-[15px] font-medium text-soft">/year</span>
                    </p>
                    <p className="mt-2 text-[14px] leading-snug text-soft">
                      or {usd(t.setup)} setup, then {usd(t.monthly)}/mo from month 4
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-display text-4xl font-semibold tracking-tight text-ink">
                      {usd(t.setup)}
                      <span className="ml-1 font-sans text-[15px] font-medium text-soft">setup</span>
                    </p>
                    <p className="mt-2 text-[14px] leading-snug text-soft">
                      covers months 1–3, then <b className="font-semibold text-ink">{usd(t.monthly)}/mo</b> month to month
                    </p>
                  </>
                )}
              </div>

              <div className="mb-6 mt-5 border-t border-border pt-4">
                <p className="text-[13px] font-semibold text-soft">Example role</p>
                <div className="mt-2 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={`Illustrated ${t.example} digital employee`}
                    width={200}
                    height={200}
                    className="size-12 shrink-0 rounded-full border border-border object-cover"
                  />
                  <p className="font-semibold leading-snug text-ink">{t.example}</p>
                </div>
                <p className="mt-1 text-[14px] leading-snug text-soft">{t.exampleTools}</p>
              </div>

              <Button asChild variant="outline" className="mt-auto w-full">
                <a href={bookingHref}>Book a strategy call</a>
              </Button>
            </li>
          ))}
        </ul>

        {/* Included in every build */}
        <div className="mt-6 rounded-xl border border-primary/25 bg-tint p-6 sm:p-8">
          <h2 className="display text-2xl">Included with every digital employee</h2>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.included.map((i) => (
              <li key={i} className="flex gap-3 text-[15px] text-ink">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
