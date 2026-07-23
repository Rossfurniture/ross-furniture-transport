import type { Metadata } from "next";

import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Ross Furniture Transport",
  description:
    "Contact Ross Furniture Transport for commercial furniture transport enquiries.",
};

export default function Page() {
  return <ContactPage />;
}