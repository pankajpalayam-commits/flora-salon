# FLORA Family Salon — Website

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's built so far

- Global layout: fonts (Fraunces + Inter), design tokens, Header (scroll-aware, dropdown, mobile drawer), Footer, floating WhatsApp button
- SEO: per-page metadata builder, LocalBusiness JSON-LD, sitemap.xml, robots.txt
- Home page: Hero, Why Choose FLORA, Services preview, Bridal showcase, Gallery preview, Testimonials, About teaser, Contact section with form
- Custom 404 page

## Next up

Services (overview + Hair/Skin subpages), Bridal, Gallery, About, Contact, Offers, Blog, Privacy Policy, Terms — each reusing the same `components/ui` and `components/layout` primitives already built.

## Before going live

1. Replace every placeholder image in `public/images/` with real salon photography.
2. Fill in real values in `src/config/site.ts` — phone, WhatsApp, email, Google Maps embed URL, and social links are currently placeholders.
3. Swap the hero placeholder for your salon video if you'd like a video hero.
4. Wire `ContactForm.tsx`'s submit handler to a real email/CRM/WhatsApp endpoint.
