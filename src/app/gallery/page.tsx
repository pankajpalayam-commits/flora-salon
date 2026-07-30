import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GalleryFilterGrid } from "@/components/sections/GalleryFilterGrid";
import { siteConfig } from "@/config/site";

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
          <div className="mx-auto flex max-w-md flex-col items-center rounded-xl bg-flora-white p-10 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-flora-gold-soft">
              <Instagram className="h-7 w-7 text-flora-gold" strokeWidth={1.5} />
            </div>
            <p className="mb-1 font-display text-h3">@flora.family.salon</p>
            <p className="mb-6 text-sm text-flora-grey-dark/70">
              See our latest work, offers and behind-the-scenes moments.
            </p>
            <Button href={siteConfig.social.instagram} variant="primary" target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}