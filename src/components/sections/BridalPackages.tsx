"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";
import { Button } from "@/components/ui/Button";

interface Package {
  title: string;
  description: string;
  image: string;
}

const packages: Package[] = [
  {
    title: "HD Makeup",
    description:
      "High-definition makeup that photographs flawlessly under any lighting, ideal for wedding-day close-ups.",
    image: "/images/bridal/hd-makeup.jpg",
  },
  {
    title: "Airbrush Makeup",
    description:
      "A lightweight, long-lasting finish that stays fresh through hours of ceremonies and celebrations.",
    image: "/images/bridal/airbrush-makeup.jpg",
  },
  {
    title: "Engagement Makeup",
    description:
      "Soft, romantic looks tailored for engagement shoots and pre-wedding celebrations.",
    image: "/images/bridal/engagement-makeup.jpg",
  },
  {
    title: "Reception Makeup",
    description:
      "Bold, glamorous styling designed for reception lighting and evening photography.",
    image: "/images/bridal/reception-makeup.jpg",
  },
];

export function BridalPackages() {
  return (
    <section className="bg-flora-ivory py-24 md:py-32">
      <Container>
        <div className="space-y-20 md:space-y-28">
          {packages.map((pkg, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={pkg.title}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className={clsx(
                    "group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]",
                    reversed && "lg:order-2"
                  )}
                >
                  <Image
                    src={pkg.image}
                    alt={`${pkg.title} by FLORA`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className={reversed ? "lg:order-1" : undefined}
                >
                  <AnimatedDivider className="mb-5" />
                  <p className="text-caption uppercase text-flora-gold-deep mb-3">{String(index + 1).padStart(2, "0")} — Bridal</p>
                  <h3 className="text-h2 mb-4">{pkg.title}</h3>
                  <p className="text-lg text-flora-muted max-w-md mb-8">
                    {pkg.description}
                  </p>
                  <Button href="/contact" variant="ghost">
                    Book Consultation
                  </Button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}