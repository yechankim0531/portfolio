import { SectionFadeIn } from "./SectionFadeIn";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";

export default function Projects() {
  return (
    <SectionFadeIn>
      <section id="projects" className="py-16">
        <div className="space-y-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Projects
          </p>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl text-foreground">
              Selected work
            </h2>
            <p className="max-w-xl text-[0.88rem] leading-relaxed text-muted-foreground">
              A handful of products, experiments, and tools that explore how
              thoughtful design and engineering can make the web feel calmer and
              more human.
            </p>
          </div>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </SectionFadeIn>
  );
}

