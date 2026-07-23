import type { Metadata } from "next";

import DeliveryNetworkPage from "@/components/delivery-network/DeliveryNetworkPage";

export const metadata: Metadata = {
  title: "Delivery Network | Ross Furniture Transport",
  description:
    "Commercial furniture delivery network supporting metropolitan, regional and interstate transport across Australia.",
};

export default function Page() {
  return <DeliveryNetworkPage />;
}