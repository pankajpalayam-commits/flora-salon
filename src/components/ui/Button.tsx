import Link from "next/link";
import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ease-premium";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-flora-black text-flora-white hover:bg-flora-gold hover:text-flora-black",
  ghost:
    "border border-flora-black text-flora-black hover:border-flora-gold hover:text-flora-gold",
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
