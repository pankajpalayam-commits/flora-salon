import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/jsonld";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";
import { Card } from "@/components/ui/Card";
import { team } from "@/lib/data/team";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "FLORA is a premium unisex family salon in Kilimanoor, Trivandrum — learn our story, mission and meet our team.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero eyebrow="About FLORA" title="Our Story" />

      <section className="bg-flora-white py-24 md:py-32">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 w-full overflow-hidden rounded-xl lg:h-[420px]">
            <Image
              src="/images/team/salon-team.jpg"
              alt="FLORA interior and team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <AnimatedDivider className="mb-5" />
            <h2 className="text-h2 font-display mb-6">
              A Family Salon, Built on Trust
            </h2>
            <p className="text-flora-grey-dark/80 max-w-md mb-4">
              FLORA Unisex Family Salon and Makeover Collections opened its
              doors in Kilimanoor with a simple idea: every member of the
              family deserves premium hair, skin and bridal care, delivered
              with the same warmth and attention to detail you'd expect from
              a luxury salon in any major city.
            </p>
            <p className="text-flora-grey-dark/80 max-w-md">
              Today, we're proud to be one of the most trusted names for
              hair treatments, facials and bridal makeup in Trivandrum —
              built entirely on repeat visits and word of mouth.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-flora-grey-light py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Card className="p-10">
              <p className="text-caption uppercase text-flora-gold mb-3">Mission</p>
              <h3 className="text-h3 font-display mb-4">
                Premium care for every member of the family
              </h3>
              <p className="text-sm text-flora-grey-dark/80">
                To deliver premium, personalized hair, skin and bridal
                services in a hygienic, welcoming environment — for men,
                women and children alike.
              </p>
            </Card>
            <Card className="p-10">
              <p className="text-caption uppercase text-flora-gold mb-3">Vision</p>
              <h3 className="text-h3 font-display mb-4">
                Kilimanoor's most trusted salon
              </h3>
              <p className="text-sm text-flora-grey-dark/80">
                To be the first name families in Kilimanoor and Trivandrum
                think of for hair, skin and bridal care — and eventually,
                a name recognized across Kerala.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-flora-white py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Our Team" title="Meet the Team" align="center" />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative mx-auto mb-4 h-36 w-36 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-flora-black">{member.name}</h3>
                <p className="text-xs text-flora-grey-dark/60">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-flora-black py-20 text-center">
        <Container>
          <p className="text-caption uppercase text-flora-gold mb-3">Our Promise</p>
          <h2 className="text-h2 font-display text-flora-white max-w-2xl mx-auto">
            Every visit to FLORA is personal, hygienic and premium — no exceptions.
          </h2>
        </Container>
      </section>
    </>
  );
}
