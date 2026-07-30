"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";

export function BridalShowcase() {
  return (
    <section className="relative bg-flora-black py-24 md:py-32 overflow-hidden">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="group relative h-80 w-full overflow-hidden rounded-xl lg:h-[420px]"
        >
          <Image
            src="/images/bridal/bridal-showcase.jpg"
            alt="Bridal makeup by FLORA"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-flora-black/0 transition-colors duration-500 ease-premium group-hover:bg-flora-black/40">
            <Expand
              className="h-8 w-8 text-flora-white opacity-0 scale-75 transition-all duration-500 ease-premium group-hover:opacity-100 group-hover:scale-100"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}