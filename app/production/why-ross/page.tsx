import type { Metadata } from "next";

import WhyRossPage from "@/components/why-ross/WhyRossPage";

export const metadata: Metadata = {
  title: "Why Ross | Ross Furniture Transport",
  description:
    "Discover why businesses choose Ross Furniture Transport for dependable commercial furniture logistics.",
};

export default function Page() {
  return <WhyRossPage />;
}