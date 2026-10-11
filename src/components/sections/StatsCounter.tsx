"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

// EDIT THESE — replace with your real numbers
const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Happy Clients", value: 6000, suffix: "+" },
  { label: "Services Offered", value: 45, suffix: "+" },
  { label: "5-Star Reviews", value: 500, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const duration = 1500;
    const startTime = performance.now();
    let frame = 0;

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="border-b border-flora-line bg-flora-ivory py-14 md:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-flora-line">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center justify-end text-center md:px-6">
              <dt className="mt-2 text-caption uppercase text-flora-muted">
                {stat.label}
              </dt>
              <dd className="font-display text-h2 text-flora-black">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
