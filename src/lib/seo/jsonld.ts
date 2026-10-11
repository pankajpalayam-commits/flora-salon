import { siteConfig } from "@/config/site";
import type { Faq } from "@/lib/data/faqs";
import type { Service } from "@/types/service";
import type { BlogPost } from "@/lib/data/blog";

const ALL_WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/** Stable id so other schema blocks can point at the business. */
export const BUSINESS_ID = `${siteConfig.url}/#salon`;

// schema.org requires opens/closes in 24-hour "HH:MM" format — this converts
// our human-readable "9:30 AM" style strings (used for on-page display) into
// that format for the JSON-LD only.
function to24Hour(time12h: string): string {
  const match = time12h.trim().match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/i);
  if (!match) return time12h;
  const [, hoursStr, minutes, meridiem] = match;
  let hours = parseInt(hoursStr, 10);
  if (meridiem.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (meridiem.toUpperCase() === "AM" && hours === 12) hours = 0;
  return `${String(hours).padStart(2, "0")}:${minutes}`;
}

function serviceOffer(service: Service) {
  return {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.details,
      provider: { "@id": BUSINESS_ID },
    },
    ...(service.priceFrom
      ? {
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: service.priceFrom,
            priceCurrency: "INR",
            ...(service.priceNote ? { description: service.priceNote } : {}),
          },
        }
      : service.priceNote
        ? { description: service.priceNote }
        : {}),
  };
}

export function buildLocalBusinessSchema(services: Service[] = []) {
  const { business } = siteConfig;

  const catalog = (["hair", "skin", "bridal"] as const).map((category) => ({
    "@type": "OfferCatalog",
    name: { hair: "Hair services", skin: "Skin services", bridal: "Bridal & makeup" }[category],
    itemListElement: services.filter((s) => s.category === category).map(serviceOffer),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": BUSINESS_ID,
    name: siteConfig.name,
    alternateName: "FLORA Family Salon",
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/flora-logo-hires.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: "₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    knowsLanguage: ["ml", "en", "hi", "ta"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Parking available", value: true },
      { "@type": "LocationFeatureSpecification", name: "Separate sections for men and women", value: true },
      { "@type": "LocationFeatureSpecification", name: "Walk-ins welcome", value: true },
    ],
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.mapUrl,
    areaServed: ["Kilimanoor", "Thiruvananthapuram", "Kerala"].map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: business.hours
      .filter((h) => h.time.toLowerCase() !== "closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek:
          h.day.trim() === "Monday - Sunday" ? ALL_WEEK_DAYS : h.day,
        opens: to24Hour(h.time.split(" - ")[0]),
        closes: to24Hour(h.time.split(" - ")[1]),
      })),
    ...(services.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Salon services",
            itemListElement: catalog,
          },
        }
      : {}),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.googleReviews],
  };
}

export function buildFaqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: url,
    url,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-IN",
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
