import { Container } from "@/components/ui/Container";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";
import { Sparkles } from "@/components/ui/Sparkles";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-flora-black pt-40 pb-20 md:pt-48 md:pb-28">
      {/* Lighting — decorative only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-flora-gold/15 blur-[110px]" />
        <div className="animate-drift-slow absolute -bottom-48 left-1/4 h-[420px] w-[620px] rounded-full bg-flora-amber/25 blur-[120px]" />
      </div>
      <Sparkles count={9} />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-flora-gold/50 to-transparent" />
      <Container className="relative">
        <p className="text-caption uppercase text-flora-gold mb-3">{eyebrow}</p>
        <AnimatedDivider className="mb-5" />
        {/* Not animated: the page title is the main content Google times for
            LCP, so it should paint immediately. */}
        <h1 className="text-h1 text-flora-white max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-xl text-lg text-flora-white/75">{description}</p>
        )}
      </Container>
    </section>
  );
}
