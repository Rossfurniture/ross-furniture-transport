import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title:
    "Commercial Furniture Transport Services | Ross Furniture Transport",
  description:
    "Explore commercial furniture transport, retail store deliveries, warehouse distribution, interstate transport, white-glove delivery and tailored business delivery solutions.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
    </main>
  );
}