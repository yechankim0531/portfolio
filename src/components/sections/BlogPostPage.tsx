import Link from "next/link";
import type { BlogFrontmatter } from "@/lib/blog-types";
import { parseFrontmatterDate } from "@/lib/date-utils";

interface BlogPostPageProps {
  frontmatter: BlogFrontmatter;
  children: React.ReactNode;
}

export default function BlogPostPage({ frontmatter, children }: BlogPostPageProps) {
  const { title, subtitle, date, tags } = frontmatter;

  const formattedDate = parseFrontmatterDate(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      

      <Link
        href="/blog"
        className="mb-8 inline-block font-mono text-xs text-tertiary-foreground transition-colors hover:text-accent xl:hidden"
      >
        ← Back to Blog
      </Link>

      <div className="mb-4 font-mono text-[0.75rem] font-medium uppercase tracking-[0.18em] text-tertiary-foreground">
        {formattedDate}
      </div>

      <h1 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}

      {tags?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-lg border border-border/70 bg-[color:var(--background-secondary)] px-3 py-1 text-[0.7rem] text-tertiary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="my-10 h-px bg-border/40" />

      <article className="prose-none">{children}</article>
    </div>
  );
}