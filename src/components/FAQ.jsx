
import React, { useState } from 'react';
import './FAQ.css';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of yoga classes do you offer?",
      answer: "We offer various styles including Hatha, Vinyasa, Yin Yoga, and more. Classes are available for all levels from beginners to advanced practitioners."
    },
    {
      question: "Do I need any prior experience to join your fitness programs?",
      answer: "Not at all! Our programs are designed for all fitness levels. Our experienced trainers will help you start at the right level and progress safely."
    },
    {
      question: "How do I book a personalized coaching session?",
      answer: "You can book personalized coaching sessions through our website or mobile app. Simply select your preferred trainer and available time slot."
    },
    {
      question: "What should I bring to a yoga class?",
      answer: "We provide yoga mats and props, but you're welcome to bring your own. Just wear comfortable clothing that allows for movement and bring a water bottle."
    },
    {
      question: "Are your nutritional plans tailored to individual needs?",
      answer: "Yes, our nutritional plans are customized based on your goals, dietary preferences, and any restrictions you may have."
    },
    {
      question: "How often are wellness workshops held?",
      answer: "Wellness workshops are held monthly and cover topics like mindfulness, stress relief, and holistic wellness practices."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-header-section">
          <header className="faq-header">
            <h2 className="faq-title">
              Frequently
              <span className="faq-title-highlight">
                asked
              </span>
              {' '}questions
            </h2>
            <p className="faq-subtitle">
              Everything you need to know about the product and billing.
            </p>
          </header>
        </div>
        <div className="faq-content-section">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-question-button"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-text">
                    {faq.question}
                  </span>
                  <div className="faq-icon">
                    {openIndex === index ? (
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/24a5370c082677c92a6e39aa6f6631293ac1707a?placeholderIfAbsent=true" className="faq-icon-image" alt="Collapse" />
                    ) : (
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e04d6b21df0de2de23237d752773b370d79d26d?placeholderIfAbsent=true" className="faq-icon-image" alt="Expand" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
