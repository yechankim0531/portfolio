export interface BlogFrontmatter {
  title: string;
  subtitle?: string;
  date: string;
  tags: string[];
  category?: string;
  excerpt?: string;
  readingTime?: string;
}

export interface BlogMeta extends BlogFrontmatter {
  slug: string;
}

export interface BlogPost extends BlogMeta {
  content: string;
}
