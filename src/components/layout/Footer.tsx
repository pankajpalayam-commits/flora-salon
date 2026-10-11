import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const linkClass = "inline-flex min-h-[32px] items-center text-flora-white/70 hover:text-flora-gold";

export function Footer() {
  const year = new Date().getFullYear();
  const { business, social } = siteConfig;

  return (
    <footer className="on-dark bg-flora-black text-flora-white">
      {/* Closing call to action */}
      <div className="border-b border-flora-white/10">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
          <div>
            <p className="text-caption uppercase text-flora-gold mb-3">Ready when you are</p>
            <p className="font-display text-h2 text-flora-white">
              Your next look starts <span className="italic text-flora-gold">here.</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="gold">Book Appointment</Button>
            <Button href={social.whatsapp} variant="ghost-light" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </Button>
          </div>
        </Container>
      </div>

      <Container className="grid grid-cols-2 gap-10 py-16 md:grid-cols-12">
        <div className="col-span-2 md:col-span-4">
          <Image
            src="/images/logo/flora-logo-transparent.png"
            alt={`${siteConfig.name} logo`}
            width={120}
            height={86}
            className="h-12 w-auto mb-5"
          />
          <ul className="space-y-3 text-sm text-flora-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flora-gold" aria-hidden="true" />
              <span>
                {business.address.streetAddress}, {business.address.addressLocality},{" "}
                {business.address.addressRegion} {business.address.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-flora-gold" aria-hidden="true" />
              <a href={`tel:${business.phone}`} className="hover:text-flora-gold">{business.phone}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-flora-gold" aria-hidden="true" />
              <span>{business.hours[0].day}, {business.hours[0].time}</span>
            </li>
          </ul>
        </div>

        <nav className="md:col-span-3 md:col-start-6" aria-label="Footer">
          <p className="text-caption uppercase text-flora-gold mb-4">Explore</p>
          <ul className="space-y-1 text-sm">
            {siteConfig.footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <p className="text-caption uppercase text-flora-gold mb-4">Connect</p>
          <ul className="space-y-1 text-sm">
            <li><a href={social.googleReviews} target="_blank" rel="noopener noreferrer" className={linkClass}>Google Reviews</a></li>
            <li><a href={social.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>Instagram</a></li>
            <li><a href={social.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>Facebook</a></li>
            <li><a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>WhatsApp</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-caption uppercase text-flora-gold mb-4">Legal</p>
          <ul className="space-y-1 text-sm">
            {siteConfig.footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-flora-white/10 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <Container>
          <p className="text-xs text-flora-white/60 text-center">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
