export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML / CSS"],
  },
  {
    name: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "PostgreSQL"],
  },
  {
    name: "Other",
    skills: ["REST APIs", "GraphQL", "CI/CD", "Testing", "Agile"],
  },
];

