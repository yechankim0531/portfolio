import { SectionFadeIn } from "./SectionFadeIn";
import { BlogCard } from "../ui/BlogCard";

const posts = [
  {
    title: "Designing calmer developer dashboards",
    date: "Feb 2025",
    readingTime: "8 min read",
    excerpt:
      "Exploring patterns for dashboards that surface the right signals without overwhelming you with noise.",
    tag: "Product thinking",
  },
  {
    title: "Shipping fast without breaking everything",
    date: "Jan 2025",
    readingTime: "6 min read",
    excerpt:
      "A lightweight toolkit for balancing speed and stability when you&apos;re iterating on web products.",
    tag: "Engineering",
  },
  {
    title: "Building a personal design system in code",
    date: "Dec 2024",
    readingTime: "7 min read",
    excerpt:
      "How I&apos;m approaching tokens, theming, and reusable primitives in my own projects.",
    tag: "Design systems",
  },
] as const;

export default function BlogPreview() {
  return (
    <SectionFadeIn>
      <section className="py-16">
        <div className="space-y-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Blog
          </p>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl text-foreground">
              Recent writing
            </h2>
            <p className="max-w-xl text-[0.88rem] leading-relaxed text-muted-foreground">
              Notes on building products, designing interfaces, and maintaining
              healthy engineering systems over time.
            </p>
          </div>

          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>
    </SectionFadeIn>
  );
}

