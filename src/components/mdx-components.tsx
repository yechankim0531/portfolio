import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import React from "react";

function SmallImg({ src, alt, caption, width = 220 }: { src: string; alt?: string; caption?: string; width?: number }) {
  return (
    <span style={{ display: "inline-block", width, flexShrink: 0 }}>
      <span className="block overflow-hidden rounded-2xl border border-border/60">
        <Image src={src} alt={alt ?? ""} width={600} height={900} className="w-full object-cover" />
      </span>
      {caption && (
        <span style={{ display: "block", marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--muted-foreground)", lineHeight: 1.4 }}>
          {caption}
        </span>
      )}
    </span>
  );
}

function Figure({ src, alt, caption }: { src: string; alt?: string; caption?: string }) {
  return (
    <span style={{ display: "block", marginBottom: "1.5rem" }}>
      <span className="block overflow-hidden rounded-2xl border border-border/60">
        <Image src={src} alt={alt ?? ""} width={1200} height={675} className="w-full object-cover" />
      </span>
      {caption && (
        <span style={{ display: "block", marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--muted-foreground)", lineHeight: 1.4 }}>
          {caption}
        </span>
      )}
    </span>
  );
}

function ImageRow({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
        {children}
      </div>
      {caption && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--muted-foreground)", lineHeight: 1.4 }}>
          {caption}
        </p>
      )}
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  SmallImg,
  ImageRow,
  Figure,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm text-muted-foreground">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-border/60 text-foreground">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-border/40 last:border-0">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="py-2 pr-6 text-left text-xs font-semibold uppercase tracking-wide text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-2 pr-6 leading-snug">{children}</td>
  ),
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
  img: ({ src, alt, style, ...props }) =>
    src ? (
      <span className="my-6 block overflow-hidden rounded-2xl border border-border/60" style={style as React.CSSProperties}>
        <Image
          src={src}
          alt={alt ?? ""}
          width={1200}
          height={675}
          className="w-full object-cover"
          {...props}
        />
      </span>
    ) : null,
  figcaption: ({ children }) => (
    <figcaption className="mt-2 text-xs leading-snug text-muted-foreground">
      {children}
    </figcaption>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
};
