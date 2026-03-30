"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "../ui/ProjectCard";
import type { ProjectMeta } from "@/lib/projects";

interface ProjectsProps {
  projects: ProjectMeta[];
  title?: string;
  subtitle?: string;
  variant?: "section" | "page";
}

export default function Projects({
  projects,
  title = "Featured work",
  subtitle,
  variant = "section",
}: ProjectsProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const defaultSubtitle =
    variant === "page"
      ? "Things I've built, broken, and learned from."
      : "Projects that I have worked on personally or academically.";

  const finalSubtitle = subtitle ?? defaultSubtitle;

  return (
    <section
      id="projects"
      className={variant === "page" ? "px-6 pb-20 pt-10" : "py-16"}
    >
      <div className={variant === "page" ? "mb-12" : "space-y-6"}>
        {variant === "page" ? (
          <>
            <h1
              className="font-heading text-[42px] font-normal mb-2 tracking-tight"
              style={{ letterSpacing: -0.5 }}
            >
              {title}
            </h1>
            <p className="text-[15px] text-muted-foreground font-light m-0">
              {finalSubtitle}
            </p>
          </>
        ) : (
          <>
            <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Projects
            </p>
            <div className="space-y-3">
              <h2 className="font-heading text-3xl text-foreground">{title}</h2>
              <p className="max-w-xl text-[0.88rem] leading-relaxed text-muted-foreground">
                {finalSubtitle}
              </p>
            </div>
          </>
        )}
      </div>

      <div
        className={
          variant === "page"
            ? "grid grid-cols-1 md:grid-cols-2 gap-4"
            : "mt-4 grid gap-6 md:grid-cols-2"
        }
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            isHovered={hoveredSlug === project.slug}
            onMouseEnter={() => setHoveredSlug(project.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          />
        ))}
      </div>

      {variant === "section" && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-transparent px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-150 hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            See more
          </Link>
        </div>
      )}
    </section>
  );
}
