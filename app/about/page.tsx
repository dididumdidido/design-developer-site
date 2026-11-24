import type { Metadata } from "next";

import { About } from "@/components/site/about";
import { Beliefs } from "@/components/site/beliefs";
import { CtaBand } from "@/components/site/cta-band";
import { PageShell } from "@/components/site/page-shell";
import { pages } from "@/lib/content";

const p = pages.about;
export const metadata: Metadata = { title: p.title, description: p.description, alternates: { canonical: p.path }, openGraph: { title: p.title, description: p.description, url: p.path } };

export default function Page() {
  return (
    <PageShell>
      <About asPageTitle />
      <Beliefs />
      <CtaBand />
    </PageShell>
  );
}
