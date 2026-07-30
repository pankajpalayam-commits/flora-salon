import Link from "next/link";
import {
  Heart,
  UserRound,
  PartyPopper,
  Scissors,
  Palette,
  Droplet,
  Sparkles,
  Wind,
  Waves,
  Smile,
  Droplets,
  Brush,
  Sun,
  Flame,
  Flower2,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types/service";
import { Card } from "@/components/ui/Card";

// Each service gets a small line-icon matching its treatment.
// Swap any of these for a different lucide-react icon if you'd like a different look:
// https://lucide.dev/icons
const serviceIcons: Record<string, LucideIcon> = {
  "bridal-makeup": Heart,
  "groom-makeup": UserRound,
  "party-makeup": PartyPopper,
  haircut: Scissors,
  "hair-colour": Palette,
  keratin: Droplet,
  "hair-botox": Sparkles,
  nanoplastia: Wind,
  "hair-spa": Waves,
  facials: Smile,
  "hydra-facial": Droplets,
  cleanup: Brush,
  detan: Sun,
  waxing: Flame,
  threading: Flower2,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = serviceIcons[service.slug] ?? Sparkles;

  return (
    <Card
      id={service.slug}
      className="scroll-mt-28 bg-flora-grey-light border-none shadow-none p-8"
    >
      <p className="text-xs font-medium text-flora-gold mb-4">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="text-h3 font-display mb-3">{service.name}</h3>
      <p className="text-sm text-flora-grey-dark/80 mb-8">
        {service.shortDescription}
      </p>
      <div className="flex items-center justify-between">
        <Icon
          className="h-8 w-8 text-flora-gold transition-transform duration-500 ease-premium group-hover:rotate-12 group-hover:scale-110"
          strokeWidth={1.5}
        />
        <Link
          href={`/services/${service.category === "hair" ? "hair-treatments" : service.category === "skin" ? "skin-treatments" : "bridal"}#${service.slug}`}
          className="text-sm font-medium text-flora-black hover:text-flora-gold"
          aria-label={`Learn more about ${service.name}`}
        >
          Learn More &rarr;
        </Link>
      </div>
    </Card>
  );
}
