"use client";
 
import { motion } from "framer-motion";
import { siteConfig } from "../../data/siteConfig";
 
export default function Hero() {
  const showOpenToWork = siteConfig.openToWork;
 
  return (
    <section className="flex min-h-[92vh] items-center justify-center px-6 pt-16 pb-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Geographic journey — quiet accent */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground/60"
        >
          Georgia → Jakarta → Seoul → Virginia
        </motion.p>
 
        {/* Name — large editorial serif */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          className="font-heading text-5xl tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ lineHeight: 1.05 }}
        >
          {/* Replace with your actual name */}
          YECHAN KIM
        </motion.h1>
 
        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="my-7 h-px w-14 bg-border/60"
        />
 
        {/* Quote — italic editorial feel */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="max-w-md text-lg italic leading-relaxed text-muted-foreground sm:text-xl md:text-[1.35rem]"
          style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
        >
          &ldquo;Ideas without action are meaningless.&rdquo;
        </motion.p>
 
        {/* Identity line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/50"
        >
          Inventor{" "}
          <span className="mx-2 text-border">/</span> Entrepreneur{" "}
          <span className="mx-2 text-border">/</span> Investor
        </motion.p>
 
        {/* Open to work badge */}
        {showOpenToWork && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-[color:var(--accent-soft)] px-4 py-1.5 text-[11px] font-medium text-accent"
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-75" />
              <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
            </span>
            <span>Open to opportunities</span>
          </motion.div>
        )}
 
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl border border-foreground/80 bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-all duration-150 hover:-translate-y-0.5 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View my work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-transparent px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-150 hover:text-foreground hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}