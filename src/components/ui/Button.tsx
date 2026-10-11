import Link from "next/link";
import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "gold" | "ghost" | "ghost-light";

const baseStyles =
  "inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-[background-color,color,border-color,box-shadow] duration-300 ease-premium disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<Variant, string> = {
  // Ink button for light surfaces
  primary:
    "sheen bg-flora-black text-flora-white hover:bg-flora-gold-deep",
  // Gold button for dark surfaces — with a soft halo of light
  gold:
    "sheen bg-gradient-to-b from-flora-gold-light to-flora-gold text-flora-black shadow-[0_0_0_1px_rgb(212_175_55/0.4),0_8px_30px_-6px_rgb(212_175_55/0.55)] hover:shadow-[0_0_0_1px_rgb(212_175_55/0.6),0_10px_40px_-4px_rgb(212_175_55/0.8)]",
  // Outline for light surfaces
  ghost:
    "border border-flora-black/80 text-flora-black hover:bg-flora-black hover:text-flora-white",
  // Outline for dark surfaces
  "ghost-light":
    "border border-flora-white/40 text-flora-white hover:border-flora-gold hover:text-flora-gold",
};

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  /** Let the light sheen pass across by itself every few seconds. */
  shine?: boolean;
}

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  variant?: Variant;
  shine?: boolean;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "primary", shine = false, className, ...rest } = props;
  const classes = clsx(baseStyles, variantStyles[variant], shine && "sheen sheen-auto", className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {props.children}
    </button>
  );
}
