import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProject, getProjectSlugs } from "@/lib/projects";
import ProjectPage from "@/components/sections/ProjectPage";
import { mdxComponents } from "@/components/mdx-components";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const project = getProject(params.slug);
    return {
      title: project.title,
      description: project.subtitle,
    };
  } catch {
    return {};
  }
}

export default function ProjectSlugPage({ params }: PageProps) {
  let project;
  try {
    project = getProject(params.slug);
  } catch {
    notFound();
  }

  return (
    <ProjectPage frontmatter={project}>
      <MDXRemote source={project.content} components={mdxComponents} />
    </ProjectPage>
  );
}
