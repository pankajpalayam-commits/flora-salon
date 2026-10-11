"use client";

import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import { useSpotlight } from "@/lib/hooks/useSpotlight";

export function Card({
  className,
  children,
  onPointerMove,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const trackSpotlight = useSpotlight<HTMLDivElement>();

  return (
    <div
      onPointerMove={(e) => {
        trackSpotlight(e);
        onPointerMove?.(e);
      }}
      className={clsx(
        "spotlight group relative rounded-2xl border border-flora-line bg-flora-white shadow-soft",
        "transition-[transform,box-shadow] duration-300 ease-premium",
        "hover:-translate-y-1 hover:shadow-[0_2px_4px_rgb(22_18_15/0.05),0_24px_48px_-20px_rgb(122_92_26/0.35)]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
