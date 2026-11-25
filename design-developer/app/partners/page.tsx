import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { Container, SectionTitle } from "@/components/site/shared";
import { pages, partners, site } from "@/lib/content";

const p = pages.partners;
export const metadata: Metadata = { title: p.title, description: p.description, alternates: { canonical: p.path }, openGraph: { title: p.title, description: p.description, url: p.path } };

const applyHref = `mailto:${site.email}?subject=${encodeURIComponent(partners.applySubject)}&body=${encodeURIComponent(partners.applyBody.replace(/\\n/g, "\n"))}`;

export default function Page() {
  return (
    <PageShell>
      <PageHeader title={partners.title} subtitle={partners.subtitle} />

      <section className="py-14 lg:py-20">
        <Container>
          <ol className="grid gap-8 border-t border-border pt-8 md:grid-cols-3 md:gap-10">
            {partners.terms.map((t, i) => (
              <li key={t.title}>
                <span className="font-display text-4xl font-semibold text-accent-ink">{i + 1}</span>
                <h2 className="display mt-3 text-xl">{t.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-soft">{t.text}</p>
              </li>
            ))}
          </ol>
          <Button asChild size="lg" className="mt-10">
            <a href={applyHref}>Apply to become a partner</a>
          </Button>
        </Container>
      </section>

      <section className="py-14 lg:py-16">
        <Container>
          <SectionTitle title="What you could earn" subtitle="Examples based on our published pricing." />
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-white">
            <table className="w-full text-left text-[15px]">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="p-4 font-semibold text-ink">Your referral</th>
                  <th scope="col" className="hidden p-4 font-semibold text-ink sm:table-cell">They pay</th>
                  <th scope="col" className="bg-tint p-4 font-semibold text-accent-ink">You earn (15%)</th>
                </tr>
              </thead>
              <tbody>
                {partners.examples.map((e) => (
                  <tr key={e.label} className="border-b border-border last:border-0">
                    <th scope="row" className="p-4 font-medium text-ink">
                      {e.label}
                      <span className="mt-1 block text-[14px] font-normal text-soft sm:hidden">{e.detail}</span>
                    </th>
                    <td className="hidden p-4 text-body sm:table-cell">{e.detail}</td>
                    <td className="bg-tint p-4 font-display text-lg font-semibold text-ink">{e.earn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-6 max-w-3xl space-y-2 text-[14px] leading-relaxed text-soft">
            {partners.fine.map((f) => (
              <li key={f}>· {f}</li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </PageShell>
  );
}
