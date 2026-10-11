"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every page opens on a dark hero, so the desktop header starts
  // transparent with light text and turns solid ivory once scrolled.
  const transparent = !scrolled;

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 z-40 w-full transition-[background-color,box-shadow,border-color] duration-300 ease-premium",
          "border-b border-flora-line/70 bg-flora-ivory/90 backdrop-blur-md",
          transparent && "lg:border-transparent lg:bg-transparent lg:backdrop-blur-0"
        )}
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-3 md:px-10">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} — home`}>
            <Image
              src="/images/logo/flora-logo.png"
              alt=""
              width={140}
              height={100}
              className="h-11 w-auto rounded-md"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {siteConfig.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative inline-flex min-h-[44px] items-center gap-1 px-3 text-sm font-medium",
                      transparent
                        ? "text-flora-white/85 hover:text-flora-gold"
                        : "text-flora-grey-dark hover:text-flora-gold-deep",
                      active && (transparent ? "text-flora-gold" : "text-flora-gold-deep")
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                    )}
                    {active && (
                      <span
                        aria-hidden="true"
                        className={clsx(
                          "absolute inset-x-3 bottom-2 h-px",
                          transparent ? "bg-flora-gold" : "bg-flora-gold-deep"
                        )}
                      />
                    )}
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="min-w-[220px] rounded-xl border border-flora-line bg-flora-white p-2 shadow-lift">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-4 py-2.5 text-sm text-flora-grey-dark hover:bg-flora-grey-light hover:text-flora-gold-deep"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant={transparent ? "gold" : "primary"}>
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="-mr-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-flora-black hover:bg-flora-grey-light lg:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
