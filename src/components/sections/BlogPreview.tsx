import Link from "next/link";
import type { BlogMeta } from "@/lib/blog-types";
import { BlogPostListItem } from "@/components/blog/BlogPostListItem";

interface BlogPreviewProps {
  posts: BlogMeta[];
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="py-16">
      <div className="space-y-6">
        <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
          Blog
        </p>
        <div className="space-y-3">
          <h2 className="font-heading text-3xl text-foreground">
            Recent writing
          </h2>
          <p className="max-w-xl text-[0.88rem] leading-relaxed text-muted-foreground">
            Notes on building products, designing interfaces, and maintaining
            healthy engineering systems over time.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="mt-4 py-8 text-[0.88rem] text-muted-foreground">
            No posts yet. Add MDX files under{" "}
            <code className="font-mono text-[0.8rem] text-foreground">
              content/blog
            </code>
            .
          </p>
        ) : (
          <div className="mt-6 space-y-0">
            {/* Extra top line so the preview block is clearly separated from the intro copy */}
            <div className="h-px w-full bg-border/70" aria-hidden />
            <div className="mt-4 overflow-hidden rounded-lg border border-border/80 bg-[color:var(--background-secondary)]/35 shadow-[0_1px_0_rgba(0,0,0,0.03)] divide-y divide-border/80">
              {posts.map((post) => (
                <BlogPostListItem key={post.slug} post={post} variant="preview" />
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center pt-2">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-transparent px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-150 hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
}
