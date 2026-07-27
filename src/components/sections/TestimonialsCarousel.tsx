import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsCarousel() {
  return (
    <section className="bg-flora-grey-light py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" align="center" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card key={t.id} className="p-6">
              <StarRating rating={t.rating} />
              <p className="mt-4 text-sm text-flora-grey-dark/90">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-flora-black">{t.name}</p>
              {t.service && (
                <p className="text-xs text-flora-grey-dark/60">{t.service}</p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
