"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Package,
  MessageCircle,
  Users,
  ShieldCheck,
  ThumbsUp,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Experienced Professionals",
    description: "Trained stylists and therapists with years of hands-on expertise.",
    icon: Award,
  },
  {
    title: "Premium Products",
    description: "We use trusted, high-quality brands across every treatment.",
    icon: Package,
  },
  {
    title: "Personalized Consultation",
    description: "Every service begins with a consultation tailored to you.",
    icon: MessageCircle,
  },
  {
    title: "Family Friendly Salon",
    description: "A welcoming space designed for every member of the family.",
    icon: Users,
  },
  {
    title: "Hygienic Environment",
    description: "Strict sanitation standards for your safety and comfort.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Satisfaction",
    description: "Our reputation in Kilimanoor is built on happy, returning clients.",
    icon: ThumbsUp,
  },
];

// EDIT THESE — replace with your real numbers if different
const metrics = [
  { label: "Customer Retention", value: 90 },
  { label: "Quality of Service", value: 99 },
];

function AnimatedBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="mb-8 last:mb-0">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium uppercase tracking-wide text-flora-grey-dark">
          {label}
        </span>
        <span className="font-display text-h3 text-flora-gold">{display}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-flora-grey-light">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full bg-flora-gold"
        />
      </div>
    </div>
  );
}

export function WhyChooseFlora() {
  return (
    <section className="bg-flora-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why FLORA"
          title="Why Choose FLORA"
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card
                key={reason.title}
                className="p-8 text-center hover:scale-105 hover:shadow-xl hover:border-flora-gold/30"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-flora-gold-soft">
                  <Icon
                    className="h-7 w-7 text-flora-gold group-hover:animate-spin-once"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-h3 font-display mb-2">{reason.title}</h3>
                <p className="text-sm text-flora-grey-dark/80">{reason.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto mt-20 max-w-xl">
          {metrics.map((metric) => (
            <AnimatedBar key={metric.label} label={metric.label} value={metric.value} />
          ))}
        </div>
      </Container>
    </section>
  );
}