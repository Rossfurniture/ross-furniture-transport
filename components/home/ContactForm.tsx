"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import "./ContactForm.css";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set(
      "_subject",
      "New Commercial Enquiry — Ross Furniture Transport",
    );
    formData.set("_template", "table");
    formData.set("_captcha", "false");
    formData.set("_formType", "Website Contact Form");

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
        throw new Error("Unable to submit commercial enquiry.");
      }

      form.reset();
      setStatus("success");

      router.push("/thank-you");
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      className="ross-contact-form"
      aria-labelledby="ross-contact-form-heading"
    >
      <div className="ross-contact-form-container">
        <div className="ross-contact-form-content">
          <p className="ross-contact-form-eyebrow">
            Start a Commercial Partnership
          </p>

          <h2
            id="ross-contact-form-heading"
            className="ross-contact-form-title"
          >
            Need a Delivery Partner
            <span>
              Your Business Can Rely On<i>.</i>
            </span>
          </h2>

          <p className="ross-contact-form-introduction">
            Tell us about your products, collection points, delivery areas and
            schedule. Ross Furniture Transport will help shape a dependable
            transport solution around your operation.
          </p>

          <div className="ross-contact-form-benefits">
            <div className="ross-contact-form-benefit">
              <span aria-hidden="true">01</span>
              <p>Scheduled and recurring commercial delivery runs</p>
            </div>

            <div className="ross-contact-form-benefit">
              <span aria-hidden="true">02</span>
              <p>Furniture, bedding and appliance transport</p>
            </div>

            <div className="ross-contact-form-benefit">
              <span aria-hidden="true">03</span>
              <p>Professional, fully insured delivery teams</p>
            </div>

            <div className="ross-contact-form-benefit">
              <span aria-hidden="true">04</span>
              <p>Direct communication with Ross</p>
            </div>
          </div>

          <div className="ross-contact-form-direct">
            <p>Prefer to speak directly?</p>

            <a href="tel:0413261153">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 2.8 9.3 8l-2.2 2.2a15.4 15.4 0 0 0 6.7 6.7l2.2-2.2 5.2 2.7v3.1c0 .9-.7 1.6-1.6 1.6C10 22.1 1.9 14 1.9 4.4c0-.9.7-1.6 1.6-1.6Z" />
              </svg>

              0413 261 153
            </a>
          </div>
        </div>

        <div className="ross-contact-form-panel">
          <div className="ross-contact-form-panel-header">
            <p>Commercial Enquiry</p>

            <h3>Tell Us About Your Delivery Requirements.</h3>

            <span>
              Complete the form below and Ross will contact you to discuss the
              right transport solution.
            </span>
          </div>

          <form
            className="ross-commercial-enquiry-form"
            onSubmit={handleSubmit}
          >
            <div className="ross-form-grid">
              <div className="ross-form-field">
                <label htmlFor="business-name">Business Name</label>

                <input
                  id="business-name"
                  name="businessName"
                  type="text"
                  placeholder="Your business name"
                  required
                />
              </div>

              <div className="ross-form-field">
                <label htmlFor="contact-name">Contact Name</label>

                <input
                  id="contact-name"
                  name="contactName"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="ross-form-field">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div className="ross-form-field">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  placeholder="Your email address"
                  required
                />
              </div>

              <div className="ross-form-field">
                <label htmlFor="business-type">Business Type</label>

                <select
                  id="business-type"
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

              <div className="ross-form-field">
                <label htmlFor="service-required">Service Required</label>

                <select
                  id="service-required"
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

              <div className="ross-form-field">
                <label htmlFor="collection-suburb">
                  Collection Suburb
                </label>

                <input
                  id="collection-suburb"
                  name="collectionSuburb"
                  type="text"
                  placeholder="Collection location"
                  required
                />
              </div>

              <div className="ross-form-field">
                <label htmlFor="delivery-area">Delivery Area</label>

                <input
                  id="delivery-area"
                  name="deliveryArea"
                  type="text"
                  placeholder="Delivery suburbs or region"
                  required
                />
              </div>

              <div className="ross-form-field ross-form-field--full">
                <label htmlFor="delivery-frequency">
                  Delivery Frequency
                </label>

                <select
                  id="delivery-frequency"
                  name="deliveryFrequency"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select delivery frequency
                  </option>

                  <option value="one-off">One-Off Delivery</option>
                  <option value="daily">Daily Runs</option>
                  <option value="weekly">Weekly Runs</option>

                  <option value="multiple-weekly">
                    Multiple Runs Per Week
                  </option>

                  <option value="ongoing">Ongoing as Required</option>
                </select>
              </div>

              <div className="ross-form-field ross-form-field--full">
                <label htmlFor="message">Delivery Requirements</label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your products, quantities, delivery schedule, access conditions or other requirements."
                  required
                />
              </div>
            </div>

            <button
              className="ross-contact-form-submit"
              type="submit"
              disabled={status === "submitting"}
            >
              <span>
                {status === "submitting"
                  ? "Sending Enquiry..."
                  : "Request a Commercial Quote"}
              </span>

              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M14 7l5 5-5 5" />
              </svg>
            </button>

            <p className="ross-contact-form-note">
              Ross will review your enquiry and contact you to discuss the
              right delivery solution for your business.
            </p>

            {status === "success" && (
              <p
                className="ross-contact-form-status ross-contact-form-status--success"
                role="status"
              >
                Thanks — your commercial enquiry has been received.
              </p>
            )}

            {status === "error" && (
              <p
                className="ross-contact-form-status ross-contact-form-status--error"
                role="alert"
              >
                Something went wrong. Please call Ross directly on 0413 261
                153.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}