import { faq, founderPhoto, seo, site } from "@/lib/content";

/** JSON-LD for search engines: who the business is, who runs it, and the FAQ. */
export function StructuredData({ faqOnly = false }: { faqOnly?: boolean }) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      email: site.email,
      description: seo.description,
      image: `${site.url}/opengraph-image.png`,
      logo: `${site.url}/icon.png`,
      founder: {
        "@type": "Person",
        name: "Adina Call",
        image: `${site.url}${founderPhoto.src}`,
        jobTitle: "Founder",
        award: "ClickFunnels Two Comma Club (2x)",
      },
      areaServed: "Worldwide",
      serviceType: ["AI digital employees", "Business automation", "Digital marketing"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];
  const out = faqOnly ? [data[1]] : [data[0]];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(out) }} />;
}
