import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { offers } from "@/lib/data/offers";

export const metadata: Metadata = buildMetadata({
  title: "Offers & Packages",
  description:
    "Current offers and combo packages at FLORA in Kilimanoor, Trivandrum.",
  path: "/offers",
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function OffersPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Offers", path: "/offers" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Offers"
        title="Current Offers & Packages"
        description="Limited-time offers on our most-loved services. Terms apply — ask our team for details."
      />
      <section className="bg-flora-white py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {offers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden">
                <div className="relative h-64 w-full bg-flora-grey-light">
                  <div className="grid h-full grid-cols-2 gap-0.5">
                    <div className="relative bg-flora-grey-light">
                      <Image
                        src={offer.images[0]}
                        alt={offer.title + " photo 1"}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="relative bg-flora-grey-light">
                      <Image
                        src={offer.images[1]}
                        alt={offer.title + " photo 2"}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 rounded-full bg-flora-gold px-3 py-1 text-xs font-medium text-flora-black">
                    Valid till {formatDate(offer.validUntil)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-h3 font-display mb-2">{offer.title}</h3>
                  <p className="text-sm text-flora-grey-dark/80 mb-4">
                    {offer.description}
                  </p>
                  <Button href="/contact" variant="ghost">
                    Claim This Offer
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}