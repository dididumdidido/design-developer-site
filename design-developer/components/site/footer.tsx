import Image from "next/image";

import { Container } from "@/components/site/shared";
import { agencyLine, footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-zinc-300">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/brand/dezain-lockup-neon.png"
              alt="Design Developer (Dezain Developer) logo"
              width={2117}
              height={659}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">{footer.tagline}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">{agencyLine}</p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Agency services")}`}
              className="inline-block py-3 text-[15px] font-medium text-neon hover:underline"
            >
              Ask about agency work
            </a>
          </div>
          <nav aria-label="Footer" className="flex flex-col md:items-end">
            {footer.links.map((l) => (
              <a key={l.href} href={l.href} className="py-3 text-[15px] text-zinc-300 hover:text-neon">
                {l.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="py-3 text-[15px] font-medium text-neon hover:underline">
              {site.email}
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-zinc-700 pt-6 text-[13px] text-zinc-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Design Developer LLC. All rights reserved.</p>
          <Image
            src="/brand/women-owned-business-white.png"
            alt="Women Owned Business"
            width={600}
            height={265}
            className="h-10 w-auto self-start object-contain sm:self-auto"
          />
        </div>
      </Container>
    </footer>
  );
}
