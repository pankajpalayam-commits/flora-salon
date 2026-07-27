export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  { id: "m1", name: "Divya Nair", role: "Founder & Senior Stylist", image: "/images/team/divya.jpg" },
  { id: "m2", name: "Ratheesh Kumar", role: "Senior Hair Specialist", image: "/images/team/ratheesh.jpg" },
  { id: "m3", name: "Sneha Pillai", role: "Bridal Makeup Artist", image: "/images/team/sneha.jpg" },
  { id: "m4", name: "Anoop Das", role: "Skin & Facial Specialist", image: "/images/team/anoop.jpg" },
];
