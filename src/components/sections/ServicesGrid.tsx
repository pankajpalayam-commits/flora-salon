import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { serviceCategories } from "@/lib/data/service-categories";
import { ServiceCategoryCard } from "./ServiceCategoryCard";

export function ServicesGrid() {
  return (
    <section className="bg-flora-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Popular Services"
          title="We Provide Exceptional Salon Services for All Your Beauty Needs"
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category, i) => (
  <ServiceCategoryCard key={category.slug} category={category} index={i + 1} delay={i * 0.08} />
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