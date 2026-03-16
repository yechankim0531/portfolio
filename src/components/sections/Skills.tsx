import { SectionFadeIn } from "./SectionFadeIn";
import { skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <SectionFadeIn>
      <section className="py-16">
        <div className="space-y-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
            Skills
          </p>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl text-foreground">
              Tech stack
            </h2>
            <p className="max-w-xl text-[0.88rem] leading-relaxed text-muted-foreground">
              The tools and technologies I reach for most often when designing,
              building, and shipping products for the web.
            </p>
          </div>

          <div className="mt-4 grid gap-8 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.name} className="space-y-3">
                <div className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-tertiary-foreground">
                  {group.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/70 bg-card px-3.5 py-1.5 text-[0.8rem] text-muted-foreground transition-colors duration-150 hover:border-accent hover:bg-[color:var(--accent-soft)] hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionFadeIn>
  );
}

