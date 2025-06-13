import React, { useState } from 'react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[rgba(15,46,22,1)] w-full mt-[215px] px-20 py-[69px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[35%] max-md:w-full max-md:ml-0">
          <header className="flex flex-col items-stretch text-[rgba(253,255,240,1)] font-normal mt-[114px] max-md:max-w-full max-md:mt-10">
            <h2 className="text-5xl leading-[62px] max-md:text-[40px] max-md:leading-[58px]">
              Frequently
              <span style={{fontFamily: 'Playfair Display, -apple-system, Roboto, Helvetica, sans-serif', fontStyle: 'italic', color: 'rgba(250,252,134,1)'}}>
                asked
              </span>
              {' '}questions
            </h2>
            <p className="text-lg leading-[41px] mt-2 max-md:max-w-full">
              Everything you need to know about the product and billing.
            </p>
          </header>
        </div>
        <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full max-md:mt-10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-2 border-[rgba(250,252,134,1)] pb-[33px] mb-[33px]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center gap-[40px_100px] text-2xl text-[rgba(253,255,240,1)] font-normal leading-[50px] justify-between flex-wrap w-full text-left max-md:max-w-full hover:opacity-80 transition-opacity"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="self-stretch my-auto max-md:max-w-full">
                    {faq.question}
                  </span>
                  <div className="aspect-[1] object-contain w-[42px] self-stretch shrink-0 my-auto">
                    {openIndex === index ? (
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/24a5370c082677c92a6e39aa6f6631293ac1707a?placeholderIfAbsent=true" className="w-full h-full" alt="Collapse" />
                    ) : (
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e04d6b21df0de2de23237d752773b370d79d26d?placeholderIfAbsent=true" className="w-full h-full" alt="Expand" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="text-[rgba(253,255,240,1)] text-lg leading-7 mt-4 max-md:max-w-full"
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
