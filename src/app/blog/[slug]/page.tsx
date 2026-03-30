import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getBlogSlugs } from "@/lib/blog";
import BlogPostPage from "@/components/sections/BlogPostPage";
import { mdxComponents } from "@/components/mdx-components";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const post = getPost(params.slug);
    return {
      title: post.title,
      description: post.subtitle ?? post.excerpt,
    };
  } catch {
    return {};
  }
}

export default function BlogSlugPage({ params }: PageProps) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <BlogPostPage frontmatter={post}>
      <MDXRemote source={post.content} components={mdxComponents} />
    </BlogPostPage>
  );
}
