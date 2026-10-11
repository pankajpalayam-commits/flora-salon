import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "group relative rounded-2xl border border-flora-line bg-flora-white shadow-soft",
        "transition-[transform,box-shadow,border-color] duration-300 ease-premium",
        "hover:-translate-y-1 hover:border-flora-gold/50 hover:shadow-lift",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
