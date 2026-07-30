import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import { GalleryPhoto } from "@/components/ui/GalleryPhoto";
import { BridalPackages } from "@/components/sections/BridalPackages";
import { galleryItems } from "@/lib/data/gallery";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Bridal Makeup in Trivandrum & Kilimanoor",
  description:
    "HD, airbrush, engagement and reception bridal makeup packages at FLORA — trusted bridal makeup artists in Kilimanoor, Trivandrum.",
  path: "/bridal",
});

export default function BridalPage() {
  const bridalGalleryItems = galleryItems.filter((g) => g.category === "bridal");
  const bridalTestimonials = testimonials.filter((t) => t.service === "Bridal Makeup");
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Bridal", path: "/bridal" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Bridal Collection"
        title="Bridal, Redefined"
        description="Complete bridal and groom makeup packages for weddings, engagements and receptions in Trivandrum and Kilimanoor."
      />
      <BridalPackages />

      <section className="bg-flora-grey-light py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Bridal Gallery" title="Real Brides, Real Looks" align="center" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {bridalGalleryItems.map((item, i) => (
              <GalleryPhoto
                key={item.id}
                src={item.image}
                alt={item.alt}
                sizes="(max-width: 768px) 50vw, 33vw"
                containerClassName="aspect-square rounded-lg"
                delay={i * 0.06}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/gallery" variant="ghost">
              View Full Gallery
            </Button>
          </div>
        </Container>
      </section>

      {bridalTestimonials.length > 0 && (
        <section className="bg-flora-white py-24 md:py-32">
          <Container>
            <SectionHeading eyebrow="Testimonials" title="From Our Brides" align="center" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
              {bridalTestimonials.map((t) => (
                <Card key={t.id} className="p-6">
                  <StarRating rating={t.rating} />
                  <p className="mt-4 text-sm text-flora-grey-dark/90">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-medium text-flora-black">{t.name}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-flora-black py-20">
        <Container className="text-center">
          <h2 className="text-h2 font-display text-flora-white mb-4">
            Ready to plan your bridal look?
          </h2>
          <p className="text-flora-white/70 max-w-md mx-auto mb-8">
            Book a bridal consultation and trial session with our team today.
          </p>
          <Button href="/contact" variant="primary" className="bg-flora-gold text-flora-black hover:bg-flora-white">
            Book Consultation
          </Button>
        </Container>
      </section>
    </>
  );
}