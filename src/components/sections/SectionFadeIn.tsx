"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface SectionFadeInProps {
  delay?: number;
}

export function SectionFadeIn({
  children,
  delay = 0,
}: PropsWithChildren<SectionFadeInProps>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}

