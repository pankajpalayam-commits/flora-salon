import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { services } from "@/lib/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Skin & Facial Treatments in Kilimanoor, Trivandrum",
  description:
    "Hydra Facials, cleanups, de-tan, waxing and threading at FLORA — premium skin treatments and facials in Kilimanoor, Trivandrum.",
  path: "/services/skin-treatments",
});

export default function SkinTreatmentsPage() {
  const skinServices = services.filter((s) => s.category === "skin");
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Skin Treatments", path: "/services/skin-treatments" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Skin Treatments"
        title="Skin & Facial Treatments"
        description="Customized facials, Hydra Facials, de-tan and hair removal services designed to keep your skin healthy and radiant year-round."
      />
      <section className="bg-flora-white py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skinServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i + 1} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href="/contact" variant="primary">
              Book a Skin Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}