interface BlogCardProps {
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tag: string;
}

export function BlogCard({
  title,
  date,
  readingTime,
  excerpt,
  tag,
}: BlogCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border/70 bg-card px-6 py-6 shadow-[0_14px_30px_rgba(0,0,0,0.03)] transition-transform transition-shadow duration-150 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 text-[0.72rem] text-tertiary-foreground">
        <span>{date}</span>
        <span className="h-1 w-1 rounded-full bg-tertiary-foreground/70" />
        <span>{readingTime}</span>
      </div>

      <h3 className="mt-3 text-[1rem] font-medium leading-snug text-foreground">
        {title}
      </h3>

      <p className="mt-3 text-[0.8rem] leading-relaxed text-muted-foreground">
        {excerpt}
      </p>

      <span className="mt-4 inline-flex w-fit rounded-full border border-accent/30 bg-[color:var(--accent-soft)] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-accent">
        {tag}
      </span>
    </article>
  );
}

