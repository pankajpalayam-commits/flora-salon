"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scissors,
  Palette,
  Droplet,
  Heart,
  Smile,
  Flame,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ServiceCategory } from "@/lib/data/service-categories";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";

const categoryIcons: Record<string, LucideIcon> = {
  "haircuts-styling": Scissors,
  "hair-color": Palette,
  "hair-scalp-treatments": Droplet,
  "bridal-event-styling": Heart,
  "skin-facial-treatments": Smile,
  "waxing-threading": Flame,
  "family-salon": Users,
};

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  index: number;
  linkMode?: "internal" | "whatsapp";
  delay?: number;
}

export function ServiceCategoryCard({ category, index, linkMode = "internal", delay = 0 }: ServiceCategoryCardProps) {
  const Icon = categoryIcons[category.slug] ?? Scissors;
  const message = "Hi, I would like to know more about " + category.title;
  const whatsappHref = siteConfig.social.whatsapp + "?text=" + encodeURIComponent(message);
  const linkLabel = linkMode === "whatsapp" ? "Ask about " + category.title + " on WhatsApp" : "Learn more about " + category.title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className="bg-flora-grey-light border-none shadow-none p-8 hover:scale-110 hover:shadow-xl hover:border-flora-gold/30">
        <p className="text-xs font-medium text-flora-gold mb-4">{String(index).padStart(2, "0")}</p>
        <h3 className="text-h3 font-display mb-3">{category.title}</h3>
        <p className="text-sm text-flora-grey-dark/80 mb-8">{category.description}</p>
        <div className="flex items-center justify-between">
          <Icon className="h-8 w-8 text-flora-gold group-hover:animate-spin-once" strokeWidth={1.5} />
          {linkMode === "whatsapp" ? (
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-flora-black hover:text-flora-gold" aria-label={linkLabel}>Learn More &rarr;</a>
          ) : (
            <Link href={category.href} className="text-sm font-medium text-flora-black hover:text-flora-gold" aria-label={linkLabel}>Learn More &rarr;</Link>
          )}
        </div>
      </Card>
    </motion.div>
  );
}