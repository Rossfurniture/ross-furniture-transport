import "./BrandPromise.css";

type BrandPromiseItem = {
  number: string;
  title: string;
  description: string;
};

const brandPromises: BrandPromiseItem[] = [
  {
    number: "01",
    title: "On Time, Without the Chasing",
    description:
      "Dependable scheduling and clear communication give your team confidence that every delivery is being handled.",
  },
  {
    number: "02",
    title: "Handled With Genuine Care",
    description:
      "Furniture is protected, transported and delivered with the attention your products and customers deserve.",
  },
  {
    number: "03",
    title: "Professional at Every Door",
    description:
      "Our delivery team represents your business with the same respect, presentation and professionalism you expect from your own staff.",
  },
  {
    number: "04",
    title: "Less Pressure on Your Team",
    description:
      "We stay ahead of delivery issues, communicate clearly and help prevent small problems from becoming customer complaints.",
  },
];

export default function BrandPromise() {
  return (
    <section
      className="ross-brand-promise"
      aria-labelledby="brand-promise-heading"
    >
      <div className="ross-brand-promise-container">
        <div className="ross-brand-promise-content">
          <header className="ross-brand-promise-header">
            <p className="ross-brand-promise-eyebrow">
              What Matters to Your Business
            </p>

            <h2
              id="brand-promise-heading"
              className="ross-brand-promise-title"
            >
              Every Delivery
              <span>
                Reflects Your Brand<i>.</i>
              </span>
            </h2>

            <p className="ross-brand-promise-intro">
              Your customers remember whether their furniture arrived on time,
              in perfect condition and with professional service. Ross Furniture
              Transport becomes an extension of your operation, protecting the
              reputation you worked hard to build.
            </p>
          </header>

          <div
            className="ross-brand-promise-list"
            aria-label="How Ross Furniture Transport supports your business"
          >
            {brandPromises.map((promise) => (
              <article
                className="ross-brand-promise-item"
                key={promise.number}
              >
                <span
                  className="ross-brand-promise-number"
                  aria-hidden="true"
                >
                  {promise.number}
                </span>

                <div className="ross-brand-promise-item-content">
                  <h3 className="ross-brand-promise-item-title">
                    {promise.title}
                  </h3>

                  <p className="ross-brand-promise-item-description">
                    {promise.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="ross-brand-promise-closing">
            <p className="ross-brand-promise-closing-small">
              We don&apos;t just move furniture.
            </p>

            <p className="ross-brand-promise-closing-strong">
              We help you keep the promises you make to your customers.
            </p>
          </div>
        </div>

        <div className="ross-brand-promise-visual">
          <div
            className="ross-brand-promise-image"
            role="img"
            aria-label="Ross Furniture Transport team carefully completing a commercial furniture delivery"
          >

          </div>

          <div className="ross-brand-promise-message">
            <p className="ross-brand-promise-message-eyebrow">
              Your Reputation, Protected
            </p>

            <blockquote className="ross-brand-promise-quote">
              When your customers are waiting, there is no room for guesswork.
            </blockquote>

            <p className="ross-brand-promise-message-text">
              We deliver with care, consistency and professionalism so your
              business can deliver on every promise.
            </p>

            <div className="ross-brand-promise-values">
  <span>
    Reliable
    <br />
    Scheduling
  </span>

  <span>
    Careful
    <br />
    Handling
  </span>

  <span>
    Professional
    <br />
    Service
  </span>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}