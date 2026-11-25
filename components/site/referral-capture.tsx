"use client";

import * as React from "react";

import { REF_DAYS, REF_KEY, cleanRef } from "@/lib/referral";

/** Saves ?ref=CODE for 90 days (first referrer wins) so the booking can be credited to the partner. */
export function ReferralCapture() {
  React.useEffect(() => {
    const code = cleanRef(new URLSearchParams(window.location.search).get("ref"));
    if (!code) return;
    try {
      const existing = localStorage.getItem(REF_KEY);
      if (existing && Date.now() < JSON.parse(existing).exp) return;
      localStorage.setItem(REF_KEY, JSON.stringify({ code, exp: Date.now() + REF_DAYS * 864e5 }));
    } catch {
      /* storage blocked: nothing to do */
    }
  }, []);
  return null;
}
