import { ArrowRight } from "lucide-react";

import { Container, SectionTitle } from "@/components/site/shared";
import { explore } from "@/lib/content";

export function Explore() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionTitle title={explore.title} />
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {explore.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group grid gap-2 py-7 md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-10"
              >
                <span className="font-display text-2xl font-medium text-ink">{item.title}</span>
                <span className="text-[16px] leading-relaxed text-soft">{item.text}</span>
                <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary">
                  Open <ArrowRight className="size-4" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
