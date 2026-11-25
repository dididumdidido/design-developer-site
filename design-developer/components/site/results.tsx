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
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((c) => (
              <article key={c.client} className="surface flex flex-col p-7 sm:p-9">
                <p className="text-[14px] font-medium text-soft">{c.business}</p>
                <h3 className="display mt-1 text-2xl">{c.client}</h3>
                {c.website && (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener"
                    className="inline-block py-3 text-[14px] font-semibold text-accent-ink hover:underline"
                  >
                    {c.website.replace("https://", "")} ↗
                  </a>
                )}
                <ul className="mt-6 space-y-3">
                  {c.results.map((r) => (
                    <li key={r} className="rounded-lg bg-tint px-4 py-3 font-display text-lg font-semibold leading-snug text-ink">
                      <CountUp text={r} />
                    </li>
                  ))}
                </ul>
                <dl className="mt-6 space-y-4 text-[15px] leading-relaxed">
                  <div>
                    <dt className="font-semibold text-ink">The problem</dt>
                    <dd className="text-soft">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">What we built</dt>
                    <dd className="text-soft">{c.built}</dd>
                  </div>
                </dl>
                {c.photo && (
                  <Image
                    src={c.photo.src}
                    alt={c.photo.alt}
                    width={c.photo.width}
                    height={c.photo.height}
                    className="mt-6 w-full rounded-lg border border-border"
                  />
                )}
              </article>
            ))}
          </div>
        )}

        {quotes.length > 0 && (
          <div className={(showCases ? "mt-5" : "mt-10") + " grid gap-5 " + (quotes.length === 1 ? "" : quotes.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3")}>
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
