"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsCarousel() {
  return (
    <section className="bg-flora-grey-light py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" align="center" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center rounded-xl bg-flora-white p-8 text-center shadow-sm"
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 text-flora-grey-dark/90">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-flora-black">{t.name}</p>
              {t.service && (
                <p className="text-xs text-flora-grey-dark/60">{t.service}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}