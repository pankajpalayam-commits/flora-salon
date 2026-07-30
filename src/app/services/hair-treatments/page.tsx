import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { services } from "@/lib/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Hair Treatments in Kilimanoor & Trivandrum",
  description:
    "Hair Botox, Keratin, Nanoplastia, Hair Colour and Hair Spa treatments at FLORA — a trusted name for hair treatments in Kilimanoor, Trivandrum.",
  path: "/services/hair-treatments",
});

export default function HairTreatmentsPage() {
  const hairServices = services.filter((s) => s.category === "hair");
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Hair Treatments", path: "/services/hair-treatments" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Hair Treatments"
        title="Hair Treatments in Trivandrum"
        description="From Hair Botox to Keratin and Nanoplastia — our hair treatments in Kilimanoor are tailored to restore strength, shine and manageability."
      />
      <section className="bg-flora-white py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hairServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i + 1} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href="/contact" variant="primary">
              Book a Hair Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}