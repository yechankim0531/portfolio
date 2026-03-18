import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export interface ProjectFrontmatter {
  title: string;
  subtitle?: string;
  date: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  heroImage?: string;
  highlights?: { title: string; description: string }[];
}

export interface ProjectMeta extends ProjectFrontmatter {
  slug: string;
}

export interface ProjectData extends ProjectMeta {
  content: string;
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getProject(slug: string): ProjectData {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...(data as ProjectFrontmatter),
    slug,
    content,
  };
}

export function getAllProjects(): ProjectMeta[] {
  return getProjectSlugs()
    .map((slug) => {
      const { content: _content, ...meta } = getProject(slug);
      return meta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
