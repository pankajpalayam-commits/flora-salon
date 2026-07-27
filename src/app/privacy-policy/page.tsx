import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <article className="pt-40 pb-24 md:pt-48 md:pb-32">
      <Container className="max-w-3xl">
        <h1 className="text-h1 font-display mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-flora-grey-dark/90 leading-relaxed">
          <p>Last updated: January 2026</p>
          <p>
            {siteConfig.name} ("we", "our", "us") respects your privacy. This
            policy explains what information we collect through our website
            and how we use it.
          </p>
          <h2 className="text-h3 font-display pt-4">Information We Collect</h2>
          <p>
            When you submit our contact form or book an appointment, we
            collect your name, phone number, email address and any details
            you provide about the service you're interested in.
          </p>
          <h2 className="text-h3 font-display pt-4">How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to your
            enquiry, confirm appointments, and — with your consent — to
            contact you about offers or updates. We do not sell your
            information to third parties.
          </p>
          <h2 className="text-h3 font-display pt-4">Contact Us</h2>
          <p>
            If you have questions about this policy, contact us at{" "}
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
