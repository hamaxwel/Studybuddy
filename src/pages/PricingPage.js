import React from 'react';
import './PricingPage.css';

const PricingPage = () => {
  return (
    <div className="pricing-page">
      {/* Pricing Page Header */}
      <section className="pricing-header">
        <h1>Our Pricing Plans</h1>
        <p>Choose the plan that fits your needs. No hidden fees or contracts. Get started today!</p>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans">
        <div className="pricing-plan">
          <h2>Basic</h2>
          <p className="price">ksh:3000</p>
          <ul>
            <li>Access to basic features</li>
            <li>1 hour of tutoring per month</li>
            <li>Email support</li>
          </ul>
          <button className="btn-primary">Sign Up</button>
        </div>

        <div className="pricing-plan">
          <h2>Standard</h2>
          <p className="price">ksh: 5000</p>
          <ul>
            <li>Access to all features</li>
            <li>3 hours of tutoring per month</li>
            <li>Priority email support</li>
          </ul>
          <button className="btn-primary">Sign Up</button>
        </div>

        <div className="pricing-plan">
          <h2>Premium</h2>
          <p className="price">ksh: 8000</p>
          <ul>
            <li>Access to all features</li>
            <li>5 hours of tutoring per month</li>
            <li>24/7 support</li>
          </ul>
          <button className="btn-primary">Sign Up</button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pricing-cta">
        <p>Choose a plan and join us today. We’re excited to help you on your learning journey!</p>
        <button className="btn-primary">Get Started</button>
      </section>
    </div>
  );
};

export default PricingPage;
