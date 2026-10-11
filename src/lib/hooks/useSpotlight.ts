"use client";

import { useCallback } from "react";

/**
 * Pointer handler for the `.spotlight` effect: writes the cursor position
 * into --spot-x / --spot-y on the element, without a React re-render.
 * Touch input is ignored — the glow is a mouse-only flourish.
 */
export function useSpotlight<T extends HTMLElement>() {
  return useCallback((e: React.PointerEvent<T>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }, []);
}
