"use client";
 
import { motion } from "framer-motion";
 
const fade = (delay: number = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay },
});
 
export default function AboutA() {
  return (
    <article className="pb-28 pt-32">
      {/* ── Page header ── */}
      <header className="mx-auto max-w-2xl text-center">
        <motion.p
          {...fade()}
          className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground/50"
        >
          About
        </motion.p>
        <motion.h1
          {...fade(0.05)}
          className="font-heading mt-4 text-4xl tracking-tight text-foreground sm:text-5xl"
          style={{ lineHeight: 1.1 }}
        >
          The story so far
        </motion.h1>
        <motion.div
          {...fade(0.1)}
          className="mx-auto mt-6 h-px w-12 bg-border/60"
        />
      </header>
 
      {/* ── Profile photo ── */}
      <motion.div
        {...fade(0.15)}
        className="mx-auto mt-14 max-w-xs overflow-hidden rounded-2xl"
      >
        <img
          src="/images/yechan_barcelona.jpeg"
          alt="Portrait of Yechan Kim"
          className="h-72 w-full object-cover"
        />
      </motion.div>
 
      {/* ── Section 1: My Story ── */}
      <section className="mx-auto mt-20 max-w-2xl">
        <motion.h2
          {...fade()}
          className="font-heading text-2xl tracking-tight text-foreground sm:text-3xl"
          style={{ fontStyle: "italic" }}
        >
          My Story
        </motion.h2>
        <motion.p
          {...fade(0.03)}
          className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-accent"
        >
          01
        </motion.p>
 
        <motion.div
          {...fade(0.08)}
          className="mt-8 space-y-5 text-[0.98rem] leading-[1.75] text-muted-foreground md:text-[1.05rem]"
        >
          <p>
            I moved every three years growing up in Georgia, Jakarta, Seoul,
            Virginia. Each time I had to adapt, make new friends, and reinvent
            myself. That constant change gave me a love for trying new things,
            which eventually led me to the thing I love most: creating.
          </p>
          <p>
            I&apos;ve kept an invention journal since first grade, sketching
            product ideas and solutions to everyday problems. I believe a great
            product solves a real problem in someone&apos;s daily life, and
            I&apos;ve become sharp at spotting those problems everywhere.
          </p>
          <p>
            Entrepreneurship runs in my family. My grandfather built a successful
            construction business after the Korean War. My uncle runs a startup
            today. I grew up around builders, and I always knew I&apos;d become
            one.
          </p>
          <p>
            I chose Computer Science (UVA School of Engineering) because no
            other skill lets you go from zero to a working product as fast. I
            paired it with Economics to build a mental model of how value and
            markets work — together, they give me the hands to build and the
            eyes to see what&apos;s worth building.
          </p>
        </motion.div>
      </section>
 
      <div className="mx-auto my-16 h-px w-16 bg-border/40" />
 
      {/* ── Section 2: Experience ── */}
      <section className="mx-auto max-w-2xl">
        <motion.h2
          {...fade()}
          className="font-heading text-2xl tracking-tight text-foreground sm:text-3xl"
          style={{ fontStyle: "italic" }}
        >
          Experience
        </motion.h2>
        <motion.p
          {...fade(0.03)}
          className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-accent"
        >
          02
        </motion.p>
 
        <motion.div
          {...fade(0.08)}
          className="mt-8 space-y-5 text-[0.98rem] leading-[1.75] text-muted-foreground md:text-[1.05rem]"
        >
          <p>
            I&apos;m a fourth year at UVA double majoring in CS and Economics.
            Outside class, I play club baseball, build AI solutions for local
            businesses through the Business and AI Institute, and I&apos;m
            active in Greek life.
          </p>
          <p>
            Professionally, I&apos;ve worked across the spectrum, from software
            testing and learning SDLC fundamentals at Serco, to full-stack development
            and AI data pipelines at a food-tech startup for people with
            diabetes, to building AI agents at IBM last summer. Each step got me
            closer to the intersection of engineering and product.
          </p>
          <p className="font-medium text-foreground">
            My goal isn&apos;t to be a software engineer. It&apos;s to be an
            entrepreneur who continuously invents. Software is the tool. The
            product is the point.
          </p>
        </motion.div>
      </section>
 
      <div className="mx-auto my-16 h-px w-16 bg-border/40" />
 
      {/* ── Section 3: Life & Interests ── */}
      <section className="mx-auto max-w-2xl">
        <motion.h2
          {...fade()}
          className="font-heading text-2xl tracking-tight text-foreground sm:text-3xl"
          style={{ fontStyle: "italic" }}
        >
          Life &amp; Interests
        </motion.h2>
        <motion.p
          {...fade(0.03)}
          className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-accent"
        >
          03
        </motion.p>
 
        <motion.div
          {...fade(0.08)}
          className="mt-8 space-y-5 text-[0.98rem] leading-[1.75] text-muted-foreground md:text-[1.05rem]"
        >
          <p>
            Sports have been a constant through every move and every chapter.
            Baseball was my first love, I grew up playing it and I&apos;m still
            a die hard Dodgers fan. I also love watching college football, and I&apos;m a Georgia Bulldogs fan. I haven't missed a single Goergia football game since 2017.
            These days
            I&apos;ve picked up golf and tennis.
          </p>
          <p>
            I&apos;m obsessed with food.
            I&apos;ll drive across town for a restaurant I&apos;ve never tried,
            order the most obscure thing on the menu, and chase down whatever
            niche cuisine I haven&apos;t experienced yet. Every meal is a chance
            to try something new.
          </p>
        </motion.div>
      </section>
 
      <div className="mx-auto my-16 h-px w-16 bg-border/40" />
 
      {/* ── Section 4: Resume ── */}
      <section className="mx-auto max-w-2xl text-center">
        <motion.h2
          {...fade()}
          className="font-heading text-2xl tracking-tight text-foreground sm:text-3xl"
          style={{ fontStyle: "italic" }}
        >
          Resume
        </motion.h2>
        <motion.p
          {...fade(0.03)}
          className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-accent"
        >
          04
        </motion.p>
 
        <motion.p
          {...fade(0.08)}
          className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground"
        >
          Want the full picture? See my resume below.
        </motion.p>
 
        <section className="mx-auto max-w-3xl">
  {/* Heading / copy as you already have it */}
  {/* PDF preview */}
  <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card">
    <iframe
      src="/Yechan_Kim_SWE.pdf"
      title="Resume preview"
      className="h-[600px] w-full"
    />
  </div>

</section>
      </section>
    </article>
  );
}