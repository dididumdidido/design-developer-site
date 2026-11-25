import type { Metadata } from "next";

import { CtaBand } from "@/components/site/cta-band";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { Results } from "@/components/site/results";
import { pages } from "@/lib/content";

const p = pages.results;
export const metadata: Metadata = { title: p.title, description: p.description, alternates: { canonical: p.path }, openGraph: { title: p.title, description: p.description, url: p.path } };

export default function Page() {
  return (
    <PageShell>
      <PageHeader title="Results" subtitle="Real numbers from brands, websites, offers and marketing I've built, including my own companies." />
      <Results />
      <CtaBand />
    </PageShell>
  );
}
