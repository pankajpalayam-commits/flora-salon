import { AnimatedDivider } from "@/components/ui/AnimatedDivider";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-h1 text-flora-black">404</p>
      <AnimatedDivider align="center" className="my-6" />
      <h1 className="text-h3 font-display mb-3">Page Not Found</h1>
      <p className="max-w-sm text-flora-grey-dark/80 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Button href="/" variant="primary">
        Back to Home
      </Button>
    </div>
  );
}
