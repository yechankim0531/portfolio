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
    role,
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
        {role && (
          <>
            <span className="text-border">·</span>
            <span>{role}</span>
          </>
        )}
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
              className="transition-colors duration-150 hover:text-[color:var(--accent-hover)]"
            >
              Source code ↗
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
