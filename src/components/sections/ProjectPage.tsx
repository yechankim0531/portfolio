"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { ProjectFrontmatter } from "@/lib/projects";

interface ProjectPageProps {
  frontmatter: ProjectFrontmatter;
  children: React.ReactNode;
}

const ease: Easing = "easeOut";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease, delay: i * 0.07 },
  }),
};

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
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          ← All projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-8"
      >
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
            {tags.map((tag) => (
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
      </motion.header>

      {/* Hero image */}
      {heroImage && (
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 overflow-hidden rounded-2xl border border-border/60"
        >
          <Image
            src={heroImage}
            alt={title}
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
        </motion.div>
      )}

      {/* Thin divider */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="my-10 h-px bg-border/40"
      />

      {/* MDX body */}
      <motion.article
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="prose-none"
      >
        {children}
      </motion.article>

      {/* Technical highlights */}
      {highlights && highlights.length > 0 && (
        <motion.section
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16"
        >
          <h2 className="font-heading mb-6 text-2xl tracking-tight text-foreground">
            Technical highlights
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                custom={6 + i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
              >
                <h3 className="mb-1.5 text-[0.9rem] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-[0.8rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
