"use client";

/*
 * Adapted from 21st.dev "Testimonial Section" by uvain
 * (https://21st.dev/@uvain/components/pastel-testimonial-section):
 * a snap-scrolling row of review cards with an edge fade that only shows on
 * the side that still has hidden cards, prev/next controls, and one card
 * expanded at a time. Restyled to FLORA's ivory & gold, with initials in
 * place of the generated portraits.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/data/testimonials";
import { siteConfig } from "@/config/site";
import type { Testimonial } from "@/types/testimonial";

/** Quotes longer than this get a "Read more" toggle. */
const CLAMP_AT = 150;
/** Where the edge fade starts, as a share of the track width. */
const FADE = "6%";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [openId, setOpenId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const syncEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    syncEdges();
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(syncEdges);
    ro.observe(el);
    return () => ro.disconnect();
  }, [syncEdges]);

  function scrollByCard(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li") as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: reduceMotion ? "auto" : "smooth" });
  }

  const stops = [
    `transparent 0%, #000 ${atStart ? "0%" : FADE}`,
    `#000 ${atEnd ? "100%" : `calc(100% - ${FADE})`}, transparent 100%`,
  ].join(", ");
  const mask = atStart && atEnd ? undefined : `linear-gradient(to right, ${stops})`;

  return (
    <section className="overflow-hidden bg-flora-grey-light py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by families across Kilimanoor"
            className="!mb-0"
          />
          <div className="flex items-center gap-3">
            <NavButton onClick={() => scrollByCard(-1)} disabled={atStart} label="Previous reviews">
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </NavButton>
            <NavButton onClick={() => scrollByCard(1)} disabled={atEnd} label="Next reviews">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </NavButton>
          </div>
        </div>

        <ul
          ref={trackRef}
          onScroll={syncEdges}
          aria-label="Client reviews"
          tabIndex={0}
          style={mask ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
          className="-mx-2 flex snap-x snap-mandatory scroll-px-2 gap-5 overflow-x-auto px-2 pb-4 [scrollbar-width:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flora-gold-deep [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <ReviewCard
              key={t.id}
              item={t}
              open={openId === t.id}
              onToggle={() => setOpenId((cur) => (cur === t.id ? null : t.id))}
            />
          ))}
        </ul>

        <p className="mt-10 text-center">
          <a
            href={siteConfig.social.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-flora-black underline decoration-flora-gold-deep/40 underline-offset-4 hover:text-flora-gold-deep"
          >
            Read all our reviews on Google
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </p>
      </Container>
    </section>
  );
}

function ReviewCard({
  item,
  open,
  onToggle,
}: {
  item: Testimonial;
  open: boolean;
  onToggle: () => void;
}) {
  const long = item.quote.length > CLAMP_AT;
  const quoteId = `review-${item.id}`;

  return (
    <motion.li
      layout="position"
      className="relative flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-flora-line bg-flora-white p-7 shadow-soft sm:w-[360px]"
    >
      <Quote className="absolute right-6 top-6 h-8 w-8 text-flora-gold-soft" aria-hidden="true" />
      <StarRating rating={item.rating} />
      <blockquote className="mb-6 mt-5">
        <p
          id={quoteId}
          className={`font-display text-lg leading-relaxed text-flora-black ${
            long && !open ? "line-clamp-4" : ""
          }`}
        >
          &ldquo;{item.quote}&rdquo;
        </p>
      </blockquote>
      {long && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={quoteId}
          className="mt-2 inline-flex min-h-[44px] cursor-pointer items-center self-start text-sm font-medium text-flora-gold-deep hover:underline"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
      <div className="mt-auto flex items-center gap-3 border-t border-flora-line pt-5">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt="" className="h-11 w-11 rounded-full object-cover" />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-flora-gold-soft font-display text-sm text-flora-gold-deep"
          >
            {initials(item.name)}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-flora-black">{item.name}</p>
          <p className="truncate text-xs text-flora-muted">
            {item.service ?? "Google review"}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

function NavButton({
  onClick,
  disabled,
  label,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-flora-black/20 bg-flora-white text-flora-black transition-colors duration-200 enabled:hover:border-flora-black enabled:hover:bg-flora-black enabled:hover:text-flora-white disabled:cursor-not-allowed disabled:opacity-35"
    >
      {children}
    </button>
  );
}
