import Image from "next/image";

import { Container, SectionTitle } from "@/components/site/shared";
import { levels } from "@/lib/content";

export function Levels() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <SectionTitle title={levels.title} subtitle={levels.subtitle} />
        <ol className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-7">
          {levels.items.map((l, i) => (
            <li
              key={l.name}
              className={"bg-white p-5" + (i === levels.items.length - 1 ? " col-span-2 sm:col-span-1" : "")}
            >
              <Image src={l.icon} alt="" width={240} height={240} className="mb-3 size-14 sm:size-16" />
              <p className="font-display text-lg font-semibold text-ink">{l.name}</p>
              <p className="mt-1 text-[14px] leading-snug text-soft">{l.line}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
