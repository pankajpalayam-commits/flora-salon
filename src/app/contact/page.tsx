import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Visit or contact FLORA in Kilimanoor, Trivandrum — call, WhatsApp, or send us a message to book your appointment.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Visit Us"
        title="Get In Touch"
        description="Book an appointment, ask a question, or drop by our salon in Kilimanoor, Trivandrum."
      />
      <ContactSection showHeading={false} />
    </>
  );
}
