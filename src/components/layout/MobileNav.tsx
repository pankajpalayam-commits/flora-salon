"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.classList.add("mobile-menu-open");
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="on-dark fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-flora-black lg:hidden"
        >
          <div className="flex justify-end p-4">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-flora-white hover:bg-flora-white/10"
            >
              <X className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-8 pt-4" aria-label="Mobile">
            <ul className="divide-y divide-flora-white/10">
              {siteConfig.nav.map((item, i) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.04 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "flex min-h-[56px] items-center font-display text-2xl",
                        active ? "text-flora-gold" : "text-flora-white hover:text-flora-gold"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="pb-3 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="flex min-h-[44px] items-center text-base text-flora-white/70 hover:text-flora-gold"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-3 p-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex min-h-[48px] items-center justify-center rounded-full bg-flora-gold px-8 text-flora-black font-medium"
            >
              Book Appointment
            </Link>
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-flora-white/30 px-8 text-flora-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.business.phone}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
