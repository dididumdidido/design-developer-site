import { Container, SectionTitle } from "@/components/site/shared";
import { pricing } from "@/lib/content";

export function PricingFaq() {
  return (
    <section className="py-14 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionTitle title="Pricing questions" subtitle="Straight answers before you book." />
        <div className="divide-y divide-border border-y border-border">
          {pricing.faq.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-xl font-normal text-soft transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
