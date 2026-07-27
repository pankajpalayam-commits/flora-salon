import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const reasons = [
  {
    title: "Experienced Professionals",
    description: "Trained stylists and therapists with years of hands-on expertise.",
  },
  {
    title: "Premium Products",
    description: "We use trusted, high-quality brands across every treatment.",
  },
  {
    title: "Personalized Consultation",
    description: "Every service begins with a consultation tailored to you.",
  },
  {
    title: "Family Friendly Salon",
    description: "A welcoming space designed for every member of the family.",
  },
  {
    title: "Hygienic Environment",
    description: "Strict sanitation standards for your safety and comfort.",
  },
  {
    title: "Customer Satisfaction",
    description: "Our reputation in Kilimanoor is built on happy, returning clients.",
  },
];

export function WhyChooseFlora() {
  return (
    <section className="bg-flora-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why FLORA"
          title="Why Choose FLORA"
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <Card key={reason.title} className="p-8 text-center">
              <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-flora-gold-soft" aria-hidden="true" />
              <h3 className="text-h3 font-display mb-2">{reason.title}</h3>
              <p className="text-sm text-flora-grey-dark/80">{reason.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
