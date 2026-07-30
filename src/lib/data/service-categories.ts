export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "haircuts-styling",
    title: "Haircuts & Styling",
    description:
      "Trendy, classic or custom — precision cuts tailored to your face shape and lifestyle, for every member of the family.",
    href: "/services/hair-treatments#haircut",
  },
  {
    slug: "hair-color",
    title: "Hair Color Services",
    description:
      "Global colour, balayage and highlights using safe, professional-grade products for head-turning results.",
    href: "/services/hair-treatments#hair-colour",
  },
  {
    slug: "hair-scalp-treatments",
    title: "Hair & Scalp Treatments",
    description:
      "Keratin, Hair Botox, Nanoplastia and Hair Spa therapies to repair damage and restore strength and shine.",
    href: "/services/hair-treatments",
  },
  {
    slug: "bridal-event-styling",
    title: "Bridal & Event Styling",
    description:
      "HD and airbrush bridal makeup, engagement and reception looks, and complete wedding packages.",
    href: "/bridal",
  },
  {
    slug: "skin-facial-treatments",
    title: "Skin & Facial Treatments",
    description:
      "Customized facials, Hydra Facials, cleanups and de-tan treatments to keep your skin healthy and radiant.",
    href: "/services/skin-treatments",
  },
  {
    slug: "waxing-threading",
    title: "Waxing & Threading",
    description:
      "Smooth, hygienic and gentle hair removal for face and body, tailored to your skin's sensitivity.",
    href: "/services/skin-treatments#waxing",
  },
  {
    slug: "family-salon",
    title: "Kids & Family Salon Services",
    description:
      "Haircuts and grooming for men, women and children — making beauty a family affair at our unisex salon.",
    href: "/about",
  },
];