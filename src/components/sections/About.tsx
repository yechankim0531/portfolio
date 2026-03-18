import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
      <section className="py-16">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start">
              <div className="relative overflow-hidden rounded-2xl bg-[color:var(--background-secondary)] px-6 py-10 text-center text-sm text-muted-foreground md:px-8">
                <div className="mx-auto flex h-56 max-w-xs items-center justify-center overflow-hidden rounded-xl border border-dashed border-border/70">
                  <Image
                    src="/images/yechan_barcelona.jpeg"
                    alt="Portrait of Yechan Kim"
                    width={320}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                <p>
                  I'm an inventor at heart with the skills of a software engineer and the mind of an entrepreneur. I love to build things that make a difference.
                  I see opportunities where others see problems in their daily lives.
                </p>
                <p>
                 I'm currently a fourth year student studying <strong className="text-foreground"> Computer Science </strong> 
                
                  and <strong className="text-foreground"> Economics </strong> at the <strong className="text-foreground"> University of Virginia</strong>.
                </p>
                <p>
                  Shaped by a life across Korea, Indonesia, and the U.S., I've spent my life adapting, learning, and building. 
                  I've learned to think creatively and solve problems systematically.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="/about"
              className="inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform transition-shadow duration-150 hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>Learn more</span>
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
  );
}

