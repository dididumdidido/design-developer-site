import type { MetadataRoute } from "next";

const base = "https://www.design-developer.com";
const paths = ["/", "/digital-employees", "/how-it-works", "/results", "/about", "/book", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
