
import React from 'react';
import './Pricing.css';

export const Pricing = () => {
  const plans = [
    {
      name: "Starter plan",
      price: "$29",
      period: "per user, per month",
      features: [
        "8 yoga classes per month",
        "2 fitness training sessions per month",
        "Access to online resources",
        "Monthly wellness newsletter"
      ],
      isPopular: false
    },
    {
      name: "Basic plan",
      price: "$29",
      period: "per user, per month",
      features: [
        "Unlimited yoga classes",
        "4 fitness training sessions per month",
        "1 personalized coaching session per month",
        "Access to online resources",
        "Monthly wellness newsletter"
      ],
      isPopular: true
    },
    {
      name: "Premium plan",
      price: "$29",
      period: "per user, per month",
      features: [
        "4 personalized coaching sessions per month",
        "Customized fitness and yoga plans",
        "Access to online resources",
        "Monthly wellness newsletter"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="pricing" id="plans">
      <div className="pricing-grid">
        <div className="pricing-container">
          {plans.map((plan, index) => (
            <article key={index} className={`pricing-card ${plan.isPopular ? 'pricing-card-popular' : ''}`}>
              <div className="pricing-card-inner">
                <div className={`pricing-card-content ${plan.isPopular ? 'pricing-card-content-popular' : ''}`}>
                  <div className={`pricing-header ${plan.isPopular ? 'pricing-header-popular' : ''}`}>
                    <h3 className="pricing-plan-name">
                      {plan.name}
                    </h3>
                    <div className="pricing-price">
                      {plan.price}
                    </div>
                    <p className="pricing-period">
                      {plan.period}
                    </p>
                  </div>
                  <button className={`pricing-button ${plan.isPopular ? 'pricing-button-popular' : ''}`}>
                    Start my 15-day trail
                  </button>
                  <div className={`pricing-divider ${plan.isPopular ? 'pricing-divider-popular' : ''}`} />
                </div>
                <div className={`pricing-features ${plan.isPopular ? 'pricing-features-popular' : ''}`}>
                  {plan.features.map((feature, featureIndex) => (
                    <React.Fragment key={featureIndex}>
                      {feature}
                      {featureIndex < plan.features.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                {plan.isPopular && (
                  <div className="pricing-bottom-border" />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
