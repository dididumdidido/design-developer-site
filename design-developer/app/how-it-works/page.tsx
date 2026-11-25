import type { Metadata } from "next";

import { CtaBand } from "@/components/site/cta-band";
import { HowItWorks } from "@/components/site/how-it-works";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { Paths } from "@/components/site/paths";
import { pages } from "@/lib/content";

const p = pages.howItWorks;
export const metadata: Metadata = { title: p.title, description: p.description, alternates: { canonical: p.path }, openGraph: { title: p.title, description: p.description, url: p.path } };

export default function Page() {
  return (
    <PageShell>
      <PageHeader title="How it works" subtitle="Learn to build your own digital employees, or have us build them for you. Either way, each one has a role and a KPI." />
      <Paths />
      <HowItWorks />
      <CtaBand />
    </PageShell>
  );
}
