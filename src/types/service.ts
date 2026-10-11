export interface Service {
  slug: string;
  name: string;
  category: "hair" | "skin" | "bridal";
  shortDescription: string;
  /** Longer, plain-language description shown on the service pages. */
  details: string;
  image: string;
  /**
   * Starting price in rupees, e.g. 1500 → shown as "From ₹1,500" and added
   * to the structured data. Leave undefined to hide the price.
   */
  priceFrom?: number;
  /**
   * Short pricing note shown after the price ("per streak"), or on its own
   * when there is no fixed price ("Price depends on hair length").
   */
  priceNote?: string;
}
