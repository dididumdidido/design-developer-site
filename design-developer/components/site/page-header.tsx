import { Container } from "@/components/site/shared";

/** Intro band at the top of each child page. */
export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-holo-soft pb-12 pt-12 sm:pt-16 lg:pb-16 lg:pt-20">
      <Container>
        <h1 className="display max-w-3xl text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft sm:text-xl">{subtitle}</p>}
      </Container>
    </section>
  );
}
