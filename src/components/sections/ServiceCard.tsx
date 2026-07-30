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
import { siteConfig } from "@/config/site";

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
  const message = "Hi, I would like to know more about " + service.name;
  const whatsappHref = siteConfig.social.whatsapp + "?text=" + encodeURIComponent(message);
  const linkLabel = "Ask about " + service.name + " on WhatsApp";

  return (
    <Card id={service.slug} className="scroll-mt-28 bg-flora-grey-light border-none shadow-none p-8">
      <p className="text-xs font-medium text-flora-gold mb-4">{String(index).padStart(2, "0")}</p>
      <h3 className="text-h3 font-display mb-3">{service.name}</h3>
      <p className="text-sm text-flora-grey-dark/80 mb-8">{service.shortDescription}</p>
      <div className="flex items-center justify-between">
        <Icon className="h-8 w-8 text-flora-gold group-hover:animate-spin-once" strokeWidth={1.5} />
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-flora-black hover:text-flora-gold" aria-label={linkLabel}>Learn More &rarr;</a>
      </div>
    </Card>
  );
}