"use client";
import Link from "next/link";
import Image from "next/image";
import type { ProjectFrontmatter } from "@/lib/projects";

interface ProjectPageProps {
  frontmatter: ProjectFrontmatter;
  children: React.ReactNode;
}

export default function ProjectPage({ frontmatter, children }: ProjectPageProps) {
  const {
    title,
    subtitle,
    date,
    tags,
    liveUrl,
    githubUrl,
    heroImage,
    highlights,
  } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      

      {/* Header */}
      {/* Meta row */}
      <div className="mb-4 flex flex-wrap items-center gap-3 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-tertiary-foreground">
        <span>{formattedDate}</span>
        
      </div>

      <h1 className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}

      {/* Tags */}
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

      {/* Links */}
      {(liveUrl || githubUrl) && (
        <div className="mt-5 flex flex-wrap gap-4 text-[0.8rem] font-medium text-accent">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150 hover:text-[color:var(--accent-hover)]"
            >
              Live demo ↗
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-border/70 bg-[color:var(--background-secondary)] px-4 py-2.5 text-left transition-colors duration-150 hover:border-border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0 text-foreground"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div className="flex-1">
                <p className="text-[13px] font-medium text-foreground">
                  Explore the code
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground/60">
                  {githubUrl.replace("https://github.com/", "")}
                </p>
              </div>
              <span className="text-[15px] text-muted-foreground/40">→</span>
            </a>
          )}
        </div>
      )}

      {/* Hero image */}
      {heroImage && (
        <div className="mt-10 overflow-hidden rounded-2xl border border-border/60">
          <Image
            src={heroImage}
            alt={title}
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
        </div>
      )}

      {/* Thin divider */}
      <div className="my-10 h-px bg-border/40" />

      {/* MDX body */}
      <article className="prose-none">{children}</article>

      {/* Technical highlights */}
      {highlights && highlights.length > 0 && (
        <section className="mt-16">
          <h2 className="font-heading mb-6 text-2xl tracking-tight text-foreground">
            Technical highlights
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(
              (item: { title: string; description: string }, i: number) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border/70 bg-card p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                >
                  <h3 className="mb-1.5 text-[0.9rem] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ),
            )}
          </div>
        </section>
      )}
    </div>
  );
}
