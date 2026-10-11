import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";
import { Button } from "@/components/ui/Button";

export function AboutStory() {
  return (
    <section className="bg-flora-ivory py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative lg:order-2">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/team/salon-team.jpg"
              alt="The FLORA team at the Kilimanoor salon"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-flora-line bg-flora-white px-6 py-4 shadow-lift md:left-auto md:right-8">
            <p className="font-display text-3xl text-flora-black">6,000+</p>
            <p className="text-caption uppercase text-flora-muted">Happy clients</p>
          </div>
        </div>
        <div className="lg:order-1">
          <p className="text-caption uppercase text-flora-gold-deep mb-3">Our Story</p>
          <AnimatedDivider className="mb-5" />
          <h2 className="text-h2 mb-6">
            A family salon, <span className="italic text-flora-gold-deep">built on trust</span>
          </h2>
          <p className="text-lg text-flora-muted mb-8 max-w-md">
            FLORA was founded in Kilimanoor with a simple promise: premium hair,
            skin and bridal care for every member of the family, delivered in a
            warm, hygienic and personalized environment.
          </p>
          <Button href="/about" variant="ghost">
            Read our story
          </Button>
        </div>
      </Container>
    </section>
  );
}
