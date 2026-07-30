"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: [0.4, 0, 0.2, 1] }}
      className={clsx("group relative overflow-hidden", containerClassName)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={clsx(
          "object-cover transition-transform duration-700 ease-premium group-hover:scale-110",
          imageClassName
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-flora-black/0 transition-colors duration-500 ease-premium group-hover:bg-flora-black/40">
        <Expand
          className="h-8 w-8 text-flora-white opacity-0 scale-75 transition-all duration-500 ease-premium group-hover:opacity-100 group-hover:scale-100"
          strokeWidth={1.5}
        />
      </div>
    </motion.div>
  );
}