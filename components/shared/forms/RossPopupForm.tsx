"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "./RossPopupForm.css";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function RossPopupForm() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const openPopup = () => {
      setIsOpen(true);
      setStatus("idle");
    };

    window.addEventListener("open-ross-popup", openPopup);

    return () => {
      window.removeEventListener("open-ross-popup", openPopup);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closePopup = () => {
    if (status === "submitting") {
      return;
    }

    setIsOpen(false);
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set(
      "_subject",
      "New Popup Enquiry — Ross Furniture Transport",
    );
    formData.set("_template", "table");
    formData.set("_captcha", "false");
    formData.set("_formType", "Website Popup Form");

    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/depasqualeross@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Unable to submit popup enquiry.");
      }

      form.reset();
      setStatus("success");
      setIsOpen(false);

      router.push("/production/thank-you");
    } catch (error) {
      console.error("Popup form submission error:", error);
      setStatus("error");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="ross-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ross-popup-heading"
    >
      <button
        className="ross-popup-backdrop"
        type="button"
        aria-label="Close enquiry form"
        onClick={closePopup}
        disabled={status === "submitting"}
      />

      <div className="ross-popup-panel">
        <button
          className="ross-popup-close"
          type="button"
          aria-label="Close enquiry form"
          onClick={closePopup}
          disabled={status === "submitting"}
        >
          <span />
          <span />
        </button>

        <div className="ross-popup-introduction">
          <p className="ross-popup-eyebrow">Talk to Ross</p>

          <h2 id="ross-popup-heading" className="ross-popup-title">
            Let’s Discuss Your
            <span>
              Delivery Requirements<i>.</i>
            </span>
          </h2>

          <p className="ross-popup-copy">
            Tell us what your business needs and Ross will contact you to
            discuss the right furniture transport solution.
          </p>

          <a className="ross-popup-phone" href="tel:0413261153">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 2.8 9.3 8l-2.2 2.2a15.4 15.4 0 0 0 6.7 6.7l2.2-2.2 5.2 2.7v3.1c0 .9-.7 1.6-1.6 1.6C10 22.1 1.9 14 1.9 4.4c0-.9.7-1.6 1.6-1.6Z" />
            </svg>

            0413 261 153
          </a>
        </div>

        <form className="ross-popup-form" onSubmit={handleSubmit}>
          <div className="ross-popup-form-grid">
            <div className="ross-popup-field">
              <label htmlFor="popup-business-name">Business Name</label>

              <input
                id="popup-business-name"
                name="businessName"
                type="text"
                placeholder="Your business name"
                required
              />
            </div>

            <div className="ross-popup-field">
              <label htmlFor="popup-contact-name">Contact Name</label>

              <input
                id="popup-contact-name"
                name="contactName"
                type="text"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="ross-popup-field">
              <label htmlFor="popup-phone">Phone Number</label>

              <input
                id="popup-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="Your phone number"
                required
              />
            </div>

            <div className="ross-popup-field">
              <label htmlFor="popup-email">Email Address</label>

              <input
                id="popup-email"
                name="email"
                type="email"
                inputMode="email"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="ross-popup-field">
              <label htmlFor="popup-business-type">Business Type</label>

              <select
                id="popup-business-type"
                name="businessType"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select business type
                </option>

                <option value="furniture-retailer">
                  Furniture Retailer
                </option>

                <option value="bedding-supplier">
                  Bedding &amp; Mattress Supplier
                </option>

                <option value="appliance-retailer">
                  Appliance Retailer
                </option>

                <option value="warehouse">
                  Warehouse or Distribution Centre
                </option>

                <option value="manufacturer">
                  Furniture Manufacturer
                </option>

                <option value="interior-designer">
                  Interior Designer
                </option>

                <option value="commercial-fitout">
                  Commercial Fit-Out Company
                </option>

                <option value="other">Other Business</option>
              </select>
            </div>

            <div className="ross-popup-field">
              <label htmlFor="popup-service">Service Required</label>

              <select
                id="popup-service"
                name="serviceRequired"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select service
                </option>

                <option value="furniture-delivery">
                  Furniture Retail Delivery
                </option>

                <option value="bedding-delivery">
                  Bedding &amp; Mattress Delivery
                </option>

                <option value="appliance-delivery">
                  Appliance Delivery
                </option>

                <option value="warehouse-transfer">
                  Warehouse Transfer
                </option>

                <option value="commercial-fitout">
                  Commercial Fit-Out Delivery
                </option>

                <option value="white-glove">
                  White Glove Delivery
                </option>

                <option value="ongoing-delivery">
                  Ongoing Commercial Delivery Runs
                </option>
              </select>
            </div>

            <div className="ross-popup-field ross-popup-field--full">
              <label htmlFor="popup-message">
                Delivery Requirements
              </label>

              <textarea
                id="popup-message"
                name="message"
                rows={5}
                placeholder="Tell us about your products, locations, schedule and delivery requirements."
                required
              />
            </div>
          </div>

          <button
            className="ross-popup-submit"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting"
              ? "Sending Enquiry..."
              : "Request a Commercial Quote"}

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M14 7l5 5-5 5" />
            </svg>
          </button>

          {status === "success" && (
            <p
              className="ross-popup-status ross-popup-status--success"
              role="status"
            >
              Thanks — your enquiry has been received.
            </p>
          )}

          {status === "error" && (
            <p
              className="ross-popup-status ross-popup-status--error"
              role="alert"
            >
              Something went wrong. Please call Ross on 0413 261 153.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}