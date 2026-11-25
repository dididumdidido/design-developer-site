import fs from "node:fs";
import path from "node:path";

import { marked } from "marked";

/**
 * Blog posts live in /content/blog as Markdown files.
 * To add a post: create content/blog/your-post-slug.md with this header:
 *
 * ---
 * title: "Your title"
 * description: "One or two sentences for Google (about 150 characters)."
 * date: "2026-12-01"
 * author: "Adina Call"
 * tags: ["Digital employees"]
 * draft: false        (optional: true hides the post)
 * ---
 *
 * The file name becomes the URL: /blog/your-post-slug
 */

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  draft: boolean;
  html: string;
  readingMinutes: number;
};

const DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {} as Record<string, unknown>, body: raw };
  const data: Record<string, unknown> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      data[key] = val
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      val = val.replace(/^["']|["']$/g, "");
      data[key] = val === "true" ? true : val === "false" ? false : val;
    }
  }
  return { data, body: m[2] };
}

function load(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, body } = parseFrontmatter(raw);
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? file),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? "Adina Call"),
    tags: (data.tags as string[]) ?? [],
    draft: data.draft === true,
    html: marked.parse(body, { async: false }) as string,
    readingMinutes: Math.max(1, Math.round(words / 230)),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(load)
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function formatDate(d: string) {
  const dt = new Date(`${d}T12:00:00`);
  return isNaN(dt.getTime()) ? d : dt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
