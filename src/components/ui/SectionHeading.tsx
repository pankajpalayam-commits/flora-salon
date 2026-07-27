import { clsx } from "clsx";
import { AnimatedDivider } from "./AnimatedDivider";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={clsx("mb-12 md:mb-16", isCenter && "text-center", className)}>
      <p className="text-caption uppercase text-flora-gold font-medium mb-3">
        {eyebrow}
      </p>
      <AnimatedDivider align={align} className="mb-5" />
      <h2 className="text-h2 font-display">{title}</h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-flora-grey-dark max-w-2xl",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
