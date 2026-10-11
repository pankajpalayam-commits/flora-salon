import { siteConfig } from "@/config/site";
import { services } from "@/lib/data/services";
import { bridalFaqs, generalFaqs } from "@/lib/data/faqs";
import { blogPosts } from "@/lib/data/blog";
import { formatPrice } from "@/lib/format";

// /llms.txt — a plain-Markdown summary of the business for AI assistants
// and agents (https://llmstxt.org). Built from the same data as the site,
// so it never drifts out of date.
export const dynamic = "force-static";

export function GET() {
  const { business, social, url } = siteConfig;
  const address = `${business.address.streetAddress}, ${business.address.addressLocality}, ${business.address.addressRegion} ${business.address.postalCode}, India`;

  const serviceLines = (category: "hair" | "skin" | "bridal") =>
    services
      .filter((s) => s.category === category)
      .map((s) => {
        const price = formatPrice(s.priceFrom, s.priceNote);
        return `- **${s.name}**${price ? ` (${price})` : ""}: ${s.details}`;
      })
      .join("\n");

  const faqLines = [...generalFaqs, ...bridalFaqs]
    .map((f) => `### ${f.question}\n${f.answer}`)
    .join("\n\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

## Key facts

- Type: Unisex family beauty salon and bridal makeup studio (men, women and children)
- Address: ${address}
- Map: ${business.mapUrl}
- Phone: ${business.phone} / ${business.phoneAlt}
- WhatsApp: ${business.whatsapp} (${social.whatsapp})
- Email: ${business.email}
- Hours: ${business.hours.map((h) => `${h.day}, ${h.time}`).join("; ")} — open every day, including public holidays and festivals
- Location: first floor of LS Plaza; parking available
- Booking: walk-ins welcome, or book by phone, WhatsApp, or the request form at ${url}/contact
- Payment: cash and UPI
- Languages spoken: Malayalam, English, Hindi, Tamil
- Separate sections for men and women; children's haircuts from age 1
- Bridal: free trial; makeup at the salon, at home or at the venue with no extra charge; packages include hair styling, saree draping and jewellery setting
- Reviews: ${social.googleReviews}
- Instagram: ${social.instagram}
- Facebook: ${social.facebook}

## Hair services

${serviceLines("hair")}

## Skin services

${serviceLines("skin")}

## Bridal & makeup

${serviceLines("bridal")}

## Frequently asked questions

${faqLines}

## Pages

- [Home](${url}/): overview, services, reviews, contact
- [Services](${url}/services): all service categories
- [Hair treatments](${url}/services/hair-treatments): Keratin, Hair Botox, Nanoplastia, colour, cuts, hair spa
- [Skin treatments](${url}/services/skin-treatments): facials, Hydra Facial, cleanup, de-tan, waxing, threading
- [Bridal](${url}/bridal): HD and airbrush bridal makeup, packages, bridal FAQ
- [Offers](${url}/offers): current offers and packages
- [Gallery](${url}/gallery): photos of recent work
- [About](${url}/about): story, mission and team
- [Contact](${url}/contact): address, map, phone, appointment request form

## Blog

${blogPosts.map((p) => `- [${p.title}](${url}/blog/${p.slug}): ${p.excerpt}`).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
