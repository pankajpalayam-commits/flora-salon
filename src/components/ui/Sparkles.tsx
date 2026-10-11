import { clsx } from "clsx";

// Fixed positions (not Math.random) so server and client render the same.
const POINTS = [
  [8, 22, 0.0, 3], [18, 68, 1.2, 2], [27, 14, 2.4, 2], [35, 82, 0.6, 3],
  [44, 30, 1.8, 2], [52, 74, 2.9, 2], [61, 18, 0.3, 3], [69, 58, 1.5, 2],
  [76, 26, 2.2, 2], [84, 76, 0.9, 3], [91, 40, 2.7, 2], [12, 48, 1.1, 2],
  [57, 44, 3.1, 2], [88, 12, 1.7, 2], [3, 84, 2.5, 2], [96, 64, 0.4, 2],
] as const;

interface SparklesProps {
  className?: string;
  /** How many of the preset points to draw (max 16). */
  count?: number;
}

/** Tiny gold points of light that twinkle in and out. Decorative only. */
export function Sparkles({ className, count = 16 }: SparklesProps) {
  return (
    <div aria-hidden="true" className={clsx("pointer-events-none absolute inset-0", className)}>
      {POINTS.slice(0, count).map(([x, y, delay, size], i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-flora-gold shadow-[0_0_8px_2px_rgb(212_175_55/0.6)]"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            animationDelay: `${delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
