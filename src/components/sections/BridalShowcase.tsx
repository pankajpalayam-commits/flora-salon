import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export function BridalShowcase() {
  return (
    <section className="relative bg-flora-black py-24 md:py-32 overflow-hidden">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-caption uppercase text-flora-gold mb-3">Bridal</p>
          <AnimatedDivider className="mb-5" />
          <h2 className="text-h2 font-display text-flora-white mb-6">
            Bridal, Redefined
          </h2>
          <p className="text-flora-white/70 mb-8 max-w-md">
            HD makeup, airbrush makeup, engagement looks and complete wedding
            packages — designed around you, for the most photographed day of
            your life.
          </p>
          <Button href="/bridal" variant="primary" className="bg-flora-gold text-flora-black hover:bg-flora-white">
            Book Consultation
          </Button>
        </div>
        <div className="relative h-80 w-full overflow-hidden rounded-xl lg:h-[420px]">
          <Image
            src="/images/bridal/bridal-showcase.jpg"
            alt="Bridal makeup by FLORA"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </Container>
    </section>
  );
}
