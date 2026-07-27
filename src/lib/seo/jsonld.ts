import { siteConfig } from "@/config/site";

const ALL_WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function buildLocalBusinessSchema() {
  const { business } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
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
    openingHoursSpecification: business.hours
      .filter((h) => h.time.toLowerCase() !== "closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek:
          h.day.trim() === "Monday - Sunday" ? ALL_WEEK_DAYS : h.day,
        opens: h.time.split(" - ")[0],
        closes: h.time.split(" - ")[1],
      })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
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
