import { Container } from "@/components/ui/Container";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-flora-black pt-40 pb-20 md:pt-48 md:pb-28">
      <Container>
        <p className="text-caption uppercase text-flora-gold mb-3">{eyebrow}</p>
        <AnimatedDivider className="mb-5" />
        <h1 className="text-h1 font-display text-flora-white max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-flora-white/70">{description}</p>
        )}
      </Container>
    </section>
  );
}
