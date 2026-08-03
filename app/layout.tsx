import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import PageLayout from "@/components/layout/PageLayout";
import RossPopupForm from "@/components/shared/forms/RossPopupForm";
import PhoneClickTracker from "./PhoneClickTracker";

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
        <PageLayout>{children}</PageLayout>

        <RossPopupForm />

        <PhoneClickTracker />

        {/* Google tag for Google Ads and GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18356986395"
          strategy="afterInteractive"
        />

        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());

            // Google Ads
            gtag("config", "AW-18356986395");

            // Google Analytics 4
            gtag("config", "G-MJ09T7YH9M");
          `}
        </Script>
      </body>
    </html>
  );
}
