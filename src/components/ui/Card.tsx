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
        "group rounded-xl bg-flora-white border border-black/5 shadow-sm",
        "transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
