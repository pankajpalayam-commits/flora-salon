import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

export function Container({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("mx-auto max-w-content px-6 md:px-10", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
