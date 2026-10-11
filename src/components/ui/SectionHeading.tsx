import { clsx } from "clsx";
import { AnimatedDivider } from "./AnimatedDivider";
import { RevealText } from "./RevealText";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={clsx(
        "mb-12 md:mb-16",
        isCenter && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <p
        className={clsx(
          "text-caption uppercase font-medium mb-3",
          isDark ? "text-flora-gold" : "text-flora-gold-deep"
        )}
      >
        {eyebrow}
      </p>
      <AnimatedDivider align={align} className="mb-5" />
      <h2 className={clsx("text-h2", isDark && "text-flora-white")}>
        <RevealText text={title} />
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 max-w-2xl text-lg",
            isDark ? "text-flora-white/75" : "text-flora-muted",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
