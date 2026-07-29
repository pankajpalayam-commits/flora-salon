import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/types/service";
import { Card } from "@/components/ui/Card";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card id={service.slug} className="overflow-hidden scroll-mt-28">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-{center-30%} transition-transform duration-500 ease-premium group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-h3 font-display mb-2">{service.name}</h3>
        <p className="text-sm text-flora-grey-dark/80 mb-4">
          {service.shortDescription}
        </p>
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
