import type { Metadata } from "next";

import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryNavigator from "@/components/industries/IndustryNavigator";
import RossIndustryDifference from "@/components/industries/RossIndustryDifference";
import Reviews from "@/components/home/Reviews";
import FAQs from "@/components/home/FAQs";
import ContactForm from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "Industries We Support | Ross Furniture Transport",
  description:
    "Industry-specific commercial delivery solutions for furniture retailers, manufacturers, bedding stores, appliance retailers, designers, warehouses, developers, government and education.",
};

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustryNavigator />
      <RossIndustryDifference />
      <Reviews />
      <FAQs />
      <ContactForm />
    </main>
  );
}