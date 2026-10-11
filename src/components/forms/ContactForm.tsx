"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fieldClass =
  "mt-2 block min-h-[48px] w-full rounded-xl border border-flora-line bg-flora-ivory px-4 py-3 text-base text-flora-black placeholder:text-flora-muted/70 transition-colors duration-200 hover:border-flora-muted/50 focus:border-flora-gold-deep focus:bg-flora-white focus:outline-none focus:ring-2 focus:ring-flora-gold-deep/20 aria-[invalid=true]:border-red-700";
const labelClass = "text-sm font-medium text-flora-black";

type Errors = Partial<Record<"name" | "phone", string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!String(data.get("name") ?? "").trim()) errors.name = "Please enter your name.";
  const phone = String(data.get("phone") ?? "").replace(/[\s-]/g, "");
  if (!phone) errors.phone = "Please enter your phone number.";
  else if (!/^\+?\d{10,13}$/.test(phone)) errors.phone = "Please enter a valid 10-digit phone number.";
  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(new FormData(e.currentTarget));
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("submitting");
    // TODO: wire to booking/CRM endpoint when FLORA OS backend is available
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl bg-flora-gold-soft/60 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-flora-gold-deep" strokeWidth={1.5} aria-hidden="true" />
        <p className="font-display text-xl text-flora-black">Thank you — we&apos;ve received your message.</p>
        <p className="mt-1 text-sm text-flora-muted">Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-flora-gold-deep" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-700">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-flora-gold-deep" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
            className={fieldClass}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-sm text-red-700">{errors.phone}</p>
          ) : (
            <p id="phone-hint" className="mt-1.5 text-xs text-flora-muted">We&apos;ll call or WhatsApp you to confirm.</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="service" className={labelClass}>
          Service interested in <span className="font-normal text-flora-muted">(optional)</span>
        </label>
        <input
          id="service"
          name="service"
          type="text"
          placeholder="e.g. Bridal makeup, Hair botox"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="font-normal text-flora-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Preferred date or time, questions…"
          className={fieldClass}
        />
      </div>
      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto sm:px-10">
        {status === "submitting" ? "Sending…" : "Send request"}
      </Button>
    </form>
  );
}
