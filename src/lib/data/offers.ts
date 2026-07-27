export interface Offer {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  image: string;
}

export const offers: Offer[] = [
  {
    id: "o1",
    title: "Bridal Package Offer",
    description: "Complimentary trial session with every full bridal package booking.",
    validUntil: "2026-12-31",
    image: "/images/bridal/offer-bridal.jpg",
  },
  {
    id: "o2",
    title: "Hair Spa + Facial Combo",
    description: "Book a hair spa and facial together and save on both services.",
    validUntil: "2026-12-31",
    image: "/images/services/offer-combo.jpg",
  },
];
