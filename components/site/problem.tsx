import Image from "next/image";

import { Container } from "@/components/site/shared";
import { problem, problemPhoto } from "@/lib/content";

export function Problem() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid overflow-hidden rounded-2xl bg-ink text-white md:grid-cols-[1.4fr_1fr]">
          <div className="px-7 py-12 sm:px-12 sm:py-16">
            <h2 className="display text-3xl text-white sm:text-[2.6rem]">{problem.title}</h2>
            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {problem.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-semibold text-white sm:text-xl">{problem.turn}</p>
          </div>
          <Image
            src={problemPhoto.src}
            alt={problemPhoto.alt}
            width={problemPhoto.width}
            height={problemPhoto.height}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[3/2] w-full object-cover object-[25%_center] md:aspect-auto md:h-full"
          />
        </div>
      </Container>
    </section>
  );
}
