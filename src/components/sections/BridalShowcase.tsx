"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-flora-gold/10 blur-3xl"
      />
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="relative lg:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/bridal/bridal-showcase.jpg"
              alt="A FLORA bride in HD bridal makeup and traditional jewellery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
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
            Bridal, <span className="italic text-flora-gold">redefined</span>
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
            <Button href="/contact" variant="gold">
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
