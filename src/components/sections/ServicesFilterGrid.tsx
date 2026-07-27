"use client";

import { useState } from "react";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { services } from "@/lib/data/services";
import type { Service } from "@/types/service";

type Category = "all" | Service["category"];

export function ServicesFilterGrid() {
  const [category, setCategory] = useState<Category>("all");

  const filtered =
    category === "all"
      ? services
      : services.filter((s) => s.category === category);

  return (
    <>
      <FilterTabs<Category>
        defaultValue="all"
        onChange={setCategory}
        options={[
          { label: "All", value: "all" },
          { label: "Hair", value: "hair" },
          { label: "Skin", value: "skin" },
          { label: "Bridal", value: "bridal" },
        ]}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </>
  );
}
