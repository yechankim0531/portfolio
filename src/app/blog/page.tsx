import { getAllPosts } from "@/lib/blog";
import BlogPageClient from "@/app/blog/BlogPageClient";

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogPageClient posts={posts} />;
}
