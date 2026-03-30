import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogMeta, BlogPost } from "./blog-types";
import { parseFrontmatterDate } from "./date-utils";

export type { BlogFrontmatter, BlogMeta, BlogPost } from "./blog-types";
export { formatBlogDate } from "./blog-format";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...(data as BlogFrontmatter),
    slug,
    content,
  };
}

export function getAllPosts(): BlogMeta[] {
  return getBlogSlugs()
    .map((slug) => {
      const { content: _content, ...meta } = getPost(slug);
      return meta;
    })
    .sort(
      (a, b) =>
        parseFrontmatterDate(b.date).getTime() -
        parseFrontmatterDate(a.date).getTime(),
    );
}

/** Newest posts first (same order as `getAllPosts`). */
export function getRecentPosts(limit: number): BlogMeta[] {
  return getAllPosts().slice(0, Math.max(0, limit));
}

/** Pick posts by slug in the order given (for home preview). Skips missing slugs. */
export function getPostsBySlugs(slugs: string[]): BlogMeta[] {
  const all = getAllPosts();
  const bySlug = new Map(all.map((p) => [p.slug, p]));
  return slugs.map((s) => bySlug.get(s)).filter((p): p is BlogMeta => p != null);
}
