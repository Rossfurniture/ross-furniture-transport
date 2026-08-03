"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function PhoneClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      const phoneLink = target?.closest<HTMLAnchorElement>(
        'a[href^="tel:"]'
      );

      if (!phoneLink) return;

      if (typeof window.gtag !== "function") return;

      const phoneNumber =
        phoneLink.getAttribute("href")?.replace("tel:", "") || "";

      // Google Analytics 4
      window.gtag("event", "phone_click", {
        phone_number: phoneNumber,
      });

      // Google Ads Phone Call Conversion
      window.gtag("event", "conversion", {
        send_to: "AW-18356986395/SfsqCOLtgNscEJvEpbFE",
        value: 1.0,
        currency: "AUD",
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
