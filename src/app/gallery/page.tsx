import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryFilterGrid } from "@/components/sections/GalleryFilterGrid";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "Browse hair colour, hair botox, keratin and bridal transformations from FLORA in Kilimanoor, Trivandrum.",
  path: "/gallery",
});

export default function GalleryPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Gallery"
        title="Our Work"
        description="A look at real transformations from our salon in Kilimanoor — hair, skin and bridal."
      />
      <section className="bg-flora-white py-24 md:py-32">
        <Container>
          <GalleryFilterGrid />
        </Container>
      </section>

      <section className="bg-flora-grey-light py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Follow Along" title="On Instagram" align="center" />
          <div className="flex h-64 items-center justify-center rounded-xl bg-flora-white text-sm text-flora-grey-dark/60">
            Instagram feed placeholder — connect your @florafamilysalon account
          </div>
        </Container>
      </section>
    </>
  );
}
