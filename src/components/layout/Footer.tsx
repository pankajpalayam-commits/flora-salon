import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-flora-black text-flora-white">
      <Container className="py-16 grid grid-cols-2 gap-10 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/images/logo/flora-logo-transparent.png"
            alt={`${siteConfig.name} logo`}
            width={120}
            height={86}
            className="h-10 w-auto mb-3"
          />
          <p className="text-sm text-white/60">
            {siteConfig.business.address.streetAddress},{" "}
            {siteConfig.business.address.addressLocality},{" "}
            {siteConfig.business.address.addressRegion}
          </p>
        </div>

        <div>
          <p className="text-caption uppercase text-flora-gold mb-4">
            Quick Links
          </p>
          <ul className="space-y-2 text-sm">
            {siteConfig.footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-flora-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-caption uppercase text-flora-gold mb-4">Connect</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={siteConfig.social.googleReviews} className="text-white/70 hover:text-flora-gold">
                Google Reviews
              </a>
            </li>
            <li>
              <a href={siteConfig.social.instagram} className="text-white/70 hover:text-flora-gold">
                Instagram
              </a>
            </li>
            <li>
              <a href={siteConfig.social.facebook} className="text-white/70 hover:text-flora-gold">
                Facebook
              </a>
            </li>
            <li>
              <a href={siteConfig.social.whatsapp} className="text-white/70 hover:text-flora-gold">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-caption uppercase text-flora-gold mb-4">Legal</p>
          <ul className="space-y-2 text-sm">
            {siteConfig.footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-flora-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-xs text-white/50 text-center">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
