import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceCategories } from "@/lib/data/service-categories";
import { ServiceCategoryCard } from "./ServiceCategoryCard";

export function ServicesGrid() {
  return (
    <section className="bg-flora-grey-light py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Popular Services"
          title="Exceptional salon services for every beauty need"
          description="From a quick trim to a complete bridal makeover — everything is done by experienced hands with premium products."
          align="center"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category, i) => (
            <ServiceCategoryCard key={category.slug} category={category} index={i + 1} delay={(i % 4) * 0.06} />
          ))}
          {/* Closing tile fills the last grid slot and doubles as a CTA */}
          <Link
            href="/services"
            className="on-dark group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl bg-flora-black p-7 text-flora-white ring-1 ring-flora-gold/20 transition-[box-shadow] duration-300 hover:shadow-[0_0_0_1px_rgb(212_175_55/0.5),0_20px_50px_-12px_rgb(212_175_55/0.45)]"
          >
            <div aria-hidden="true" className="animate-drift pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flora-gold/25 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <p className="relative text-caption uppercase text-flora-gold">45+ treatments</p>
            <div className="relative">
              <p className="font-display text-h3 mb-4">See the full service menu</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-flora-gold">
                View all services
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
