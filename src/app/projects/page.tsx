import Projects from "@/components/sections/Projects";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <Projects projects={projects} title="All projects" />
    </div>
  );
}

