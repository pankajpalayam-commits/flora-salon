import { Container } from "@/components/ui/Container";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-flora-black pt-40 pb-20 md:pt-48 md:pb-28">
      {/* Soft gold glow — decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-flora-gold/10 blur-3xl"
      />
      <Container className="relative">
        <p className="text-caption uppercase text-flora-gold mb-3">{eyebrow}</p>
        <AnimatedDivider className="mb-5" />
        <h1 className="text-h1 text-flora-white max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-xl text-lg text-flora-white/75">{description}</p>
        )}
      </Container>
    </section>
  );
}
