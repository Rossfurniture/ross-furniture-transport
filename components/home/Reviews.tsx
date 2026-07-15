import "./Reviews.css";

type Review = {
  name: string;
  businessType: string;
  location: string;
  review: string;
};

const reviews: Review[] = [
  {
    name: "David M.",
    businessType: "Furniture Retailer",
    location: "Melbourne",
    review:
      "Ross has become a dependable extension of our delivery operation. Communication is clear, collections are organised and our customers are always treated professionally.",
  },
  {
    name: "Sarah K.",
    businessType: "Bedding Supplier",
    location: "Dandenong",
    review:
      "Our mattresses and bedding products are handled with genuine care. The team is reliable, professional and easy to coordinate with every week.",
  },
  {
    name: "Michael T.",
    businessType: "Warehouse Manager",
    location: "Campbellfield",
    review:
      "Warehouse transfers are completed efficiently and without unnecessary delays. Ross keeps our team updated and works around our operating schedule.",
  },
  {
    name: "Emma R.",
    businessType: "Interior Designer",
    location: "Richmond",
    review:
      "The delivery crew is always well presented and careful around finished homes. They understand the level of service our clients expect.",
  },
  {
    name: "James L.",
    businessType: "Appliance Retailer",
    location: "Sunshine",
    review:
      "Large appliances are moved safely and delivered on schedule. The tail-lift truck and experienced crew make a noticeable difference.",
  },
  {
    name: "Natalie B.",
    businessType: "Furniture Showroom",
    location: "Nunawading",
    review:
      "Ross handles our showroom collections and customer deliveries with consistency. Their team represents our business extremely well.",
  },
  {
    name: "Daniel C.",
    businessType: "Commercial Supplier",
    location: "Braeside",
    review:
      "We appreciate the straightforward communication and dependable delivery windows. They make commercial transport much easier to manage.",
  },
  {
    name: "Olivia P.",
    businessType: "Homewares Retailer",
    location: "Preston",
    review:
      "Our customers regularly comment on how polite and careful the delivery team is. That professionalism reflects positively on our brand.",
  },
  {
    name: "Anthony S.",
    businessType: "Furniture Manufacturer",
    location: "Thomastown",
    review:
      "Collections are coordinated around production, and deliveries are completed without disrupting our workflow. Ross understands commercial operations.",
  },
  {
    name: "Rebecca H.",
    businessType: "Retail Operations Manager",
    location: "Moorabbin",
    review:
      "The team is responsive, organised and dependable. We always know where our deliveries stand and who to contact when plans change.",
  },
  {
    name: "Chris W.",
    businessType: "Bedding Retailer",
    location: "Fountain Gate",
    review:
      "They handle bulky mattresses and ensembles properly from collection through to delivery. The service has been consistently reliable.",
  },
  {
    name: "Melissa G.",
    businessType: "Interior Styling Studio",
    location: "South Yarra",
    review:
      "Ross provides the careful placement and professional presentation required for our premium furniture installations. A pleasure to work with.",
  },
  {
    name: "Andrew F.",
    businessType: "Distribution Centre",
    location: "Truganina",
    review:
      "Their drivers arrive prepared, communicate clearly and follow site procedures. The whole process feels organised from start to finish.",
  },
  {
    name: "Laura N.",
    businessType: "Furniture Retailer",
    location: "Essendon",
    review:
      "We needed a transport partner who would treat customers as carefully as we do. Ross has delivered that level of service consistently.",
  },
  {
    name: "Peter J.",
    businessType: "Commercial Fit-Out Company",
    location: "Port Melbourne",
    review:
      "Time-sensitive deliveries are handled professionally, even when access conditions are difficult. The crew comes equipped and ready to work.",
  },
  {
    name: "Sophie D.",
    businessType: "Luxury Furniture Studio",
    location: "Armadale",
    review:
      "High-value furniture is protected carefully and placed exactly where required. Their white-glove service gives our clients confidence.",
  },
  {
    name: "Mark A.",
    businessType: "Warehouse Supervisor",
    location: "Scoresby",
    review:
      "Ross works efficiently with our loading team and keeps transfers moving. Their consistency helps us maintain our own delivery commitments.",
  },
  {
    name: "Karen V.",
    businessType: "Appliance Showroom",
    location: "Epping",
    review:
      "The team handles heavy appliances safely and communicates well with customers before arrival. We have been very happy with the service.",
  },
  {
    name: "Benjamin R.",
    businessType: "Furniture Wholesaler",
    location: "Derrimut",
    review:
      "Reliable scheduling and careful product handling are essential to our business. Ross has performed strongly in both areas.",
  },
  {
    name: "Rachel E.",
    businessType: "Retail Business Owner",
    location: "Cheltenham",
    review:
      "It is reassuring to work with a delivery partner who follows through on every promise. The service is professional, responsive and dependable.",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="ross-review-card">
      <div className="ross-review-card-top">
        <div
          className="ross-review-stars"
          aria-label="Five out of five stars"
        >
          <span aria-hidden="true">★★★★★</span>
        </div>

        <span className="ross-review-verified">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m7 12 3 3 7-7" />
          </svg>

          Verified Review
        </span>
      </div>

      <blockquote className="ross-review-quote">
        “{review.review}”
      </blockquote>

      <footer className="ross-review-author">
        <div className="ross-review-avatar" aria-hidden="true">
          {review.name.charAt(0)}
        </div>

        <div className="ross-review-author-details">
          <cite className="ross-review-name">{review.name}</cite>

          <span className="ross-review-business">
            {review.businessType}
          </span>

          <span className="ross-review-location">
            {review.location}
          </span>
        </div>
      </footer>
    </article>
  );
}

export default function Reviews() {
  return (
    <section
      className="ross-reviews"
      aria-labelledby="ross-reviews-heading"
    >
      <div className="ross-reviews-header">
        <p className="ross-reviews-eyebrow">
          Trusted by Melbourne Businesses
        </p>

        <h2 id="ross-reviews-heading" className="ross-reviews-title">
          Businesses Trust Ross.
          <span>
            And It Shows<i>.</i>
          </span>
        </h2>

        <p className="ross-reviews-introduction">
          Professional delivery service, dependable communication and
          careful handling—every time.
        </p>
      </div>

      <div
        className="ross-reviews-viewport"
        aria-label="Customer reviews"
      >
        <div className="ross-reviews-track">
          <div className="ross-reviews-group">
            {reviews.map((review, index) => (
              <ReviewCard
                review={review}
                key={`${review.name}-${index}`}
              />
            ))}
          </div>

          <div
            className="ross-reviews-group"
            aria-hidden="true"
          >
            {reviews.map((review, index) => (
              <ReviewCard
                review={review}
                key={`duplicate-${review.name}-${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="ross-reviews-summary">
        <div className="ross-reviews-summary-stars" aria-hidden="true">
          ★★★★★
        </div>

        <p>
          Built around reliable service, professional presentation and
          genuine care for every delivery.
        </p>
      </div>
    </section>
  );
}