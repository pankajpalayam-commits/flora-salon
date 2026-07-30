import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceCategoryCard } from "@/components/sections/ServiceCategoryCard";
import { serviceCategories } from "@/lib/data/service-categories";

export const metadata: Metadata = buildMetadata({
  title: "Hair, Skin & Bridal Services in Kilimanoor, Trivandrum",
  description:
    "Explore FLORA's full range of hair, skin and bridal services in Kilimanoor, Trivandrum — from haircuts and hair botox to hydra facials and bridal makeup.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Our Services"
        title="Hair, Skin & Bridal Services"
        description="Every service at our unisex family salon in Kilimanoor begins with a personal consultation, using premium products and experienced hands."
      />
      <section className="bg-flora-white py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category, i) => (
  <ServiceCategoryCard key={category.slug} category={category} index={i + 1} linkMode="whatsapp" />
))}
          </div>
          <div className="mt-16 rounded-2xl bg-flora-grey-light p-10 text-center md:p-16">
            <h2 className="text-h3 font-display mb-3">
              Not sure which service is right for you?
            </h2>
            <p className="text-flora-grey-dark/80 mb-6 max-w-md mx-auto">
              Book a free consultation and our team will recommend the best
              treatment for your hair and skin.
            </p>
            <Button href="/contact" variant="primary">
              Book a Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}