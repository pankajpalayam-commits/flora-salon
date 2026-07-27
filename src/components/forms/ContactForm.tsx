"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire to booking/CRM endpoint when FLORA OS backend is available
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg bg-flora-gold-soft p-6 text-center">
        <p className="font-medium text-flora-black">Thank you — we&apos;ve received your message.</p>
        <p className="text-sm text-flora-grey-dark/80 mt-1">
          Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-caption uppercase text-flora-grey-dark/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm focus:border-flora-gold outline-none"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-caption uppercase text-flora-grey-dark/70">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm focus:border-flora-gold outline-none"
        />
      </div>
      <div>
        <label htmlFor="service" className="text-caption uppercase text-flora-grey-dark/70">
          Service Interested In
        </label>
        <input
          id="service"
          name="service"
          type="text"
          placeholder="e.g. Bridal Makeup, Hair Botox"
          className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm focus:border-flora-gold outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-caption uppercase text-flora-grey-dark/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm focus:border-flora-gold outline-none"
        />
      </div>
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
