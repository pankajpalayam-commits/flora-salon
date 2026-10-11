import { Clock, Mail, MapPin, Navigation, Phone, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

function InfoRow({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-flora-gold-soft">
        <Icon className="h-5 w-5 text-flora-gold-deep" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <dt className="text-caption uppercase text-flora-muted">{label}</dt>
        <dd className="mt-1 text-flora-black">{children}</dd>
      </div>
    </div>
  );
}

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  const { business } = siteConfig;
  const linkClass = "hover:text-flora-gold-deep underline-offset-4 hover:underline";

  return (
    <section className="bg-flora-ivory py-24 md:py-32">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Visit Us"
            title="Book your visit"
            description="Send us a message, call, or drop by — we're open every day."
            align="center"
          />
        )}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_6fr]">
          <div className="space-y-8">
            <dl className="space-y-6 rounded-2xl border border-flora-line bg-flora-white p-7 shadow-soft md:p-8">
              <InfoRow icon={MapPin} label="Address">
                {business.address.streetAddress}, {business.address.addressLocality},{" "}
                {business.address.addressRegion} {business.address.postalCode}
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                <a href={`tel:${business.phone}`} className={linkClass}>{business.phone}</a>
                <span className="mx-2 text-flora-line" aria-hidden="true">|</span>
                <a href={`tel:${business.phoneAlt}`} className={linkClass}>{business.phoneAlt}</a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a href={`mailto:${business.email}`} className={linkClass}>{business.email}</a>
              </InfoRow>
              <InfoRow icon={Clock} label="Hours">
                {business.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </InfoRow>
            </dl>
            <div className="overflow-hidden rounded-2xl border border-flora-line">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={business.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="FLORA location on Google Maps"
                  className="h-full w-full"
                />
              </div>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center justify-center gap-2 bg-flora-white text-sm font-medium text-flora-black hover:bg-flora-grey-light hover:text-flora-gold-deep"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-flora-line bg-flora-white p-7 shadow-soft md:p-10 lg:self-start">
            <h3 className="text-h3 mb-2">Request an appointment</h3>
            <p className="mb-8 text-sm text-flora-muted">
              Tell us what you&apos;re looking for and we&apos;ll call you back to confirm a time.
            </p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
