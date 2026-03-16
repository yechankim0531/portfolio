import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import BlogPreview from "@/components/sections/BlogPreview";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <hr className="border-t border-border/70" />
      <About />
      <hr className="border-t border-border/70" />
      <Projects />
      <hr className="border-t border-border/70" />
      <BlogPreview />
      <hr className="border-t border-border/70" />
      <Skills />
      <hr className="border-t border-border/70" />
      <Contact />
    </div>
  );
}


