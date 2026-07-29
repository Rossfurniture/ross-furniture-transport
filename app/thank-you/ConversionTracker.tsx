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

    window.gtag("event", "generate_lead", {
      form_name: "Ross Furniture Transport Enquiry",
    });

    window.gtag("event", "conversion", {
      send_to: "AW-18356986395/0699CLq-j9gcEJvEpbFE",
    });
  }, []);

  return null;
}
