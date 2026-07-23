import Link from "next/link";

import "./ThankYouPage.css";

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <section className="thank-you-confirmation">
        <div className="thank-you-container">
          <div className="thank-you-check" aria-hidden="true">
            <span>✓</span>
          </div>

          <span className="thank-you-eyebrow">ENQUIRY RECEIVED</span>

          <h1>
            Thank You For
            <br />
            Contacting Ross<span>.</span>
          </h1>

          <p className="thank-you-intro">
            Your commercial delivery enquiry has been successfully submitted.
            Ross will review your requirements and respond as soon as possible
            during business hours.
          </p>

          <div className="thank-you-actions">
            <Link href="/production" className="thank-you-primary-button">
              Back To Homepage
            </Link>

            <Link
              href="/production/services"
              className="thank-you-secondary-button"
            >
              Explore Delivery Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="thank-you-next">
        <div className="thank-you-container">
          <div className="thank-you-next-header">
            <span>WHAT HAPPENS NEXT</span>
            <h2>A Simple, Direct Process.</h2>
          </div>

          <div className="thank-you-steps">
            <article className="thank-you-step">
              <span>01</span>
              <h3>Enquiry Received</h3>
              <p>Your commercial delivery request is now with Ross.</p>
            </article>

            <article className="thank-you-step">
              <span>02</span>
              <h3>Requirements Reviewed</h3>
              <p>
                Ross will review the delivery details, timing and transport
                requirements.
              </p>
            </article>

            <article className="thank-you-step">
              <span>03</span>
              <h3>Ross Gets In Touch</h3>
              <p>
                We’ll contact you to discuss the most suitable delivery
                solution.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}