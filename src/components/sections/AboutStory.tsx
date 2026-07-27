import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";
import { Button } from "@/components/ui/Button";

export function AboutStory() {
  return (
    <section className="bg-flora-white py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative h-80 w-full overflow-hidden rounded-xl lg:h-[420px] lg:order-2">
          <Image
            src="/images/team/salon-team.jpg"
            alt="FLORA team"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="lg:order-1">
          <p className="text-caption uppercase text-flora-gold mb-3">Our Story</p>
          <AnimatedDivider className="mb-5" />
          <h2 className="text-h2 font-display mb-6">
            A Family Salon, Built on Trust
          </h2>
          <p className="text-flora-grey-dark/80 mb-6 max-w-md">
            FLORA was founded in Kilimanoor with a simple promise:
            premium hair, skin and bridal care for every member of the family,
            delivered in a warm, hygienic and personalized environment.
          </p>
          <Button href="/about" variant="ghost">
            Read Our Story
          </Button>
        </div>
      </Container>
    </section>
  );
}
