import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rossfurnituretransport.com.au"),

  title: "Ross Furniture Transport | Australia",
  description:
    "Professional furniture transport services for furniture stores, retailers and businesses across Australia.",

  openGraph: {
    title: "Ross Furniture Transport",
    description:
      "Reliable furniture transport services for businesses across Australia.",
    url: "https://rossfurnituretransport.com.au",
    siteName: "Ross Furniture Transport",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ross Furniture Transport",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ross Furniture Transport",
    description:
      "Reliable furniture transport services for businesses across Australia.",
    images: ["/opengraph-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
