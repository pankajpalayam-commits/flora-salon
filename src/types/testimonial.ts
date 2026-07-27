export interface Testimonial {
  id: string;
  name: string;
  rating: number; // 1-5
  quote: string;
  service?: string;
  image?: string;
}
