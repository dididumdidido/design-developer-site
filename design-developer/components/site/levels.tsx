import Image from "next/image";

import { Container, SectionTitle } from "@/components/site/shared";
import { levels } from "@/lib/content";

export function Levels() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <SectionTitle title={levels.title} subtitle={levels.subtitle} />
        <ol className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-7">
          {levels.items.map((l, i) => (
            <li
              key={l.name}
              className={"flex items-center gap-4 bg-white p-4 sm:block sm:p-5" + (i === levels.items.length - 1 ? " sm:col-span-1" : "")}
            >
              <Image src={l.icon} alt="" width={240} height={240} className="size-12 shrink-0 sm:mb-3 sm:size-16" />
              <div><p className="font-display text-lg font-semibold text-ink">{l.name}</p>
              <p className="mt-1 text-[14px] leading-snug text-soft">{l.line}</p></div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
