import Script from "next/script";
import ThankYouPage from "./ThankYouPage";

export default function Page() {
  return (
    <>
      {/* Google Ads lead conversion */}
      <Script
        id="google-ads-lead-conversion"
        strategy="afterInteractive"
      >
        {`
          gtag("event", "conversion", {
            send_to: "AW-18356986395/0699CLq-j9gcEJvEpbFE"
          });

          gtag("event", "generate_lead");
        `}
      </Script>

      <ThankYouPage />
    </>
  );
}
