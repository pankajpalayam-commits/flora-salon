"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { offers } from "@/lib/data/offers";

const STORAGE_KEY = "flora-promo-shown";

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    function handleScroll() {
      if (window.scrollY > 50) {
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-flora-black/70 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Current offers"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-flora-white p-6 md:p-8"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 text-flora-grey-dark/60 hover:text-flora-black"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>

            <p className="text-caption uppercase text-flora-gold mb-1 text-center">Limited Time</p>
            <h2 className="text-h3 font-display mb-6 text-center">Current Offers</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {offers.map((offer) => (
                <div key={offer.id} className="overflow-hidden rounded-xl">
                  <div className="grid h-48 grid-cols-2 gap-0.5 bg-flora-grey-light">
                    <div className="relative bg-flora-grey-light">
                      <Image
                        src={offer.images[0]}
                        alt={offer.title + " photo 1"}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="relative bg-flora-grey-light">
                      <Image
                        src={offer.images[1]}
                        alt={offer.title + " photo 2"}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="bg-flora-grey-light p-3">
                    <p className="text-sm font-medium text-flora-black">{offer.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/offers"
              onClick={close}
              className="mt-6 block rounded-lg bg-flora-black py-3 text-center text-sm font-medium text-flora-white hover:bg-flora-gold hover:text-flora-black"
            >
              View All Offers
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}