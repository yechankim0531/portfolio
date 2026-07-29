import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPost, getBlogSlugs } from "@/lib/blog";
import BlogPostPage from "@/components/sections/BlogPostPage";
import { mdxComponents } from "@/components/mdx-components";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const post = getPost(params.slug);
    const description = post.subtitle ?? post.excerpt ?? "";
    const url = `${siteConfig.url}/blog/${post.slug}`;
    return {
      title: post.title,
      description,
      keywords: post.tags ?? [],
      authors: [{ name: "Yechan Kim", url: siteConfig.url }],
      alternates: { canonical: url },
      openGraph: {
        title: post.title,
        description,
        url,
        siteName: "Yechan Kim",
        type: "article",
        publishedTime: post.date,
        authors: ["Yechan Kim"],
        tags: post.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description,
      },
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

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.subtitle ?? post.excerpt ?? "",
    author: {
      "@type": "Person",
      name: "Yechan Kim",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: "Yechan Kim",
      url: siteConfig.url,
    },
    datePublished: post.date,
    url,
    keywords: (post.tags ?? []).join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostPage frontmatter={post}>
        <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </BlogPostPage>
    </>
  );
}
