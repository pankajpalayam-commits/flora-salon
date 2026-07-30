"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { offers } from "@/lib/data/offers";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function OffersGrid() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden">
            <div className="relative h-64 w-full bg-flora-grey-light">
              <div className="grid h-full grid-cols-2 gap-0.5">
                {offer.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightbox({ src, alt: offer.title + " photo " + (i + 1) })}
                    className="relative cursor-zoom-in bg-flora-grey-light"
                    aria-label={"Enlarge " + offer.title + " photo " + (i + 1)}
                  >
                    <Image
                      src={src}
                      alt={offer.title + " photo " + (i + 1)}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
              <span className="absolute top-4 right-4 rounded-full bg-flora-gold px-3 py-1 text-xs font-medium text-flora-black">
                Valid till {formatDate(offer.validUntil)}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-h3 font-display mb-2">{offer.title}</h3>
              <p className="text-sm text-flora-grey-dark/80 mb-4">{offer.description}</p>
              <Button href="/contact" variant="ghost">
                Claim This Offer
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-flora-black/90 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-4 top-4 text-flora-white hover:text-flora-gold"
            >
              <X className="h-8 w-8" strokeWidth={1.5} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[80vh] w-full max-w-2xl"
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}