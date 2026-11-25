import Image from "next/image";
import { Check, Mail } from "lucide-react";

import { CalendlyEmbed } from "@/components/site/calendly-embed";
import { BookButton, Container } from "@/components/site/shared";
import { bookingPhoto, faq, finalCta, site } from "@/lib/content";

export function FaqBooking({ asPageTitle = false }: { asPageTitle?: boolean }) {
  const H = asPageTitle ? "h1" : "h2";
  return (
    <section id="book" className="bg-holo-soft py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <H className="display text-4xl leading-tight sm:text-5xl">{finalCta.title}</H>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-body">{finalCta.subtitle}</p>
            <ul className="mt-5 space-y-3">
              {finalCta.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[16px] leading-relaxed text-ink">
                  <Check className="mt-1 size-4 shrink-0 text-accent-ink" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            <BookButton className="mt-8" />
          </div>
          <Image
            src={bookingPhoto.src}
            alt={bookingPhoto.alt}
            width={bookingPhoto.width}
            height={bookingPhoto.height}
            sizes="(min-width: 1024px) 500px, 90vw"
            className="aspect-[3/2] w-full rounded-2xl border border-border object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          {/* FAQ */}
          <div id="faq">
            <h3 className="display text-2xl">{faq.title}</h3>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {faq.items.map((item) => (
                <details key={item.q} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="text-xl font-normal text-soft transition-transform group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-[15px] leading-relaxed text-soft">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div id="calendar">
            {site.calendarEmbedUrl ? (
              <CalendlyEmbed url={site.calendarEmbedUrl} />
            ) : (
              <div className="surface flex h-full flex-col items-start justify-center gap-5 bg-muted p-8 sm:p-10">
                <Mail className="size-6 text-accent-ink" aria-hidden />
                <p className="display font-display text-2xl text-ink">Request your strategy call</p>
                <p className="text-[16px] leading-relaxed text-soft">
                  Send a quick note with the busywork you want off your plate first, and Adina will reply with times
                  that work.
                </p>
                <BookButton />
                <a href={`mailto:${site.email}`} className="py-2 text-[15px] font-medium text-accent-ink hover:underline">
                  {site.email}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl border-t border-zinc-300/60 pt-8">
          <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">{finalCta.ps}</p>
          <p className="mt-3 font-display text-lg font-semibold text-accent-ink">{finalCta.signature}</p>
        </div>
      </Container>
    </section>
  );
}
