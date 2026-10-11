import Link from "next/link";
import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "gold" | "ghost" | "ghost-light";

const baseStyles =
  "inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ease-premium disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<Variant, string> = {
  // Ink button for light surfaces
  primary:
    "bg-flora-black text-flora-white hover:bg-flora-gold-deep",
  // Gold button for dark surfaces
  gold:
    "bg-flora-gold text-flora-black hover:bg-flora-gold-soft",
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
}

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  variant?: Variant;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "primary", className, ...rest } = props;
  const classes = clsx(baseStyles, variantStyles[variant], className);

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
