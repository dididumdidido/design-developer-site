import { Container, SectionTitle } from "@/components/site/shared";
import { OrgBoard } from "@/components/site/org-board";
import { howItWorks, offer } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <Container>
        <SectionTitle title={howItWorks.title} />
        <ol className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-3 md:gap-10">
          {howItWorks.steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-display text-4xl font-semibold text-accent-ink">
                {i + 1}
              </span>
              <h3 className="display mt-3 text-xl">
                {s.title}
                {i === 2 && offer.goLiveDays ? ` in ${offer.goLiveDays} days` : ""}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-soft">{s.body}</p>
            </li>
          ))}
        </ol>
        <OrgBoard />
      </Container>
    </section>
  );
}
