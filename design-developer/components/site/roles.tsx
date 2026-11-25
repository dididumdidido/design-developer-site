import Image from "next/image";

import { Container, SectionTitle } from "@/components/site/shared";
import { roles, rolesIntro } from "@/lib/content";

export function Roles() {
  return (
    <section id="roles" className="py-16 lg:py-24">
      <Container>
        <SectionTitle {...rolesIntro} />
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {roles.map((r) => (
            <li key={r.role} className="grid gap-5 py-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={r.avatar}
                    alt={`Illustrated ${r.role} digital employee`}
                    width={200}
                    height={200}
                    className="size-16 shrink-0 rounded-full border border-border object-cover"
                  />
                  <h3 className="display text-2xl">{r.role}</h3>
                </div>
                <p className="mt-2 max-w-md text-[16px] leading-relaxed text-soft">{r.does}</p>
              </div>
              <figure className={"rounded-xl p-5 " + ("real" in r.sample ? "border border-primary/25 bg-tint" : "bg-muted")}>
                <figcaption
                  className={
                    "text-[13px] font-semibold " + ("real" in r.sample ? "text-primary" : "text-soft")
                  }
                >
                  {"real" in r.sample ? r.sample.kind : `Example: ${r.sample.kind.charAt(0).toLowerCase() + r.sample.kind.slice(1)}`}
                </figcaption>
                <blockquote className="mt-2 text-[15px] leading-relaxed text-ink">{r.sample.body}</blockquote>
                {"link" in r.sample && r.sample.link && (
                  <a
                    href={r.sample.link}
                    target="_blank"
                    rel="noopener"
                    className="mt-1 inline-block py-3 text-[14px] font-semibold text-primary hover:underline"
                  >
                    See it live ↗
                  </a>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
