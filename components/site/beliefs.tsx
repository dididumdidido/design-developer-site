import { Container } from "@/components/site/shared";
import { beliefs } from "@/lib/content";

export function Beliefs() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="bg-holo-panel rounded-2xl px-7 py-12 sm:px-12 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="display text-3xl leading-tight sm:text-[2.6rem]">{beliefs.title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">{beliefs.body}</p>
            </div>
            <ul className="space-y-4">
              {beliefs.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 font-display text-xl leading-snug text-ink">
                  <span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
