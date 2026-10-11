"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  /** Extra delay before the first word, in seconds. */
  delay?: number;
}

/**
 * Words rise into place one after another as the heading scrolls into
 * view. The text appears once in the HTML (no hidden duplicate), so
 * search engines and AI crawlers read a normal heading.
 */
export function RevealText({ text, delay = 0 }: RevealTextProps) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        // The space sits between the word boxes (not inside them), where
        // the browser keeps it and lines can wrap normally.
        <Fragment key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden pb-[0.12em] align-top -mb-[0.12em]">
            <motion.span
              className="inline-block"
              initial={{ y: "105%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}
