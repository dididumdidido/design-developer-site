import { Container, SectionTitle } from "@/components/site/shared";
import { pricing } from "@/lib/content";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Side-by-side cost of the two ways to pay, computed from the tier prices. */
export function PricingCompare() {
  return (
    <section className="py-14 lg:py-20">
      <Container>
        <SectionTitle
          title="Compare the two ways to pay"
          subtitle="Same digital employee, same support. Annual costs less over a year; setup + monthly costs less up front and has no lock-in after month 3."
        />
        <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-white">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-4 font-semibold text-ink">Size</th>
                <th scope="col" className="p-4 font-semibold text-ink">Annual: first payment</th>
                <th scope="col" className="p-4 font-semibold text-ink">Setup + monthly: first payment</th>
                <th scope="col" className="p-4 font-semibold text-ink">Setup + monthly: year 1 total</th>
                <th scope="col" className="p-4 font-semibold text-ink">After year 1</th>
              </tr>
            </thead>
            <tbody>
              {pricing.tiers.map((t) => (
                <tr key={t.name} className="border-b border-border last:border-0">
                  <th scope="row" className="p-4 font-display text-lg font-semibold text-ink">
                    {t.name} <span className="font-sans text-[13px] font-medium text-soft">· {t.tools}</span>
                  </th>
                  <td className="p-4 text-ink">{usd(t.annual)}</td>
                  <td className="p-4 text-ink">{usd(t.setup)}</td>
                  <td className="p-4 text-body">{usd(t.setup + t.monthly * 9)}</td>
                  <td className="p-4 text-body">
                    {usd(t.annual)}/yr or {usd(t.monthly)}/mo
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-soft">
          Year 1 on setup + monthly = setup (covers months 1–3) + 9 monthly payments. Running costs such as AI usage and your own app
          subscriptions are billed separately by those providers. Larger teams are quoted case by case.
        </p>
      </Container>
    </section>
  );
}
