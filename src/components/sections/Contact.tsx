import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { SectionFadeIn } from "./SectionFadeIn";
import { siteConfig } from "../../data/siteConfig";

const socials = [
  { name: "GitHub", href: siteConfig.socials.github, Icon: Github },
  { name: "LinkedIn", href: siteConfig.socials.linkedin, Icon: Linkedin },
  { name: "Instagram", href: siteConfig.socials.instagram, Icon: Instagram },
] as const;

export default function Contact() {
  return (
    <SectionFadeIn>
      <section id="contact" className="py-16">
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-[color:var(--background-secondary)] px-6 py-10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="font-heading text-3xl text-foreground">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
              Have a project in mind, or just want to say hello? I&apos;m always
              happy to talk about thoughtful products, developer experience, and
              what you&apos;re building next.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-xl border border-border/70 bg-card/60 px-4 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent/40 hover:bg-[color:var(--accent-soft)] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <span>{siteConfig.email}</span>
            </a>

            <div className="mt-7 flex items-center justify-center gap-3">
              {socials.map(({ name, href, Icon }) => (
                <Link
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-card text-muted-foreground transition-colors duration-150 hover:bg-[color:var(--accent-soft)] hover:text-accent"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionFadeIn>
  );
}

