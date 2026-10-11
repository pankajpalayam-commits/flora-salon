"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { clsx } from "clsx";

interface ParallaxProps {
  children: React.ReactNode;
  /** Max travel in px, up and down. Keep it small (20–60). */
  amount?: number;
  className?: string;
}

/** Drifts its content slightly against the scroll. Off for reduced motion. */
export function Parallax({ children, amount = 40, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <motion.div ref={ref} style={reduceMotion ? undefined : { y }} className={clsx("will-change-transform", className)}>
      {children}
    </motion.div>
  );
}
