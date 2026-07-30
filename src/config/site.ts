export const siteConfig = {
  name: "FLORA Unisex Family Salon and Makeover Collections",
  shortName: "FLORA",
  description:
    "FLORA Unisex Family Salon and Makeover Collections — a premium unisex family salon in Kilimanoor, Trivandrum, offering hair, skin and bridal services with a personalized, hygienic experience.",
  url: "https://www.florafamilysalon.com",
  ogImage: "/images/hero/flora-og-image.jpg",

  business: {
    legalName: "FLORA Unisex Family Salon and Makeover Collections",
    address: {
      streetAddress: "LS Plaza, Above DDRC Lab/Devi Opticians, Kilimanoor Junction",
      addressLocality: "Trivandrum",
      addressRegion: "Kerala",
      postalCode: "695601",
      addressCountry: "IN",
    },
    phone: "+91-98477-01117",
    phoneAlt: "+91-99477-01117",
    whatsapp: "+91-98477-01117",
    email: "info@florafamilysalon.com",
    hours: [
      { day: "Monday - Sunday", time: "9:30 AM - 9:00 PM" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.172565872949!2d76.87802997482979!3d8.76982969128152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c3004af0a545%3A0xdda5b56897404a9b!2sFLORA%20Unisex%20Family%20Salon%20and%20Makeover%20Collections!5e0!3m2!1sen!2sqa!4v1785182056287!5m2!1sen!2sqa",
    mapUrl:
      "https://www.google.com/maps/place/FLORA+Unisex+Family+Salon+and+Makeover+Collections/@8.76982969128152,76.87802997482979,17z",
    geo: {
      latitude: 8.76982969128152,
      longitude: 76.87802997482979,
    },
  },

  social: {
    instagram: "https://www.instagram.com/flora.family.salon",
    facebook: "https://www.facebook.com/people/Flora-Kilimanoor/61554724349679/",
    whatsapp: "https://wa.me/919847701117",
    googleReviews: "https://www.google.com/maps?cid=15971371114358131355",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Hair Treatments", href: "/services/hair-treatments" },
        { label: "Skin Treatments", href: "/services/skin-treatments" },
      ],
    },
    { label: "Bridal", href: "/bridal" },
    { label: "Gallery", href: "/gallery" },
    { label: "Offers", href: "/offers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] as Array<{
    label: string;
    href: string;
    children?: { label: string; href: string }[];
  }>,

  footerLinks: {
    quickLinks: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Bridal", href: "/bridal" },
      { label: "Gallery", href: "/gallery" },
      { label: "Offers", href: "/offers" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
