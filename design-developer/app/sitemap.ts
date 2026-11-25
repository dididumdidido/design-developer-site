import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";

const base = "https://www.design-developer.com";
const paths = ["/", "/digital-employees", "/how-it-works", "/pricing", "/results", "/about", "/blog", "/book", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
  const posts = getAllPosts().map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(`${p.date}T12:00:00`) }));
  return [...pages, ...posts];
}
