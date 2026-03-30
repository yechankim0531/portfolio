import Link from "next/link";
import type { BlogMeta } from "@/lib/blog-types";
import { formatBlogDate } from "@/lib/blog-format";

function truncateExcerpt(post: BlogMeta): string {
  const excerpt = post.excerpt || post.subtitle || "";
  if (!excerpt) return "";
  return excerpt.length > 90 ? `${excerpt.substring(0, 90)}...` : excerpt;
}

interface BlogPostListItemProps {
  post: BlogMeta;
  /** Home preview only — clearer borders; `/blog` uses default. */
  variant?: "default" | "preview";
}

export function BlogPostListItem({ post, variant = "default" }: BlogPostListItemProps) {
  const displayExcerpt = truncateExcerpt(post);
  const cat = post.category || post.tags?.[0] || "Other";

  const articleClass =
    variant === "preview"
      ? "group relative grid cursor-pointer grid-cols-1 gap-4 px-4 py-5 transition-colors hover:bg-background-tertiary/70 sm:grid-cols-[1fr_120px] sm:gap-5 sm:px-5 sm:py-6"
      : "group relative grid grid-cols-1 gap-4 border-b border-border py-5 transition-colors hover:bg-background-tertiary/80 sm:grid-cols-[1fr_120px_90px] sm:gap-5 sm:py-6";

  const titleClass =
    "font-heading text-lg font-normal leading-snug text-foreground transition-colors group-hover:text-accent";

  return (
    <article className={articleClass}>
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10"
        aria-label={post.title}
      />
      <div className="min-w-0">
        <h3 className={titleClass}>
          {post.title}
        </h3>
        {displayExcerpt && (
          <p className="mt-1.5 line-clamp-2 font-sans text-[13px] font-light leading-relaxed text-tertiary-foreground">
            {displayExcerpt}
          </p>
        )}
      </div>
      <span className="font-mono text-xs text-tertiary-foreground sm:place-self-center">
        {formatBlogDate(post.date)}
      </span>
      {variant === "default" && (
        <span className="font-mono inline-flex w-fit rounded border border-border px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:place-self-center">
          {cat}
        </span>
      )}
    </article>
  );
}
