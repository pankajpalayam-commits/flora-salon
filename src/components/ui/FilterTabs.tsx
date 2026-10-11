"use client";

import { useState } from "react";
import { clsx } from "clsx";

interface FilterTabsProps<T extends string> {
  options: { label: string; value: T }[];
  onChange: (value: T) => void;
  defaultValue: T;
}

export function FilterTabs<T extends string>({
  options,
  onChange,
  defaultValue,
}: FilterTabsProps<T>) {
  const [active, setActive] = useState<T>(defaultValue);

  function handleClick(value: T) {
    setActive(value);
    onChange(value);
  }

  return (
    <div className="mb-12 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => handleClick(opt.value)}
          aria-pressed={active === opt.value}
          className={clsx(
            "min-h-[44px] cursor-pointer rounded-full border px-5 text-sm font-medium transition-colors duration-200 ease-premium",
            active === opt.value
              ? "border-flora-black bg-flora-black text-flora-white"
              : "border-flora-line bg-flora-white text-flora-grey-dark hover:border-flora-gold-deep hover:text-flora-gold-deep"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
