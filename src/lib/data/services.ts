import type { Service } from "@/types/service";

// PRICES: `priceFrom: 1500` (rupees) shows "From ₹1,500" on the site and
// in the data Google and AI assistants read. `priceNote` adds a short note
// ("per streak") or stands alone when there's no fixed price.

export const services: Service[] = [
  {
    slug: "bridal-makeup",
    name: "Bridal Makeup",
    category: "bridal",
    shortDescription: "Timeless bridal looks crafted for your big day.",
    details:
      "Complete wedding-day makeup in HD or airbrush finish, planned around your outfit, jewellery, skin tone and the lighting of your venue. Packages include hair styling, saree draping and jewellery setting, and the trial session is free. Available at the salon, at home or at your venue at no extra charge.",
    priceFrom: 12999,
    image: "/images/services/bridal-makeup.jpg",
  },
  {
    slug: "groom-makeup",
    name: "Groom Makeup",
    category: "bridal",
    shortDescription: "Sharp, camera-ready grooming for the groom.",
    details:
      "Light, natural-looking grooming for the groom — skin prep, even tone and a matte finish that holds up under stage lights and in close-up photographs, without looking made-up.",
    priceFrom: 3499,
    image: "/images/services/groom-makeup.jpg",
  },
  {
    slug: "party-makeup",
    name: "Party Makeup",
    category: "bridal",
    shortDescription: "Glamorous makeup for every celebration.",
    details:
      "Event-ready makeup for receptions, engagements, birthdays and festivals, from soft and natural to full glam, finished to last through the evening.",
    priceFrom: 3499,
    image: "/images/services/party-makeup.jpg",
  },
  {
    slug: "haircut",
    name: "Haircut",
    category: "hair",
    shortDescription: "Precision cuts tailored to your face shape and lifestyle.",
    details:
      "Haircuts and styling for men, women and children (from age 1), in separate sections for men and women. Your stylist looks at your face shape, hair texture and how much time you spend styling each day before suggesting a cut.",
    priceFrom: 120,
    image: "/images/services/haircut.jpg",
  },
  {
    slug: "hair-colour",
    name: "Hair Colour",
    category: "hair",
    shortDescription: "Global colour, balayage and highlights using premium products.",
    details:
      "Global colour, highlights, balayage and grey coverage using professional salon colour. We check your current colour and hair condition first so the result is even and the hair stays healthy.",
    priceFrom: 199,
    priceNote: "per streak",
    image: "/images/services/hair-colour.jpg",
  },
  {
    slug: "keratin",
    name: "Keratin Treatment",
    category: "hair",
    shortDescription: "Smooth, frizz-free hair that lasts about 60 washes.",
    details:
      "A smoothing treatment that coats the hair with keratin protein to reduce frizz and make hair easier to manage. Results last about 60 washes with the right aftercare.",
    priceNote: "Price depends on hair length",
    image: "/images/services/keratin.jpg",
  },
  {
    slug: "hair-botox",
    name: "Hair Botox",
    category: "hair",
    shortDescription: "Deep repair treatment for damaged, dull hair.",
    details:
      "A deep-conditioning repair treatment for dry, damaged or chemically treated hair. It fills in rough, porous areas of the hair strand to bring back softness and shine — it does not use botulinum toxin.",
    priceNote: "Price depends on hair length",
    image: "/images/services/hair-botox.jpg",
  },
  {
    slug: "nanoplastia",
    name: "Nanoplastia",
    category: "hair",
    shortDescription: "Gentle, formaldehyde-free smoothing for natural-looking results.",
    details:
      "A gentler, formaldehyde-free smoothing treatment that straightens and de-frizzes while keeping a natural look. A good option if you want smoother hair with less chemical exposure than traditional straightening.",
    priceNote: "Price depends on hair length",
    image: "/images/services/nanoplastia.jpg",
  },
  {
    slug: "hair-spa",
    name: "Hair Spa",
    category: "hair",
    shortDescription: "Nourishing therapy to restore shine and strength.",
    details:
      "A relaxing nourishing treatment — cleanse, deep-conditioning mask, steam and scalp massage — to restore moisture, reduce breakage and improve shine.",
    priceFrom: 800,
    image: "/images/services/hair-spa.jpg",
  },
  {
    slug: "facials",
    name: "Facials",
    category: "skin",
    shortDescription: "Customized facials for every skin type and concern.",
    details:
      "Facials matched to your skin type and concern — dryness, dullness, oiliness or uneven tone — starting with a quick skin check so the products suit your skin.",
    priceFrom: 800,
    image: "/images/services/facials.jpg",
  },
  {
    slug: "hydra-facial",
    name: "Hydra Facial",
    category: "skin",
    shortDescription: "Deep cleansing and hydration for instantly radiant skin.",
    details:
      "A multi-step facial that cleanses, exfoliates, extracts and deeply hydrates in one session. Popular before weddings and events for instant glow with little downtime.",
    priceFrom: 2500,
    image: "/images/services/hydra-facial.jpg",
  },
  {
    slug: "cleanup",
    name: "Cleanup",
    category: "skin",
    shortDescription: "A quick refresh to remove impurities and dead skin.",
    details:
      "A short skin refresh: cleansing, gentle exfoliation and removal of blackheads and impurities. Ideal between facials or as regular upkeep.",
    priceFrom: 400,
    image: "/images/services/cleanup.jpg",
  },
  {
    slug: "detan",
    name: "De-Tan",
    category: "skin",
    shortDescription: "Reverse sun damage and even out your skin tone.",
    details:
      "A de-tan treatment that helps lift sun tan and even out skin tone on the face, neck, arms or full body.",
    priceFrom: 300,
    image: "/images/services/detan.jpg",
  },
  {
    slug: "waxing",
    name: "Waxing",
    category: "skin",
    shortDescription: "Smooth, long-lasting hair removal in a hygienic setting.",
    details:
      "Hygienic hair removal for face and body using salon-grade wax, with care taken for sensitive skin.",
    image: "/images/services/waxing.jpg",
  },
  {
    slug: "threading",
    name: "Threading",
    category: "skin",
    shortDescription: "Precise, gentle shaping for brows and facial hair.",
    details:
      "Precise eyebrow shaping and facial hair removal with thread — quick, gentle and accurate.",
    priceFrom: 50,
    image: "/images/services/threading.jpg",
  },
];
