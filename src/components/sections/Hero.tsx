"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

// EDIT THESE — each slide is a 3-line headline + one subheading line.
// Rotates automatically every 5 seconds.
const slides = [
  {
    lines: ["Beautiful Hair.", "Healthy Skin.", "Confident You."],
    sub: "Premium Hair, Skin & Bridal Services in Kilimanoor, Trivandrum.",
  },
  {
    lines: ["Bridal Looks,", "Beautifully", "Crafted."],
    sub: "HD & Airbrush Bridal Makeup Artists in Trivandrum.",
  },
  {
    lines: ["Kilimanoor's", "Trusted Family", "Salon."],
    sub: "Experienced Professionals. Premium Products. Hygienic Care.",
  },
];

const AUTO_ADVANCE_MS = 5000;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-flora-black">
      <div className="absolute inset-0 bg-gradient-to-b from-flora-black/60 via-flora-black/70 to-flora-black" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto max-w-content px-6 text-center">
        <p className="text-caption uppercase text-flora-gold mb-6">
          FLORA - Unisex Family Salon-Kilimanoor Trivandrum
        </p>

        <div className="relative min-h-[9rem] md:min-h-[15rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h1 className="font-display text-h1 text-flora-white">
                {current.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-flora-white/80">
                {current.sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/contact" variant="primary">
            Book Appointment
          </Button>
          <Button href={`tel:${siteConfig.business.phone}`} variant="ghost" className="text-flora-white border-flora-white/40 hover:border-flora-gold">
            Call Now
          </Button>
          <Button href={siteConfig.social.whatsapp} variant="ghost" className="text-flora-white border-flora-white/40 hover:border-flora-gold">
            WhatsApp
          </Button>
        </motion.div>

        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-flora-gold" : "w-2 bg-flora-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border border-flora-white/50 flex items-start justify-center p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-flora-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
