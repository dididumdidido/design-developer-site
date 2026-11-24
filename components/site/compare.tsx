import { Container, SectionTitle } from "@/components/site/shared";
import { compare } from "@/lib/content";

export function Compare() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionTitle title={compare.title} />

        {/* Phone: one card per row */}
        <div className="mt-8 space-y-3 md:hidden">
          {compare.rows.map((row) => (
            <div key={row.label} className="surface overflow-hidden">
              <p className="border-b border-border px-5 py-3 text-[15px] font-semibold text-ink">{row.label}</p>
              <dl className="divide-y divide-border text-[15px]">
                {row.values.map((v, i) => (
                  <div key={i} className={"flex justify-between gap-4 px-5 py-3 " + (i === 0 ? "bg-tint" : "")}>
                    <dt className={i === 0 ? "font-semibold text-primary" : "text-soft"}>{compare.columns[i]}</dt>
                    <dd className={"text-right " + (i === 0 ? "font-medium text-ink" : "text-soft")}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* Tablet and desktop: table */}
        <div className="mt-10 hidden overflow-hidden rounded-xl border border-border bg-white md:block">
          <table className="w-full text-left text-[15px]">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-5 font-medium text-soft">
                  <span className="sr-only">Compare</span>
                </th>
                {compare.columns.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={i === 0 ? "bg-tint p-5 font-semibold text-primary" : "p-5 font-semibold text-ink"}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <th scope="row" className="p-5 font-medium text-ink">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td key={i} className={i === 0 ? "bg-tint p-5 font-medium text-ink" : "p-5 text-soft"}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
