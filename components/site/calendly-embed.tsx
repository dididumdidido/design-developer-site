"use client";

import * as React from "react";

import { readRef } from "@/lib/referral";

/** Calendly iframe. If the visitor came through a partner link, the booking is tagged utm_source=partner&utm_campaign=CODE. */
export function CalendlyEmbed({ url }: { url: string }) {
  const [src, setSrc] = React.useState(url);
  React.useEffect(() => {
    const ref = readRef();
    if (!ref) return;
    const u = new URL(url);
    u.searchParams.set("utm_source", "partner");
    u.searchParams.set("utm_campaign", ref);
    setSrc(u.toString());
  }, [url]);
  return (
    <iframe
      src={src}
      title="Book a strategy call with Adina Call"
      className="h-[720px] w-full rounded-xl border border-border bg-white"
      loading="lazy"
    />
  );
}
