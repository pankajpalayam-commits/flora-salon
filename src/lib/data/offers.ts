export interface Offer {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  images: [string, string];
}

// EDIT THESE — update the description and valid-until date to match your real Onam offer details
export const offers: Offer[] = [
  {
    id: "onam-gents",
    title: "Onam Offer - Gents Package",
    description:
      "A festive Onam grooming package for men — haircut, facial and grooming essentials at a special price.",
    validUntil: "2026-09-15",
    images: ["/images/offers/onam-gents-1.jpg", "/images/offers/onam-gents-2.jpg"],
  },
  {
    id: "onam-ladies",
    title: "Onam Offer - Ladies Package",
    description:
      "A festive Onam beauty package for women — hair, skin and glow treatments bundled together this Onam.",
    validUntil: "2026-09-15",
    images: ["/images/offers/onam-ladies-1.jpg", "/images/offers/onam-ladies-2.jpg"],
  },
];