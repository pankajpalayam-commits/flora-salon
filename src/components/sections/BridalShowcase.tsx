"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { Sparkles } from "@/components/ui/Sparkles";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

const highlights = [
  "HD & airbrush bridal makeup",
  "Engagement & reception looks",
  "Hair styling, draping & accessories",
  "Pre-bridal skin & hair packages",
];

export function BridalShowcase() {
  return (
    <section className="on-dark relative overflow-hidden bg-flora-black py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-flora-gold/15 blur-[110px]" />
        <div className="animate-drift-slow absolute -right-20 top-0 h-[460px] w-[460px] rounded-full bg-flora-amber/30 blur-[120px]" />
      </div>
      <Sparkles count={10} />
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="relative lg:order-2"
        >
          {/* Warm halo behind the portrait */}
          <div aria-hidden="true" className="animate-glow-pulse absolute -inset-6 rounded-[2.5rem] bg-flora-gold/20 blur-3xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-1 ring-flora-gold/30">
            <Parallax amount={30} className="absolute -inset-y-10 inset-x-0">
              <Image
                src="/images/bridal/bridal-showcase.jpg"
                alt="A FLORA bride in HD bridal makeup and traditional jewellery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </Parallax>
            {/* A single sweep of light across the photo as it comes into view */}
            <motion.div
              aria-hidden="true"
              initial={{ x: "-120%" }}
              whileInView={{ x: "120%" }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-flora-gold-glint/40 to-transparent"
            />
          </div>
          {/* Thin gold frame offset behind the photo */}
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full rounded-[2rem] border border-flora-gold/40 md:block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="lg:order-1"
        >
          <p className="text-caption uppercase text-flora-gold mb-3">Bridal Studio</p>
          <AnimatedDivider className="mb-5" />
          <h2 className="text-h2 text-flora-white mb-6">
            Bridal, <span className="text-shimmer pr-[0.1em] italic">redefined</span>
          </h2>
          <p className="text-lg text-flora-white/75 mb-8 max-w-md">
            Looks designed around you — for the most photographed day of your
            life, and every celebration leading up to it.
          </p>
          <ul className="mb-10 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-flora-white/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-flora-gold/50">
                  <Check className="h-3.5 w-3.5 text-flora-gold" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="gold" shine>
              Book a Bridal Consultation
            </Button>
            <Button href="/bridal" variant="ghost-light">
              Explore Bridal
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
