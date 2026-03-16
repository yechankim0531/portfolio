export interface Project {
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "TaskFlow — Project Management App",
    description:
      "A real-time collaborative task manager with drag-and-drop boards, team workspaces, and analytics dashboards.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevLog — Developer Blog Platform",
    description:
      "A minimal blogging platform with MDX support, syntax highlighting, and a built-in newsletter system.",
    tags: ["React", "Node.js", "MDX", "Redis"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "WeatherKit — CLI Weather Tool",
    description:
      "A beautiful terminal weather app with animated forecasts, location detection, and configurable themes.",
    tags: ["Python", "Rich", "REST API"],
    featured: false,
    githubUrl: "#",
  },
  {
    title: "Snippets — Code Sharing Tool",
    description:
      "A fast, anonymous code snippet sharing tool with syntax highlighting for 50+ languages and expiring links.",
    tags: ["SvelteKit", "Cloudflare Workers", "KV"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
];

