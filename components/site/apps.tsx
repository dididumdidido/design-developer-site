import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Container, SectionTitle } from "@/components/site/shared";
import { apps } from "@/lib/content";

export function AppsServices() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionTitle title={apps.servicesTitle} />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {apps.services.map((s, i) => (
            <li key={s.title} className="bg-white p-6 sm:p-8">
              <span className="text-[13px] font-semibold tabular-nums text-accent-ink">0{i + 1}</span>
              <h3 className="mt-2 text-xl">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-soft">{s.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function AppsPairing() {
  return (
    <section className="pb-16 lg:pb-20">
      <Container>
        <div className="rounded-xl bg-holo-panel p-8 sm:p-10 lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <h2 className="text-3xl leading-tight sm:text-[2.2rem]">{apps.pairing.title}</h2>
          <div>
            <p className="mt-4 text-lg leading-relaxed text-body lg:mt-0">{apps.pairing.body}</p>
            <a
              href={apps.pairing.link.href}
              className="mt-5 inline-flex items-center gap-1.5 py-2 text-[15px] font-semibold text-accent-ink hover:underline"
            >
              {apps.pairing.link.label} <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AppsProcess() {
  return (
    <section className="pb-16 lg:pb-20">
      <Container>
        <SectionTitle title={apps.processTitle} />
        <ol className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {apps.process.map((s, i) => (
            <li key={s.title}>
              <span className="text-4xl font-semibold text-accent-ink">{i + 1}</span>
              <h3 className="mt-3 text-xl">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function AppsMoreWork() {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="flex flex-col gap-4 border-y border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl">{apps.moreWork.title}</h2>
            <p className="mt-1 text-[16px] text-soft">{apps.moreWork.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {apps.moreWork.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                className="inline-flex items-center gap-1.5 rounded-md border border-ink px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-neon"
              >
                {l.label} <ArrowUpRight className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AppsWork() {
  return (
    <section className="pb-16 lg:pb-20">
      <Container>
        <SectionTitle title={apps.workTitle} />
        <ul className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
          {apps.work.map((w) => (
            <li key={w.url}>
              <a href={w.url} target="_blank" rel="noopener" className="group block">
                <div className="overflow-hidden rounded-xl border border-border bg-white">
                  <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5" aria-hidden>
                    <span className="size-2.5 rounded-full bg-zinc-300" />
                    <span className="size-2.5 rounded-full bg-zinc-300" />
                    <span className="size-2.5 rounded-full bg-zinc-300" />
                    <span className="ml-3 text-[12px] text-soft">{w.domain}</span>
                  </div>
                  <Image
                    src={w.image.src}
                    alt={w.image.alt}
                    width={w.image.width}
                    height={w.image.height}
                    sizes="(min-width: 768px) 560px, 92vw"
                    className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {w.services.map((t) => (
                    <span key={t} className="rounded-full border border-ink px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-xl">{w.client}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-soft">{w.body}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent-ink group-hover:underline">
                  Visit {w.domain} <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
