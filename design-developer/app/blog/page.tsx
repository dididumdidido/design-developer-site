import type { Metadata } from "next";

import { CtaBand } from "@/components/site/cta-band";
import { PageHeader } from "@/components/site/page-header";
import { PageShell } from "@/components/site/page-shell";
import { Container } from "@/components/site/shared";
import { formatDate, getAllPosts } from "@/lib/blog";

const title = "Blog: Digital Employees, AI and Business Operations | Design Developer";
const description = "Practical posts on digital employees, KPIs, AI for business and productivity, from founder Adina Call.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/blog" }, openGraph: { title, description, url: "/blog" } };

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <PageShell>
      <PageHeader title="Blog" subtitle="Digital employees, AI as support, and running a business that doesn't run you." />
      <section className="py-14 lg:py-20">
        <Container>
          {posts.length === 0 ? (
            <p className="text-lg text-soft">New posts are on the way.</p>
          ) : (
            <ul className="divide-y divide-border border-y border-border">
              {posts.map((p) => (
                <li key={p.slug}>
                  <a href={`/blog/${p.slug}`} className="group grid gap-3 py-8 md:grid-cols-[200px_1fr] md:gap-10">
                    <p className="text-[14px] text-soft">
                      <time dateTime={p.date}>{formatDate(p.date)}</time>
                      <span className="mx-2" aria-hidden>·</span>
                      {p.readingMinutes} min read
                    </p>
                    <div>
                      <h2 className="display text-2xl leading-snug group-hover:text-accent-ink sm:text-[1.75rem]">{p.title}</h2>
                      <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-soft">{p.description}</p>
                      <p className="mt-3 text-[15px] font-semibold text-accent-ink">Read the post</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
      <CtaBand />
    </PageShell>
  );
}
