import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/format";
import type { Service } from "@/types/service";

interface ServiceDetailsProps {
  services: Service[];
  eyebrow: string;
  title: string;
  className?: string;
}

/** A readable, text-first list of each service — for visitors, Google and AI. */
export function ServiceDetails({ services, eyebrow, title, className = "bg-flora-grey-light" }: ServiceDetailsProps) {
  return (
    <section className={`${className} py-24 md:py-32`}>
      <Container className="max-w-4xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <dl className="divide-y divide-flora-line border-y border-flora-line">
          {services.map((service) => (
            <div key={service.slug} className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-10">
              <dt>
                <h3 className="text-h3">{service.name}</h3>
                {formatPrice(service.priceFrom, service.priceNote) && (
                  <p className="mt-1 text-sm font-medium text-flora-gold-deep">
                    {formatPrice(service.priceFrom, service.priceNote)}
                  </p>
                )}
              </dt>
              <dd className="text-flora-grey-dark">{service.details}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
