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

export const metadata: Metadata = buildMetadata({
  title: "Premium Unisex Family Salon in Kilimanoor, Trivandrum",
  description:
    "FLORA offers premium hair, skin and bridal services in Kilimanoor, Trivandrum. Experienced professionals, premium products, and a family-friendly, hygienic environment.",
  path: "/",
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
      <ContactSection />
    </>
  );
}
