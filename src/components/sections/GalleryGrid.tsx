import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GalleryPhoto } from "@/components/ui/GalleryPhoto";
import { galleryItems } from "@/lib/data/gallery";

export function GalleryGrid() {
  return (
    <section className="bg-flora-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Our Work"
          align="center"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryItems.map((item, i) => (
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
  );
}