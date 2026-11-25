import { BookButton, Container } from "@/components/site/shared";
import { finalCta, hero } from "@/lib/content";

/** Short call-to-action band used at the bottom of every page except /book. */
export function CtaBand() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-ink px-7 py-10 text-white sm:px-12 md:flex-row md:items-center">
          <div>
            <h2 className="display text-3xl text-white sm:text-4xl">{finalCta.title}</h2>
            <p className="mt-3 text-[16px] text-zinc-300">{hero.microcopy}</p>
          </div>
          <BookButton className="shrink-0 bg-neon text-ink [@media(hover:hover)]:hover:bg-[#d8f05f]" />
        </div>
      </Container>
    </section>
  );
}
