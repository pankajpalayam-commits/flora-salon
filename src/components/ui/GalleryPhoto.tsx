"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface GalleryPhotoProps {
  src: string;
  alt: string;
  sizes: string;
  containerClassName: string; // controls aspect ratio, height, rounding
  imageClassName?: string; // e.g. "object-top" for face-forward crops
  delay?: number;
}

export function GalleryPhoto({
  src,
  alt,
  sizes,
  containerClassName,
  imageClassName,
  delay = 0,
}: GalleryPhotoProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={clsx("group relative overflow-hidden bg-flora-grey-light", containerClassName)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={clsx(
          "object-cover transition-transform duration-700 ease-premium group-hover:scale-105",
          imageClassName
        )}
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-flora-black/70 to-transparent p-4 text-sm text-flora-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {alt}
      </figcaption>
    </motion.figure>
  );
}
