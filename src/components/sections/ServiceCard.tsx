import {
  ArrowUpRight,
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
import { formatPrice } from "@/lib/format";

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
  const price = formatPrice(service.priceFrom, service.priceNote);

  return (
    <Card id={service.slug} className="flex h-full scroll-mt-28 flex-col p-7 focus-within:ring-2 focus-within:ring-flora-gold-deep">
      <div className="mb-8 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-flora-gold-soft">
          <Icon className="h-6 w-6 text-flora-gold-deep" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <span className="font-display text-sm italic text-flora-muted">{String(index).padStart(2, "0")}</span>
      </div>
      <h3 className="text-h3 mb-3">{service.name}</h3>
      <p className="mb-8 flex-1 text-sm text-flora-muted">{service.shortDescription}</p>
      {price && (
        <p className="-mt-4 mb-6 text-sm font-medium text-flora-gold-deep">{price}</p>
      )}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium text-flora-black after:absolute after:inset-0 after:rounded-2xl after:content-[''] group-hover:text-flora-gold-deep"
        aria-label={linkLabel}
      >
        Ask on WhatsApp
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </Card>
  );
}
