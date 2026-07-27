"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface AnimatedDividerProps {
  align?: "left" | "center";
  className?: string;
}

/**
 * Signature brand motif — a thin gold hairline that draws itself as it
 * enters the viewport. Used under section eyebrows and between service
 * categories. This is intentionally the one recurring animated flourish
 * on the site; everything else stays quiet by comparison.
 */
export function AnimatedDivider({
  align = "left",
  className,
}: AnimatedDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={clsx(
        "h-px w-16 bg-flora-gold origin-left",
        align === "center" && "mx-auto origin-center",
        className
      )}
    />
  );
}
