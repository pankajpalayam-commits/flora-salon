import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  // Homepage shows a curated preview; full list lives on /services
  const featured = services.slice(0, 6);

  return (
    <section className="bg-flora-grey-light py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Hair, Skin &amp; Bridal Services in Kilimanoor"
          description="From precision haircuts to bridal transformations, every service is delivered with premium products and a personalized approach."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" variant="ghost">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
