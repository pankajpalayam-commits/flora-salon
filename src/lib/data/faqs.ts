import { siteConfig } from "@/config/site";
import { services } from "@/lib/data/services";
import { formatRupees } from "@/lib/format";

export interface Faq {
  question: string;
  answer: string;
}

const { business } = siteConfig;
const address = `${business.address.streetAddress}, ${business.address.addressLocality}, ${business.address.addressRegion} ${business.address.postalCode}`;

const from = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  return s?.priceFrom ? formatRupees(s.priceFrom) : "";
};

// Answers use only facts confirmed by the salon (October 2026).
// Confirm any new answer with the owner before adding it.
export const generalFaqs: Faq[] = [
  {
    question: "What are FLORA's opening hours?",
    answer: `FLORA is open every day, ${business.hours[0].time} — including weekends, public holidays and festival days.`,
  },
  {
    question: "Where is FLORA located? Is there parking?",
    answer: `FLORA is on the first floor of LS Plaza, ${address} — above DDRC Lab and Devi Opticians at Kilimanoor Junction. Parking is available.`,
  },
  {
    question: "Do I need an appointment, or can I walk in?",
    answer: `Both are welcome. To be sure of your preferred time, book ahead by calling ${business.phone} or ${business.phoneAlt}, messaging us on WhatsApp at ${business.whatsapp}, or sending a request through the contact form on this website.`,
  },
  {
    question: "How much do your services cost?",
    answer: `Haircuts start from ${from("haircut")}, threading from ${from("threading")}, cleanup from ${from("cleanup")}, de-tan from ${from("detan")}, facials and hair spa from ${from("facials")}, Hydra Facial from ${from("hydra-facial")}, hair colour from ${from("hair-colour")} per streak, party and groom makeup from ${from("party-makeup")}, and bridal makeup from ${from("bridal-makeup")}. Keratin, Hair Botox and Nanoplastia are priced by hair length — ask us for a quote.`,
  },
  {
    question: "Which payment methods do you accept?",
    answer: "We accept cash and UPI.",
  },
  {
    question: "Is FLORA a salon for women only?",
    answer:
      "No. FLORA is a unisex family salon with separate sections for men and women, and we cut children's hair from age 1.",
  },
  {
    question: "Which languages does your team speak?",
    answer: "Our team speaks Malayalam, English, Hindi and Tamil.",
  },
  {
    question: "Should I choose Hair Botox, Keratin or Nanoplastia?",
    answer:
      "Hair Botox suits dry, damaged hair that needs deep repair. Keratin is best if frizz control and long-lasting smoothness are your priority — it lasts about 60 washes. Nanoplastia is a gentler, formaldehyde-free smoothing option. Our stylists will recommend one after looking at your hair.",
  },
  {
    question: "What products do you use?",
    answer: "We use premium professional products for all hair, skin and makeup services.",
  },
];

export const bridalFaqs: Faq[] = [
  {
    question: "What bridal makeup services does FLORA offer?",
    answer: `HD and airbrush bridal makeup (from ${from("bridal-makeup")}), engagement and reception makeup, groom makeup (from ${from("groom-makeup")}), and makeup for the bride's family and bridesmaids. Bridal packages include hair styling, saree draping and jewellery setting.`,
  },
  {
    question: "Do you come to the bride's home or the wedding venue?",
    answer:
      "Yes. Bridal makeup can be done at the salon, at the bride's home or at the venue, at no extra charge.",
  },
  {
    question: "Is the bridal makeup trial free?",
    answer:
      "Yes, the trial is free. It lets you see your look in person and in photos and fine-tune details like lip colour and eye intensity before the wedding.",
  },
  {
    question: "What is the difference between HD and airbrush bridal makeup?",
    answer:
      "HD makeup uses fine, high-definition products that look natural in close-up photos and video. Airbrush makeup is sprayed on in thin layers for a lightweight, long-lasting finish that holds up through long ceremonies.",
  },
  {
    question: "How early should I book bridal makeup?",
    answer:
      "Many brides book up to a year ahead, so reserve your date as early as you can — especially in the wedding season. Plan the trial at least a month before the wedding, and start pre-bridal skin care two to three months ahead.",
  },
];
