import Image from "next/image";

import { CountUp } from "@/components/site/count-up";
import { Container, SectionTitle } from "@/components/site/shared";
import { caseStudies, resultsIntro, testimonials } from "@/lib/content";

/** Renders only when real testimonials or case studies exist in lib/content.ts. */
export function Results({ variant = "full" }: { variant?: "full" | "testimonials" }) {
  if (testimonials.length === 0 && caseStudies.length === 0) return null;
  const showCases = variant === "full";
  const quotes = showCases ? testimonials : testimonials.filter((t) => t.homepage !== false);
  if (!showCases && quotes.length === 0) return null;

  return (
    <section id="results" className="py-16 lg:py-24">
      <Container>
        {showCases ? (
          <SectionTitle title={resultsIntro.title} subtitle={resultsIntro.subtitle} />
        ) : (
          <SectionTitle title="What clients say" />
        )}

        {showCases && caseStudies.length > 0 && (
          <div className="mt-12 space-y-16 lg:space-y-24">
            {caseStudies.map((c, i) => (
              <article key={c.client} className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
                {c.cover && (
                  <div className={i % 2 === 1 ? "lg:order-last" : ""}>
                    <WorkImg img={c.cover} className="aspect-[16/10]" sizes="(min-width: 1024px) 540px, 92vw" />
                    {c.gallery && c.gallery.length > 0 && (
                      <div className={"mt-3 grid gap-3 " + (c.gallery.length === 1 ? "grid-cols-2" : "grid-cols-2")}>
                        {c.gallery.map((g) => (
                          <WorkImg key={g.src} img={g} className="aspect-[4/3]" sizes="(min-width: 1024px) 265px, 45vw" />
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <div className="lg:pt-2">
                  <p className="text-[14px] font-medium text-soft">{c.business}</p>
                  <h3 className="mt-1 text-[1.9rem] leading-tight">{c.client}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.services.map((t) => (
                      <span key={t} className="rounded-full border border-ink px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-6 space-y-3">
                    {c.results.map((r) => (
                      <li key={r} className="rounded-lg bg-tint px-4 py-3 text-lg font-semibold leading-snug text-ink">
                        <CountUp text={r} />
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-6 space-y-4 text-[16px] leading-relaxed">
                    <div>
                      <dt className="font-semibold text-ink">The problem</dt>
                      <dd className="text-soft">{c.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">What we built</dt>
                      <dd className="text-soft">{c.built}</dd>
                    </div>
                  </dl>
                  {c.website && (
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener"
                      className="mt-3 inline-block py-3 text-[15px] font-semibold text-accent-ink hover:underline"
                    >
                      Visit {c.website.replace("https://", "")} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {quotes.length > 0 && (
          <div className={(showCases ? "mt-20" : "mt-10") + " grid gap-5 " + (quotes.length === 1 ? "" : quotes.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3")}>
            {quotes.map((t) => (
              <figure key={t.name} className="surface flex flex-col p-7">
                {t.stars && (
                  <p className="mb-3 text-lg tracking-[0.15em] text-accent-ink" aria-label={`${t.stars} out of 5 stars`}>
                    {"★".repeat(t.stars)}
                  </p>
                )}
                <blockquote
                  className={
                    "flex-1 leading-relaxed text-ink " +
                    (quotes.length <= 2 ? "font-display text-lg sm:text-xl" : "text-[16px]")
                  }
                >
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {t.photo && (
                    <Image
                      src={t.photo.src}
                      alt={t.photo.alt}
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover"
                    />
                  )}
                  <span className="text-[14px] leading-snug">
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="text-soft">
                      {t.website ? (
                        <a href={t.website} target="_blank" rel="noopener" className="underline-offset-2 hover:text-accent-ink hover:underline">
                          {[t.business, t.city].filter(Boolean).join(", ")}
                        </a>
                      ) : (
                        [t.business, t.city].filter(Boolean).join(", ") || "Client"
                      )}
                    </span>
                  </span>
                </figcaption>
                {t.disclaimer && <p className="mt-4 text-[12px] leading-snug text-soft">*{t.disclaimer}</p>}
              </figure>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function WorkImg({
  img,
  className,
  sizes,
}: {
  img: { src: string; alt: string; width: number; height: number; fit?: "cover" | "contain" };
  className?: string;
  sizes: string;
}) {
  const contain = img.fit === "contain";
  return (
    <div className={"overflow-hidden rounded-xl border border-border " + (contain ? "bg-muted p-3 " : "bg-white ") + (className ?? "")}>
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes={sizes}
        className={"h-full w-full " + (contain ? "object-contain" : "object-cover object-top")}
      />
    </div>
  );
}
