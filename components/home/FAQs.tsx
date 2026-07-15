"use client";

import { useState } from "react";

import "./FAQs.css";

type FAQItem = {
  question: string;
  answer: string;
};

const leftFAQs: FAQItem[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "Ross Furniture Transport supports furniture retailers, bedding and mattress suppliers, appliance retailers, furniture manufacturers, warehouses, distribution centres, interior designers and commercial fit-out teams.",
  },
  {
    question: "Are you a furniture removalist?",
    answer:
      "No. Ross Furniture Transport is a commercial furniture transport and delivery partner. We primarily support businesses with scheduled collections, retail deliveries, warehouse transfers and customer deliveries.",
  },
  {
    question: "Can you deliver directly to our customers?",
    answer:
      "Yes. We can collect from your warehouse, supplier or showroom and deliver directly to your customer while representing your business professionally throughout the delivery.",
  },
  {
    question: "Do you offer scheduled daily or weekly delivery runs?",
    answer:
      "Yes. Delivery schedules can be arranged around your operating requirements, including regular daily runs, selected weekdays and tailored recurring delivery windows.",
  },
  {
    question: "Can you collect from multiple locations?",
    answer:
      "Yes. We can coordinate collections from warehouses, suppliers, showrooms and distribution centres before completing deliveries according to your required schedule.",
  },
  {
    question: "Do you handle mattresses and bedding products?",
    answer:
      "Yes. Our team is experienced in transporting mattresses, ensembles, bed frames and bulky bedding products with suitable protection and careful handling.",
  },
  {
    question: "Can you transport large appliances?",
    answer:
      "Yes. We transport bulky appliances and retail stock using appropriate handling equipment, tail-lift vehicles and trained delivery crews.",
  },
];

const rightFAQs: FAQItem[] = [
  {
    question: "Do you provide white-glove delivery?",
    answer:
      "Yes. White-glove delivery can include careful handling, placement within the property and a professional customer-ready delivery experience for premium furniture and delicate products.",
  },
  {
    question: "Are your vehicles equipped with tail lifts?",
    answer:
      "Our commercial delivery vehicles are selected and equipped for safe furniture transport, including tail-lift access where required for heavy or bulky items.",
  },
  {
    question: "How do you protect furniture during transport?",
    answer:
      "Furniture is protected using suitable blankets, wrapping, straps and handling equipment according to the item, access conditions and delivery requirements.",
  },
  {
    question: "Can you assist with warehouse transfers?",
    answer:
      "Yes. We coordinate stock and furniture transfers between warehouses, showrooms, suppliers and commercial facilities with clear scheduling and communication.",
  },
  {
    question: "Do you provide proof of delivery?",
    answer:
      "Delivery confirmation can be provided according to your operational requirements, helping your team track completed deliveries and maintain clear customer records.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "Service areas depend on your collection location, delivery schedule and commercial requirements. Contact Ross Furniture Transport to discuss your current delivery network and required coverage.",
  },
  {
    question: "How do we request a commercial transport quote?",
    answer:
      "Send us your collection locations, delivery areas, product types, approximate volumes and preferred schedule. We can then discuss a transport solution suited to your business.",
  },
];

function FAQColumn({
  items,
  column,
}: {
  items: FAQItem[];
  column: "left" | "right";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  return (
    <div className="ross-faq-column">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `ross-faq-${column}-answer-${index}`;
        const buttonId = `ross-faq-${column}-button-${index}`;

        return (
          <article
            className={`ross-faq-item ${
              isOpen ? "ross-faq-item--open" : ""
            }`}
            key={item.question}
          >
            <h3 className="ross-faq-question-heading">
              <button
                id={buttonId}
                className="ross-faq-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => handleToggle(index)}
              >
                <span className="ross-faq-question-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="ross-faq-question-text">
                  {item.question}
                </span>

                <span className="ross-faq-toggle" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
            </h3>

            <div
              id={answerId}
              className="ross-faq-answer-wrapper"
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
            >
              <div className="ross-faq-answer-inner">
                <p className="ross-faq-answer">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function FAQs() {
  return (
    <section
      className="ross-faqs"
      aria-labelledby="ross-faqs-heading"
    >
      <div className="ross-faqs-container">
        <header className="ross-faqs-header">
          <div className="ross-faqs-heading-column">
            <p className="ross-faqs-eyebrow">Frequently Asked Questions</p>

            <h2 id="ross-faqs-heading" className="ross-faqs-title">
              Everything Your Business
              <span>
                Needs to Know<i>.</i>
              </span>
            </h2>
          </div>

          <div className="ross-faqs-introduction-column">
            <p className="ross-faqs-introduction">
              Clear answers about our commercial furniture transport,
              scheduled delivery services, handling processes and business
              partnerships.
            </p>

            <a className="ross-faqs-contact-link" href="/contact">
              Still have a question?
              <span>Talk to Ross</span>
            </a>
          </div>
        </header>

        <div className="ross-faqs-grid">
          <FAQColumn items={leftFAQs} column="left" />
          <FAQColumn items={rightFAQs} column="right" />
        </div>
      </div>
    </section>
  );
}