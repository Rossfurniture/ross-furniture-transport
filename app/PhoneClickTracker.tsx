"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PHONE_CONVERSION_ID =
  "AW-18356986395/SfsqCOLtgNscEJvEpbFE";

export default function PhoneClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const phoneLink = target?.closest<HTMLAnchorElement>(
        'a[href^="tel:"]',
      );

      if (!phoneLink) return;

      const phoneUrl = phoneLink.href;
      const phoneNumber =
        phoneLink.getAttribute("href")?.replace("tel:", "") ?? "";

      if (typeof window.gtag !== "function") {
        return;
      }

      event.preventDefault();

      let phoneOpened = false;

      const openPhoneApp = () => {
        if (phoneOpened) return;

        phoneOpened = true;
        window.location.href = phoneUrl;
      };

      // GA4 event
      window.gtag("event", "phone_click", {
        phone_number: phoneNumber,
        link_url: phoneUrl,
      });

      // Google Ads conversion
      window.gtag("event", "conversion", {
        send_to: PHONE_CONVERSION_ID,
        value: 1,
        currency: "AUD",
        event_callback: openPhoneApp,
      });

      // Fallback so the phone app still opens if Google's callback is delayed
      window.setTimeout(openPhoneApp, 1200);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
