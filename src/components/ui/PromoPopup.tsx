"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { offers } from "@/lib/data/offers";

const STORAGE_KEY = "flora-promo-shown";
// Show once per visit, after the visitor has read a good part of the page
// (not on their first scroll), so it doesn't interrupt them straight away.
const SCROLL_TRIGGER = 0.4;

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    function handleScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable > SCROLL_TRIGGER) {
        lastFocus.current = document.activeElement as HTMLElement | null;
        setOpen(true);
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {}
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    lastFocus.current?.focus?.();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-flora-black/70 p-4 backdrop-blur-sm"
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
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-flora-ivory p-6 shadow-lift md:p-8"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close offers"
              className="absolute right-3 top-3 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-flora-muted hover:bg-flora-grey-light hover:text-flora-black"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>

            <p className="text-caption uppercase text-flora-gold-deep mb-1 text-center">Limited Time</p>
            <h2 className="text-h3 mb-6 text-center">Current Offers</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {offers.map((offer) => (
                <div key={offer.id} className="overflow-hidden rounded-2xl border border-flora-line bg-flora-white">
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
                  <div className="p-3">
                    <p className="text-sm font-medium text-flora-black">{offer.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/offers"
              onClick={close}
              className="mt-6 flex min-h-[48px] items-center justify-center rounded-full bg-flora-black text-sm font-medium text-flora-white hover:bg-flora-gold-deep"
            >
              View All Offers
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}