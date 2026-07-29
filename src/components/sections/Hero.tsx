"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const headlineLines = ["Beautiful Hair.", "Healthy Skin.", "Confident You."];

export function Hero() {
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

        <h1 className="font-display text-h1 text-flora-white">
          {headlineLines.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-flora-white/80"
        >
          Premium Hair, Skin &amp; Bridal Services in Kilimanoor, Trivandrum.
        </motion.p>

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