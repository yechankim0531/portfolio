import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import BlogPreview from "@/components/sections/BlogPreview";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { getAllProjects } from "@/lib/projects";

const HOME_PROJECT_SLUGS = ["taskflow"];

export default function HomePage() {
  const allProjects = getAllProjects();
  const homeProjects = allProjects.filter((project) =>
    HOME_PROJECT_SLUGS.includes(project.slug),
  );

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <hr className="border-t border-border/70" />
      <About />
      <hr className="border-t border-border/70" />
      <Projects projects={homeProjects} />
      <hr className="border-t border-border/70" />
      <BlogPreview />
      <hr className="border-t border-border/70" />
      <Skills />
      <hr className="border-t border-border/70" />
      <Contact />
    </div>
  );
}


