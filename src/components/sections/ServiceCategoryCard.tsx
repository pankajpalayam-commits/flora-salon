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
}

export function ServiceCategoryCard({ category, index }: ServiceCategoryCardProps) {
  const Icon = categoryIcons[category.slug] ?? Scissors;
  const message = "Hi, I would like to know more about " + category.title;
  const whatsappHref = siteConfig.social.whatsapp + "?text=" + encodeURIComponent(message);

  return (
    <Card className="bg-flora-grey-light border-none shadow-none p-8">
      <p className="text-xs font-medium text-flora-gold mb-4">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="text-h3 font-display mb-3">{category.title}</h3>
      <p className="text-sm text-flora-grey-dark/80 mb-8">
        {category.description}
      </p>
      <div className="flex items-center justify-between">
        <Icon
          className="h-8 w-8 text-flora-gold group-hover:animate-spin-once"
          strokeWidth={1.5}
        />
        
         />
        
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-flora-black hover:text-flora-gold"
          aria-label={"Ask about " + category.title + " on WhatsApp"}
        >
          Learn More &rarr;
        </a>
      </div>
    </Card>
  );
}
