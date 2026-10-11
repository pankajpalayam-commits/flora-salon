export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  /** Set when a post is meaningfully revised (YYYY-MM-DD). */
  updated?: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-hair-treatment",
    title: "How to Choose the Right Hair Treatment for Your Hair Type",
    excerpt:
      "Hair Botox, Keratin or Nanoplastia? Here's how to decide which hair treatment in Kilimanoor is right for you.",
    date: "2026-01-12",
    updated: "2026-10-11",
    image: "/images/services/hair-botox.jpg",
    content: [
      "Choosing between Hair Botox, Keratin and Nanoplastia can feel overwhelming, especially with so many options now available at salons in Trivandrum. Each treatment addresses different concerns, and the right choice depends on your hair type, damage level and the look you want to maintain.",
      "Hair Botox works best for dry, damaged hair that needs deep conditioning and repair. Keratin treatments are ideal if frizz control and long-term smoothness are your main goals. Nanoplastia, a gentler and formaldehyde-free option, suits those who want smoothing without heavy chemical exposure.",
      "At FLORA in Kilimanoor, every hair treatment starts with a consultation. Our stylists assess your hair's current condition before recommending a treatment, so you get a result that actually works for your hair — not a one-size-fits-all fix.",
      "A quick way to narrow it down: if your hair feels rough, dry or breaks easily, start with repair (Hair Botox). If it is healthy but frizzy and hard to manage, smoothing (Keratin or Nanoplastia) is usually the better fit. If you colour your hair often, mention it during the consultation — it changes which treatment and products we use.",
      "Aftercare matters as much as the treatment itself. Smoothing treatments last longer with a sulphate-free shampoo, less frequent washing and heat protection before styling. Repair treatments work best when combined with regular trims to remove split ends.",
      "Not sure where your hair falls? Send us a photo on WhatsApp or drop by the salon at Kilimanoor Junction and our stylists will recommend the treatment that suits your hair.",
    ],
  },
  {
    slug: "bridal-makeup-trial-guide",
    title: "Why You Should Never Skip Your Bridal Makeup Trial",
    excerpt:
      "A bridal makeup trial can make or break your wedding-day look. Here's why it matters and what to expect.",
    date: "2026-02-03",
    updated: "2026-10-11",
    image: "/images/services/bridal-makeup.jpg",
    content: [
      "A bridal makeup trial is one of the most important — and most skipped — steps in wedding planning. It's your chance to see exactly how your makeup will look in photos, under different lighting, and across a full day of celebrations.",
      "During a trial at FLORA, we test your preferred look, discuss any adjustments, and finalize details like lip color and eye makeup intensity well before the big day — so there are no surprises.",
      "If you're planning bridal makeup in Trivandrum or Kilimanoor, book your trial at least a month in advance to leave room for any changes.",
      "Bring what you can to the trial: a photo of your outfit or the fabric colour, the jewellery you plan to wear, and a few reference looks you like. It also helps to know whether the ceremony is in daylight or in the evening, since lighting changes how makeup reads in photographs.",
      "Take photos at the end of the trial — indoors, near a window and with flash. Wear the look for a few hours if you can to see how it holds up, and note anything you'd change. Small adjustments to base, lips or eyes are easy to make at this stage.",
      "If you're deciding between HD and airbrush makeup, the trial is the right time to compare. HD gives a natural finish in close-ups; airbrush is lightweight and long-lasting for long ceremonies.",
    ],
  },
  {
    slug: "skincare-routine-before-wedding",
    title: "Your Skincare Timeline Before the Wedding",
    excerpt:
      "From facials to de-tan sessions, here's a realistic skincare timeline leading up to your wedding day.",
    date: "2026-02-20",
    updated: "2026-10-11",
    image: "/images/services/hydra-facial.jpg",
    content: [
      "Great wedding-day skin doesn't happen overnight. A realistic skincare timeline — starting two to three months before the wedding — gives your skin time to respond to treatments without last-minute breakouts or irritation.",
      "We typically recommend monthly Hydra Facials leading up to the big day, tapering to a final gentle cleanup and de-tan session just before the event, so your skin looks radiant without over-treating it close to the wedding.",
      "Our team at FLORA can build a custom skincare timeline based on your wedding date and skin type — just ask during your first visit.",
      "Avoid trying any new or strong treatment in the final two weeks. Even a product that suits you can cause redness or a reaction the first time, and there isn't time for skin to settle before the wedding.",
      "At home, keep the routine simple and consistent: a gentle cleanser, moisturiser and daily sunscreen do more for wedding-day skin than a long list of new products. Drinking enough water and getting regular sleep in the last few weeks also shows on your skin.",
      "If you're planning bridal makeup with us, mention your wedding date when you book your first facial — we can line up your skin treatments and makeup trial so everything is timed well.",
    ],
  },
];
