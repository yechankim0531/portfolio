import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

interface ProjectCardProps {
  project: ProjectMeta;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_18px_40px_rgba(0,0,0,0.04)] transition-transform transition-shadow duration-150 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)]">
      {/* Stretched link covers the whole card */}
      {project.slug && (
        <Link
          href={`/projects/${project.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${project.title}`}
        />
      )}

      <div className="relative border-b border-border/60 bg-[color:var(--background-secondary)]">
        <div className="flex aspect-video items-center justify-center text-xs text-tertiary-foreground">
          Project thumbnail
        </div>
        {(
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white shadow-sm">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-4 pt-5">
        <h3 className="text-[0.98rem] font-medium text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-foreground">
          {project.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border/70 bg-[color:var(--background-secondary)] px-3 py-1 text-[0.7rem] text-tertiary-foreground transition-colors duration-150 group-hover:border-accent/50 group-hover:text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {(project.liveUrl || project.githubUrl) && (
        <div className="relative z-20 flex items-center justify-between border-t border-border/60 px-5 py-3 text-[0.75rem] font-medium text-accent">
          <div className="flex gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:text-[color:var(--accent-hover)]"
              >
                Live demo ↗
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:text-[color:var(--accent-hover)]"
              >
                Source code ↗
              </Link>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
