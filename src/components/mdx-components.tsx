import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-heading mt-10 mb-4 text-3xl tracking-tight text-foreground sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-heading mt-8 mb-3 text-2xl tracking-tight text-foreground sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 mb-2 text-lg font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-5 leading-[1.8] text-muted-foreground">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-accent underline underline-offset-2 transition-colors duration-150 hover:text-[color:var(--accent-hover)]"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mb-5 ml-5 list-disc space-y-1.5 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-5 ml-5 list-decimal space-y-1.5 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-[1.7]">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-accent pl-5 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded-md bg-[color:var(--background-secondary)] px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-2xl border border-border/60 bg-[color:var(--background-secondary)] p-5 font-mono text-sm leading-relaxed text-foreground">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-border/50" />,
  img: ({ src, alt }) =>
    src ? (
      <span className="my-6 block overflow-hidden rounded-2xl border border-border/60">
        <Image
          src={src}
          alt={alt ?? ""}
          width={1200}
          height={675}
          className="w-full object-cover"
        />
      </span>
    ) : null,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
};
