import type { Metadata } from "next";

import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Ross Furniture Transport | Commercial Furniture Logistics",
  description:
    "Learn about Ross Furniture Transport, a trusted commercial furniture delivery and logistics partner supporting retailers, manufacturers, warehouses and commercial projects across Australia.",
};

export default function Page() {
  return <AboutPage />;
}