"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConversionTracker() {
  useEffect(() => {
    if (typeof window.gtag !== "function") {
      console.warn("Google tag is not available.");
      return;
    }

    // GA4 lead event
    window.gtag("event", "generate_lead", {
      form_name: "Ross Furniture Transport Enquiry",
      value: 1,
      currency: "AUD",
    });

    // Google Ads conversion
    window.gtag("event", "conversion", {
      send_to: "AW-18356986395/0699CLq-j9gcEJvEpbFE",
      value: 1,
      currency: "AUD",
    });
  }, []);

  return null;
}
