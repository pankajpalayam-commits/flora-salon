import Image from "next/image";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { AnimatedDivider } from "@/components/ui/AnimatedDivider";
import { Button } from "@/components/ui/Button";

interface Package {
  title: string;
  description: string;
  image: string;
}

const packages: Package[] = [
  {
    title: "HD Makeup",
    description:
      "High-definition makeup that photographs flawlessly under any lighting, ideal for wedding-day close-ups.",
    image: "/images/bridal/hd-makeup.jpg",
  },
  {
    title: "Airbrush Makeup",
    description:
      "A lightweight, long-lasting finish that stays fresh through hours of ceremonies and celebrations.",
    image: "/images/bridal/airbrush-makeup.jpg",
  },
  {
    title: "Engagement Makeup",
    description:
      "Soft, romantic looks tailored for engagement shoots and pre-wedding celebrations.",
    image: "/images/bridal/engagement-makeup.jpg",
  },
  {
    title: "Reception Makeup",
    description:
      "Bold, glamorous styling designed for reception lighting and evening photography.",
    image: "/images/bridal/reception-makeup.jpg",
  },
];

export function BridalPackages() {
  return (
    <section className="bg-flora-white py-24 md:py-32">
      <Container>
        <div className="space-y-20 md:space-y-28">
          {packages.map((pkg, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={pkg.title}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
              >
                <div
                  className={clsx(
                    "relative h-72 w-full overflow-hidden rounded-xl lg:h-96",
                    reversed && "lg:order-2"
                  )}
                >
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[center-15%]"
                  />
                </div>
                <div className={reversed ? "lg:order-1" : undefined}>
                  <AnimatedDivider className="mb-5" />
                  <h3 className="text-h2 font-display mb-4">{pkg.title}</h3>
                  <p className="text-flora-grey-dark/80 max-w-md mb-6">
                    {pkg.description}
                  </p>
                  <Button href="/contact" variant="ghost">
                    Book Consultation
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
