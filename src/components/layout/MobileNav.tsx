"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 bg-flora-black md:hidden"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-flora-white text-2xl leading-none"
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 px-6 pt-8" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="text-h3 font-display text-flora-white hover:text-flora-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={onClose}
              className="mt-6 rounded-lg bg-flora-gold px-8 py-3 text-flora-black font-medium"
            >
              Book Appointment
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
