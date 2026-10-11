import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/Hero";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { WhyChooseFlora } from "@/components/sections/WhyChooseFlora";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { BridalShowcase } from "@/components/sections/BridalShowcase";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { AboutStory } from "@/components/sections/AboutStory";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { generalFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "FLORA | Unisex Family Salon & Bridal Makeup in Kilimanoor, Trivandrum",
  description:
    "Hair, skin and bridal services at FLORA, Kilimanoor Junction, Trivandrum. Keratin, hair botox, facials, HD bridal makeup. Open daily 9:30 AM–9 PM.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <WhyChooseFlora />
      <ServicesGrid />
      <BridalShowcase />
      <GalleryGrid />
      <TestimonialsCarousel />
      <AboutStory />
      <FaqSection faqs={generalFaqs} className="bg-flora-grey-light" />
      <ContactSection />
    </>
  );
}
