import Image from "next/image";

import { Container } from "@/components/site/shared";
import { about, aboutPhoto, awardsPhotos } from "@/lib/content";

export function About({ asPageTitle = false }: { asPageTitle?: boolean }) {
  const H = asPageTitle ? "h1" : "h2";
  return (
    <section id="about" className="py-16 lg:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Image
          src={aboutPhoto.src}
          alt={aboutPhoto.alt}
          width={aboutPhoto.width}
          height={aboutPhoto.height}
          sizes="(min-width: 1024px) 440px, 90vw"
          className="mx-auto aspect-[4/5] w-full max-w-md rounded-lg border border-border object-cover object-[center_40%] lg:max-w-none"
        />
        <div className="lg:pt-6">
          <H className="display text-3xl leading-tight sm:text-[2.6rem]">{about.title}</H>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-5 text-lg leading-relaxed text-soft">
              {p}
            </p>
          ))}
          <p className="mt-8 font-display text-lg font-semibold text-ink">{about.signature}</p>

          {awardsPhotos.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              {awardsPhotos.map((a) => (
                <figure key={a.src}>
                  <Image
                    src={a.src}
                    alt={a.alt}
                    width={a.width}
                    height={a.height}
                    sizes="(min-width: 1024px) 300px, 90vw"
                    className="aspect-[3/2] w-full rounded-md border border-border object-cover"
                  />
                  <figcaption className="mt-2 text-[13px] leading-snug text-soft sm:text-[14px]">{a.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </Container>

    </section>
  );
}
