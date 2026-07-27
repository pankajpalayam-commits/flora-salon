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
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => handleClick(opt.value)}
          className={clsx(
            "rounded-full px-5 py-2 text-sm font-medium border transition-colors duration-200 ease-premium",
            active === opt.value
              ? "bg-flora-black text-flora-white border-flora-black"
              : "border-black/10 text-flora-grey-dark hover:border-flora-gold hover:text-flora-gold"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
