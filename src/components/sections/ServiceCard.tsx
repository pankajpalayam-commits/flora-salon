import Link from "next/link";
import type { Service } from "@/types/service";
import { Card } from "@/components/ui/Card";

const categoryLabels: Record<Service["category"], string> = {
  hair: "Hair",
  skin: "Skin",
  bridal: "Bridal",
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card id={service.slug} className="scroll-mt-28 border-t-2 border-t-flora-gold p-8">
      <p className="text-caption uppercase text-flora-gold mb-3">
        {categoryLabels[service.category]}
      </p>
      <h3 className="text-h3 font-display mb-3">{service.name}</h3>
      <p className="text-sm text-flora-grey-dark/80 mb-6">
        {service.shortDescription}
      </p>
      <Link
        href={`/services/${service.category === "hair" ? "hair-treatments" : service.category === "skin" ? "skin-treatments" : "bridal"}#${service.slug}`}
        className="text-sm font-medium text-flora-black hover:text-flora-gold"
        aria-label={`Learn more about ${service.name}`}
      >
        Learn More &rarr;
      </Link>
    </Card>
  );
}
