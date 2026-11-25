import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/site/cta-band";
import { PageShell } from "@/components/site/page-shell";
import { Container } from "@/components/site/shared";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { founderPhoto, site } from "@/lib/content";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: `${post.title} | Design Developer`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: { type: "article", title: post.title, description: post.description, url, publishedTime: post.date, authors: [post.author] },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/icon.png` } },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    image: `${site.url}/opengraph-image.png`,
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="bg-holo-soft pb-10 pt-10 sm:pt-14 lg:pb-14 lg:pt-16">
          <Container className="max-w-3xl">
            <a href="/blog" className="inline-block py-3 text-[15px] font-semibold text-primary hover:underline">
              Blog
            </a>
            <h1 className="display mt-2 text-[2.2rem] leading-[1.08] sm:text-5xl">{post.title}</h1>
            <div className="mt-6 flex items-center gap-3">
              <Image src={founderPhoto.src} alt="" width={44} height={44} className="size-11 rounded-full border border-border object-cover" />
              <p className="text-[15px] leading-snug text-body">
                <span className="block font-semibold text-ink">{post.author}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
              </p>
            </div>
          </Container>
        </header>
        <Container className="max-w-3xl py-12 lg:py-16">
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </article>

      {others.length > 0 && (
        <section className="border-t border-border py-14">
          <Container className="max-w-3xl">
            <h2 className="display text-2xl">Keep reading</h2>
            <ul className="mt-6 space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <a href={`/blog/${o.slug}`} className="block py-3 font-display text-xl text-ink hover:text-primary">
                    {o.title}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
      <CtaBand />
    </PageShell>
  );
}
