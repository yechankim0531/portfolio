import Projects from "@/components/sections/Projects";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-5xl">
      <Projects
        projects={projects}
        title="Projects"
        subtitle="Things I've built, broken, and learned from."
        variant="page"
      />
    </div>
  );
}
