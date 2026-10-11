"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Clock, MapPin, Pause, Phone, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "@/components/ui/Sparkles";
import { useSpotlight } from "@/lib/hooks/useSpotlight";
import { siteConfig } from "@/config/site";

// EDIT THESE — each slide is a 3-line headline + one subheading line.
// The middle line is set in gold italic. Rotates every 6 seconds.
const slides = [
  {
    lines: ["Beautiful Hair.", "Healthy Skin.", "Confident You."],
    sub: "Premium hair, skin & bridal services in Kilimanoor, Trivandrum.",
  },
  {
    lines: ["Bridal Looks,", "Beautifully", "Crafted."],
    sub: "HD & airbrush bridal makeup artists in Trivandrum.",
  },
  {
    lines: ["Kilimanoor's", "Trusted Family", "Salon."],
    sub: "Experienced professionals. Premium products. Hygienic care.",
  },
];

const AUTO_ADVANCE_MS = 6000;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const trackSpotlight = useSpotlight<HTMLElement>();

  // As the hero scrolls away, its content lifts and fades slightly.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Rotation stops when the visitor pauses it, hovers/focuses the hero,
  // or has "reduce motion" switched on.
  const rotating = !paused && !hovered && !reduceMotion;

  useEffect(() => {
    if (!rotating) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [rotating]);

  // The pause control also stops the background video.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (paused || reduceMotion) video.pause();
    else video.play().catch(() => {});
  }, [paused, reduceMotion]);

  const current = slides[index];
  const { business } = siteConfig;

  return (
    <section
      ref={sectionRef}
      onPointerMove={trackSpotlight}
      className="spotlight-hero on-dark relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-flora-black"
      aria-roledescription="carousel"
      aria-label="FLORA highlights"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero/hero-placeholder.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-flora-black/70 via-flora-black/55 to-flora-black"
      />
      {/* Lighting: two slow-drifting gold glows, a cursor spotlight and sparkles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-flora-gold/15 blur-[110px]" />
        <div className="animate-drift-slow absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-flora-amber/25 blur-[120px]" />
        <div className="animate-glow-pulse absolute left-1/2 top-[38%] h-[360px] w-[720px] -translate-x-1/2 rounded-[100%] bg-flora-gold/10 blur-[90px]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [.spotlight-hero:hover_&]:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 40%), rgb(212 175 55 / 0.16), transparent 50%)",
        }}
      />
      <Sparkles />

      <motion.div
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col items-center justify-center px-6 pb-12 pt-32 text-center md:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-flora-gold/40 bg-flora-black/40 px-4 py-2 text-caption uppercase text-flora-gold backdrop-blur"
        >
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          Unisex Family Salon · Kilimanoor
        </motion.p>

        <div className="relative min-h-[11rem] w-full sm:min-h-[13rem] md:min-h-[17rem]" aria-live={rotating ? "off" : "polite"}>
          {/* initial={false}: the first headline is painted immediately (it's
              the page's main content for Google's LCP metric and for crawlers
              that don't run JavaScript); later slides animate in. */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <h1 className="text-h1 text-flora-white">
                {current.lines.map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-[0.08em]">
                    <motion.span
                      className={i === 1 ? "text-shimmer block pr-[0.1em] italic" : "block"}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {line}
                    </motion.span>
                    {i < current.lines.length - 1 && " "}
                  </span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mx-auto mt-6 max-w-xl text-lg text-flora-white/80"
              >
                {current.sub}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/contact" variant="gold" shine className="px-9">
            Book Appointment
          </Button>
          <Button
            href={siteConfig.social.whatsapp}
            variant="ghost-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </Button>
        </motion.div>

        <a
          href={`tel:${business.phone}`}
          className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm text-flora-white/75 hover:text-flora-gold"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Or call {business.phone}
        </a>

        <div className="mt-8 flex items-center gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className="group inline-flex h-11 w-8 cursor-pointer items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-flora-gold" : "w-1.5 bg-flora-white/40 group-hover:bg-flora-white/70"
                }`}
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow and video" : "Pause slideshow and video"}
            className="ml-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-flora-white/70 hover:bg-flora-white/10 hover:text-flora-white"
          >
            {paused ? (
              <Play className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Pause className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Trust strip */}
      <div className="relative z-10 border-t border-flora-white/10 bg-flora-black/60 backdrop-blur">
        <ul className="mx-auto grid max-w-content grid-cols-1 gap-3 px-6 py-5 text-sm text-flora-white/80 sm:grid-cols-3 md:px-10">
          <li className="flex items-center justify-center gap-2">
            <span className="flex text-flora-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <a href={siteConfig.social.googleReviews} target="_blank" rel="noopener noreferrer" className="hover:text-flora-gold">
              500+ five-star Google reviews
            </a>
          </li>
          <li className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-flora-gold" aria-hidden="true" />
            Open daily · {business.hours[0].time}
          </li>
          <li className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 text-flora-gold" aria-hidden="true" />
            Kilimanoor Junction, Trivandrum
          </li>
        </ul>
      </div>
    </section>
  );
}
