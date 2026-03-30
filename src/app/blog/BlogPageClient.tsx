"use client";

import { useState, useMemo } from "react";
import type { BlogMeta } from "@/lib/blog-types";
import { BlogPostListItem } from "@/components/blog/BlogPostListItem";

interface BlogPageClientProps {
  posts: BlogMeta[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach((p) => {
      const cat = p.category || p.tags?.[0] || "Other";
      cats.add(cat);
    });
    return ["All", ...Array.from(cats).sort()];
  }, [posts]);

  const [activeCat, setActiveCat] = useState("All");
  const filtered =
    activeCat === "All"
      ? posts
      : posts.filter((p) => {
          const cat = p.category || p.tags?.[0] || "Other";
          return cat === activeCat;
        });

  return (
    <div className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="font-heading text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
          Blog
        </h1>
        <p className="mt-2 font-sans text-[15px] font-light text-muted-foreground">
          Thoughts on building products, writing code, and everything in between.
        </p>
      </div>

      {/* Category Tabs */}
      {categories.length > 1 && (
        <div
          className="mb-12 flex gap-0 border-b border-border"
          role="tablist"
          aria-label="Filter posts by category"
        >
          {categories.map((c) => {
            const isActive = activeCat === c;
            const count =
              c === "All"
                ? posts.length
                : posts.filter((p) => {
                    const cat = p.category || p.tags?.[0] || "Other";
                    return cat === c;
                  }).length;
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCat(c)}
                className={`font-mono border-b-2 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                  isActive
                    ? "border-accent text-accent font-bold"
                    : "border-transparent text-tertiary-foreground hover:text-muted-foreground"
                }`}
              >
                {c}
                <span
                  className={`ml-1.5 font-mono text-[10px] opacity-60 ${
                    isActive ? "text-accent" : "text-tertiary-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Post List */}
      <div>
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            No posts yet.
          </p>
        ) : (
          filtered.map((post) => (
            <BlogPostListItem key={post.slug} post={post} />
          ))
        )}
      </div>
    </div>
  );
}
