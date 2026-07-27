import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${siteConfig.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="pt-40 pb-24 md:pt-48 md:pb-32">
      <Container className="max-w-3xl">
        <h1 className="text-h1 font-display mb-8">Terms &amp; Conditions</h1>
        <div className="space-y-6 text-flora-grey-dark/90 leading-relaxed">
          <p>Last updated: January 2026</p>
          <h2 className="text-h3 font-display pt-4">Appointments</h2>
          <p>
            Appointments booked through our website, phone or WhatsApp are
            subject to availability. We recommend booking at least 24 hours
            in advance for standard services and one to two weeks in
            advance for bridal packages.
          </p>
          <h2 className="text-h3 font-display pt-4">Cancellations</h2>
          <p>
            We kindly request at least 4 hours' notice for cancellations or
            rescheduling. Repeated no-shows may affect future booking
            priority.
          </p>
          <h2 className="text-h3 font-display pt-4">Offers</h2>
          <p>
            Offers listed on our Offers page are valid until the stated
            expiry date and cannot be combined with other promotions unless
            explicitly stated.
          </p>
          <h2 className="text-h3 font-display pt-4">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.business.email}`} className="text-flora-gold">
              {siteConfig.business.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </article>
  );
}
