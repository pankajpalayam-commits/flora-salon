"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/data/testimonials";

const AUTO_ADVANCE_MS = 5000;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-flora-grey-light py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" align="center" />

        <div className="relative mx-auto max-w-2xl">
          <div className="relative h-64 md:h-56">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex flex-col items-center rounded-xl bg-flora-white p-8 text-center shadow-sm md:p-10"
              >
                <StarRating rating={current.rating} />
                <p className="mt-4 text-flora-grey-dark/90">&ldquo;{current.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-medium text-flora-black">{current.name}</p>
                {current.service && (
                  <p className="text-xs text-flora-grey-dark/60">{current.service}</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-flora-gold" : "w-2 bg-flora-grey-dark/20"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
