import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container, SectionTitle } from "@/components/site/shared";
import { bookingHref, paths } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Paths() {
  return (
    <section id="paths" className="py-16 lg:py-24">
      <Container>
        <SectionTitle title={paths.title} subtitle={paths.subtitle} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {paths.options.map((o) => {
            const featured = "featured" in o && o.featured;
            return (
              <article
                key={o.name}
                className={cn(
                  "flex flex-col rounded-2xl border p-8 sm:p-10",
                  featured ? "border-primary bg-tint" : "border-border bg-white"
                )}
              >
                <h3 className="display text-3xl">{o.name}</h3>
                <p className="mt-2 text-[16px] text-soft">{o.for}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {o.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[16px] leading-relaxed text-body">
                      <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" variant={featured ? "default" : "outline"} className="mt-8 self-start">
                  <a href={bookingHref}>{o.cta}</a>
                </Button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
