import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  const { business } = siteConfig;

  return (
    <section className="bg-flora-white py-24 md:py-32">
      <Container>
        {showHeading && (
          <SectionHeading eyebrow="Visit Us" title="Get In Touch" align="center" />
        )}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="h-64 w-full overflow-hidden rounded-xl md:h-80">
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
              className="inline-block text-sm font-medium text-flora-black hover:text-flora-gold"
            >
              Get Directions &rarr;
            </a>
            <dl className="space-y-3 text-sm">
              <div className="flex gap-2">
                <dt className="font-medium text-flora-black">Address:</dt>
                <dd className="text-flora-grey-dark/80">
                  {business.address.streetAddress}, {business.address.addressLocality},{" "}
                  {business.address.addressRegion} {business.address.postalCode}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-flora-black">Phone:</dt>
                <dd className="space-x-2">
                  <a href={`tel:${business.phone}`} className="text-flora-grey-dark/80 hover:text-flora-gold">
                    {business.phone}
                  </a>
                  <span className="text-flora-grey-dark/40">/</span>
                  <a href={`tel:${business.phoneAlt}`} className="text-flora-grey-dark/80 hover:text-flora-gold">
                    {business.phoneAlt}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-flora-black">Email:</dt>
                <dd>
                  <a href={`mailto:${business.email}`} className="text-flora-grey-dark/80 hover:text-flora-gold">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-flora-black">Hours:</dt>
                <dd className="text-flora-grey-dark/80">
                  {business.hours.map((h) => (
                    <div key={h.day}>
                      {h.day}: {h.time}
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
