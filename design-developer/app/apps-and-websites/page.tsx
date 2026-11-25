import type { Metadata } from "next";

import { AppsMoreWork, AppsPairing, AppsProcess, AppsServices, AppsWork } from "@/components/site/apps";
import { CtaBand } from "@/components/site/cta-band";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { apps, pages } from "@/lib/content";

const p = pages.apps;
export const metadata: Metadata = { title: p.title, description: p.description, alternates: { canonical: p.path }, openGraph: { title: p.title, description: p.description, url: p.path } };

export default function Page() {
  return (
    <PageShell>
      <PageHeader title={apps.header.title} subtitle={apps.header.subtitle} />
      <AppsServices />
      <AppsWork />
      <AppsPairing />
      <AppsProcess />
      <AppsMoreWork />
      <CtaBand />
    </PageShell>
  );
}
