import type { Metadata } from "next";

import { FaqBooking } from "@/components/site/faq-booking";
import { PageShell } from "@/components/site/page-shell";
import { StructuredData } from "@/components/site/structured-data";
import { pages } from "@/lib/content";

const p = pages.book;
export const metadata: Metadata = { title: p.title, description: p.description, alternates: { canonical: p.path }, openGraph: { title: p.title, description: p.description, url: p.path } };

export default function Page() {
  return (
    <PageShell>
      <StructuredData faqOnly />
      <FaqBooking asPageTitle />
    </PageShell>
  );
}
