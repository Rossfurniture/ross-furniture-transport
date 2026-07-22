import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import RossPopupForm from "@/components/shared/forms/RossPopupForm";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ross Furniture Transport",
  description:
    "Commercial furniture transport and delivery solutions across Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <RossPopupForm />
      </body>
    </html>
  );
}