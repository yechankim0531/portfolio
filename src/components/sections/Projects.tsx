import { ProjectCard } from "../ui/ProjectCard";
import type { ProjectMeta } from "@/lib/projects";

interface ProjectsProps {
  projects: ProjectMeta[];
  title?: string;
}

export default function Projects({ projects, title = "Featured work" }: ProjectsProps) {
  return (
      <section id="projects" className="py-16">
        <div className="space-y-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Projects
          </p>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl text-foreground">{title}</h2>
            <p className="max-w-xl text-[0.88rem] leading-relaxed text-muted-foreground">
              Projects that I have worked on personally or academically.
            </p>
          </div>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
  );
}

