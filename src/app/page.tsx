import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";
import { getAllProjects } from "@/lib/projects";
import { getRecentPosts } from "@/lib/blog";
import { siteConfig } from "@/data/siteConfig";

const HOME_PROJECT_SLUGS = ["HoosTogether", "sqlagent"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yechan Kim",
  url: siteConfig.url,
  jobTitle: "Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Virginia",
  },
  sameAs: [
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
  ],
  knowsAbout: ["Software Engineering", "Artificial Intelligence", "Economics", "Product Management", "Entrepreneurship"],
};

export default function HomePage() {
  const allProjects = getAllProjects();
  const homeProjects = allProjects.filter((project) =>
    HOME_PROJECT_SLUGS.includes(project.slug),
  );
  const homeBlogPosts = getRecentPosts(3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <hr className="border-t border-border/70" />
        <About />
        <hr className="border-t border-border/70" />
        <Projects projects={homeProjects} />
        <hr className="border-t border-border/70" />
        <BlogPreview posts={homeBlogPosts} />
        <hr className="border-t border-border/70" />
        <Contact />
      </div>
    </>
  );
}


