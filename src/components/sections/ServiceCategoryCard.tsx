"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
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

  // The link is stretched over the whole card (after:inset-0) so the
  // entire tile is one large tap target.
  const linkClasses =
    "inline-flex items-center gap-1 text-sm font-medium text-flora-black after:absolute after:inset-0 after:rounded-2xl after:content-[''] group-hover:text-flora-gold-deep";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      <Card className="flex h-full flex-col p-7 focus-within:ring-2 focus-within:ring-flora-gold-deep">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-flora-gold-soft">
            <Icon className="h-6 w-6 text-flora-gold-deep" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="font-display text-sm italic text-flora-muted">{String(index).padStart(2, "0")}</span>
        </div>
        <h3 className="text-h3 mb-3">{category.title}</h3>
        <p className="mb-8 flex-1 text-sm text-flora-muted">{category.description}</p>
        {linkMode === "whatsapp" ? (
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={linkClasses} aria-label={linkLabel}>
            Ask on WhatsApp
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        ) : (
          <Link href={category.href} className={linkClasses} aria-label={linkLabel}>
            Learn more
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        )}
      </Card>
    </motion.div>
  );
}
