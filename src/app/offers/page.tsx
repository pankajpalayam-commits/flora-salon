import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { OffersGrid } from "@/components/sections/OffersGrid";

export const metadata: Metadata = buildMetadata({
  title: "Offers & Packages",
  description:
    "Current offers and combo packages at FLORA in Kilimanoor, Trivandrum.",
  path: "/offers",
});

export default function OffersPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Offers", path: "/offers" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Offers"
        title="Current Offers & Packages"
        description="Limited-time offers on our most-loved services. Terms apply — ask our team for details."
      />
      <section className="bg-flora-white py-24 md:py-32">
        <Container>
          <OffersGrid />
        </Container>
      </section>
    </>
  );
}