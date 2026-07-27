"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-40 w-full transition-colors duration-300 ease-premium",
        scrolled
          ? "bg-flora-white/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/logo/flora-logo.png"
            alt={`${siteConfig.name} logo`}
            width={140}
            height={100}
            className="h-11 w-auto rounded-md"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={clsx(
                  "text-sm font-medium hover:text-flora-gold",
                  scrolled ? "text-flora-grey-dark" : "text-flora-white"
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[200px] rounded-lg bg-flora-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-flora-grey-dark hover:bg-flora-grey-light hover:text-flora-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            Book Appointment
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className={clsx(
            "md:hidden text-2xl leading-none",
            scrolled ? "text-flora-black" : "text-flora-white"
          )}
        >
          &#9776;
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
