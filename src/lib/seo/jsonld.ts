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

export function buildLocalBusinessSchema() {
  const { business } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
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
        opens: to24Hour(h.time.split(" - ")[0]),
        closes: to24Hour(h.time.split(" - ")[1]),
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