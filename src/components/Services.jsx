
import React from 'react';
import './Services.css';

export const Services = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/687c3c2f336f8a7b92ff26f6c7c721a96a7f0e94?placeholderIfAbsent=true",
      title: "Yoga classes",
      description: "Classes for all levels, from beginners to advanced. Enjoy various styles like Hatha, Vinyasa, and Yin Yoga."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/59b04d4e4da57a9ec7241be04b9ee71faed04458?placeholderIfAbsent=true",
      title: "Fitness Training",
      description: "Personalized training programs tailored to your fitness goals. Focus on strength and flexibility."
    },
    {
      title: "Wellness Lab",
      description: "Explore workshops on mindfulness, stress relief, and holistic wellness. Suitable for all levels of experience.",
      isPlaceholder: true
    }
  ];

  return (
    <section className="services">
      <header className="services-header">
        <h2 className="services-title">
          Our Services
        </h2>
        <p className="services-description">
          Whether you're a beginner or an advanced practitioner, our offerings are designed to inspire and support you on your wellness journey.
        </p>
      </header>
      
      <div className="services-grid">
        <div className="services-container">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-content">
                {service.isPlaceholder ? (
                  <div className="service-icon-placeholder" />
                ) : (
                  <img
                    src={service.icon}
                    className={`service-icon ${index === 0 ? 'service-icon-large' : 'service-icon-medium'}`}
                    alt={`${service.title} icon`}
                  />
                )}
                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="service-text">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
