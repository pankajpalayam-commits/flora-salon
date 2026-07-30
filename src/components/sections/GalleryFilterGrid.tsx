"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { galleryItems } from "@/lib/data/gallery";
import type { GalleryItem } from "@/types/gallery-item";

type Category = "all" | GalleryItem["category"];

const categoryLabels: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Before & After", value: "before-after" },
  { label: "Hair Colour", value: "hair-colour" },
  { label: "Hair Botox", value: "hair-botox" },
  { label: "Keratin", value: "keratin" },
  { label: "Bridal", value: "bridal" },
  { label: "Salon", value: "salon" },
  { label: "Video", value: "video" },
];

export function GalleryFilterGrid() {
  const [category, setCategory] = useState<Category>("all");

  const filtered =
    category === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  return (
    <>
      <FilterTabs<Category>
        defaultValue="all"
        onChange={setCategory}
        options={categoryLabels}
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
            />
            {item.isVideo ? (
              <div className="absolute inset-0 flex items-center justify-center bg-flora-black/20 transition-colors duration-500 ease-premium group-hover:bg-flora-black/40">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-flora-white/90 transition-transform duration-500 ease-premium group-hover:scale-110"
                  aria-label="Play video"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-flora-black" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-flora-black/0 transition-colors duration-500 ease-premium group-hover:bg-flora-black/40">
                <Expand
                  className="h-8 w-8 text-flora-white opacity-0 scale-75 transition-all duration-500 ease-premium group-hover:opacity-100 group-hover:scale-100"
                  strokeWidth={1.5}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
}