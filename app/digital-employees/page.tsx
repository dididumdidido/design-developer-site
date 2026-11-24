import type { Metadata } from "next";

import { Compare } from "@/components/site/compare";
import { CtaBand } from "@/components/site/cta-band";
import { Levels } from "@/components/site/levels";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { Roles } from "@/components/site/roles";
import { pages } from "@/lib/content";

const p = pages.digitalEmployees;
export const metadata: Metadata = { title: p.title, description: p.description, alternates: { canonical: p.path }, openGraph: { title: p.title, description: p.description, url: p.path } };

export default function Page() {
  return (
    <PageShell>
      <PageHeader title="Digital employees" subtitle="You don't BUY a digital employee. You HIRE one. Here are the roles, how each one grows, and how they compare." />
      <Roles />
      <Levels />
      <Compare />
      <CtaBand />
    </PageShell>
  );
}
