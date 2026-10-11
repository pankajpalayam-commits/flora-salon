import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildFaqSchema } from "@/lib/seo/jsonld";
import type { Faq } from "@/lib/data/faqs";

interface FaqSectionProps {
  faqs: Faq[];
  eyebrow?: string;
  title?: string;
  className?: string;
}

/**
 * Native <details> accordion: works without JavaScript, and every answer is
 * in the HTML, so search engines and AI assistants can read and quote it.
 * Ships matching FAQPage structured data.
 */
export function FaqSection({
  faqs,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  className = "bg-flora-ivory",
}: FaqSectionProps) {
  return (
    <section className={`${className} py-24 md:py-32`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }}
      />
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[4fr_7fr] lg:gap-20">
        <SectionHeading eyebrow={eyebrow} title={title} className="lg:sticky lg:top-32 lg:self-start" />
        <div className="divide-y divide-flora-line border-y border-flora-line">
          {faqs.map((faq, i) => (
            <details key={faq.question} className="group" open={i === 0}>
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-xl text-flora-black transition-colors group-hover:text-flora-gold-deep">
                  {faq.question}
                </h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-flora-line text-flora-gold-deep transition-transform duration-300 group-open:rotate-45 group-open:bg-flora-gold-soft">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-12 text-flora-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
