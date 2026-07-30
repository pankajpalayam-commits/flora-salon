"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

// EDIT THESE — replace with your real numbers
const stats = [
  { label: "Years of Experience", value: 3+, suffix: "+" },
  { label: "Happy Clients", value: 6000+, suffix: "+" },
  { label: "Services Offered", value: 45+, suffix: "+" },
  { label: "5-Star Reviews", value: 500+, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
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
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="bg-flora-black py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-h2 text-flora-gold">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-flora-white/70 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
