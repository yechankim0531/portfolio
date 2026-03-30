"use client";

import Link from "next/link";
import {
  Lightbulb,
  Layers,
  Code2,
  PenTool,
  Github,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import type { ProjectMeta } from "@/lib/projects";
import { parseFrontmatterDate } from "@/lib/date-utils";

const iconMap: Record<string, LucideIcon> = {
  "AI/ML": Lightbulb,
  "Full Stack": Layers,
  Frontend: Code2,
  "QA/Testing": PenTool,
};

interface ProjectCardProps {
  project: ProjectMeta;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ProjectCard({
  project,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) {
  const category = project.category || "Full Stack";
  const Icon = iconMap[category] || Code2;

  const formattedDate = project.date
    ? parseFrontmatterDate(project.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : null;

  const cardContent = (
    <>
      <div className="flex justify-between items-start mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: "var(--accent-soft)" }}
        >
          <Icon size={18} className="text-accent" />
        </div>
        <div
          className="flex gap-2"
          onClick={(e) => e.preventDefault()}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary-foreground hover:text-foreground transition-colors duration-200 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary-foreground hover:text-foreground transition-colors duration-200 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
        <span className="font-mono text-[10px] tracking-widest uppercase text-accent font-bold">
          {category}
        </span>
        {formattedDate && (
          <>
            <span className="text-tertiary-foreground/50">·</span>
            <span className="font-mono text-[10px] tracking-wider text-tertiary-foreground">
              {formattedDate}
            </span>
          </>
        )}
      </div>

      <h3 className="text-[0.98rem] font-medium mt-0 mb-2.5 text-foreground leading-snug">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-light">
        {project.subtitle}
      </p>

      <div className="flex gap-1.5 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2.5 py-1 rounded-[3px] border border-border/60 bg-[color:var(--background-secondary)] text-muted-foreground/80"
            style={{ letterSpacing: 0.5 }}
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const cardClasses = `block rounded-lg border p-7 transition-all duration-300 cursor-pointer bg-card ${
    isHovered
      ? "border-accent -translate-y-0.5"
      : "border-border hover:border-accent hover:-translate-y-0.5"
  }`;

  if (project.slug) {
    return (
      <div
        className={`relative ${cardClasses}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${project.title}`}
        />
        {cardContent}
      </div>
    );
  }

  return (
    <div
      className={cardClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {cardContent}
    </div>
  );
}
