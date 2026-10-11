"use client";

import { MotionConfig } from "framer-motion";

/**
 * Makes every Framer Motion animation on the site honour the visitor's
 * "reduce motion" OS setting. CSS animations are handled in globals.css.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
