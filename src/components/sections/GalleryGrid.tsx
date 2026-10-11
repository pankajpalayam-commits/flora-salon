import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GalleryPhoto } from "@/components/ui/GalleryPhoto";
import { galleryItems } from "@/lib/data/gallery";

export function GalleryGrid() {
  // Editorial mosaic: the first photo is 2×2, so five photos fill two
  // even rows on desktop (4 columns) and four rows on mobile (2 columns).
  const items = galleryItems.slice(0, 5);

  return (
    <section className="bg-flora-ivory py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <SectionHeading eyebrow="Gallery" title="Our recent work" className="!mb-0" />
          <Button href="/gallery" variant="ghost">
            View full gallery
          </Button>
        </div>
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {items.map((item, i) => (
            <GalleryPhoto
              key={item.id}
              src={item.image}
              alt={item.alt}
              sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              containerClassName={
                i === 0
                  ? "col-span-2 row-span-2 rounded-2xl"
                  : "rounded-2xl"
              }
              delay={(i % 4) * 0.05}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
