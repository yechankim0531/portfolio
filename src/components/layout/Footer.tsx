import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

const socials = [
  { name: "GitHub", href: siteConfig.socials.github, Icon: Github },
  { name: "LinkedIn", href: siteConfig.socials.linkedin, Icon: Linkedin },
  { name: "Instagram", href: siteConfig.socials.instagram, Icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center sm:text-left">
          © 2025 {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ name, href, Icon }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

