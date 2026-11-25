import type { Metadata } from "next";

import { CtaBand } from "@/components/site/cta-band";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { PricingCompare } from "@/components/site/pricing-compare";
import { PricingFaq } from "@/components/site/pricing-faq";
import { PricingTable } from "@/components/site/pricing-table";
import { Results } from "@/components/site/results";
import { pages, pricing, site, trust } from "@/lib/content";

const p = pages.pricing;
export const metadata: Metadata = { title: p.title, description: p.description, alternates: { canonical: p.path }, openGraph: { title: p.title, description: p.description, url: p.path } };

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Digital employee pricing",
      url: `${site.url}/pricing`,
      itemListElement: pricing.tiers.map((t) => ({
        "@type": "Offer",
        name: `${t.name} digital employee (${t.tools})`,
        price: t.annual,
        priceCurrency: "USD",
        priceSpecification: { "@type": "UnitPriceSpecification", price: t.annual, priceCurrency: "USD", unitText: "YEAR" },
        seller: { "@type": "Organization", name: site.name },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pricing.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader title={pricing.title} subtitle={pricing.subtitle} />
      <PricingTable />
      <PricingCompare />
      <section className="py-6">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <ul className="flex flex-col gap-3 border-y border-border py-5 text-[15px] font-medium text-body sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Results variant="testimonials" />
      <PricingFaq />
      <CtaBand />
    </PageShell>
  );
}
