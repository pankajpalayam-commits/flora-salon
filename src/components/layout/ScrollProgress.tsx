"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gold bar along the top edge showing how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-flora-gold-deep via-flora-gold to-flora-gold-glint shadow-[0_0_10px_rgb(212_175_55/0.8)]"
    />
  );
}
