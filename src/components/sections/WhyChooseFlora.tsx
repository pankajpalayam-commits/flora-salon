"use client";

import { useRef } from "react";
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

function MetricBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-caption uppercase text-flora-muted">{label}</span>
        <span className="font-display text-h3 text-flora-black tabular-nums">{value}%</span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-flora-line"
        role="meter"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* scaleX keeps the animation on the compositor — no layout work */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? value / 100 : 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="h-full w-full origin-left rounded-full bg-flora-gold-deep"
        />
      </div>
    </div>
  );
}

export function WhyChooseFlora() {
  return (
    <section className="bg-flora-ivory py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why FLORA"
            title="Care you can see, comfort you can feel"
            description="A family salon in Kilimanoor where every visit starts with listening — and ends with a result you love."
            className="!mb-10"
          />
          <div className="space-y-6 rounded-2xl border border-flora-line bg-flora-white p-6 shadow-soft md:p-8">
            {metrics.map((metric) => (
              <MetricBar key={metric.label} label={metric.label} value={metric.value} />
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.li
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.4, 0, 0.2, 1] }}
                className="border-t border-flora-line py-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-flora-gold-soft">
                  <Icon className="h-6 w-6 text-flora-gold-deep" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-h3 mb-2">{reason.title}</h3>
                <p className="text-flora-muted">{reason.description}</p>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
