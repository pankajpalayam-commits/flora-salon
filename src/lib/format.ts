/** 1500 → "₹1,500" */
export function formatRupees(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

/** "From ₹199 per streak", "From ₹800", "Price depends on hair length", or null. */
export function formatPrice(priceFrom?: number, priceNote?: string) {
  if (priceFrom) return `From ${formatRupees(priceFrom)}${priceNote ? ` ${priceNote}` : ""}`;
  return priceNote ?? null;
}
