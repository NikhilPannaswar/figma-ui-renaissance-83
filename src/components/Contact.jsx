
import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      message: ''
    };

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ email: '', message: '' });
    }
  };

  const galleryImages = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/4285dd288c3a25c3a01fd4b737a88d72a570d924?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/381ad9b5380b8e4ec73419c72d5584452bcf4933?placeholderIfAbsent=true", 
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9f6d7991b6874f2b5988120ef1f49572f3572ec9?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9b3bff15e34085ad9e77983a55381659aa537cb1?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/39df2a87d2d99ac9f024381db5fe208452f18d54?placeholderIfAbsent=true"
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-gallery">
          <div className="contact-gallery-main">
            <div className="gallery-main-image">
              <img
                src={galleryImages[0]}
                className="gallery-image-large"
                alt="Yoga practice gallery image 1"
              />
            </div>
            <div className="gallery-grid">
              <div className="gallery-grid-container">
                <div className="gallery-grid-row">
                  <div className="gallery-grid-item">
                    <img
                      src={galleryImages[1]}
                      className="gallery-image-small"
                      alt="Yoga practice gallery image 2"
                    />
                  </div>
                  <div className="gallery-grid-item-ml">
                    <img
                      src={galleryImages[2]}
                      className="gallery-image-small"
                      alt="Yoga practice gallery image 3"
                    />
                  </div>
                </div>
              </div>
              <div className="gallery-grid-bottom">
                <div className="gallery-grid-row">
                  <div className="gallery-grid-item">
                    <img
                      src={galleryImages[3]}
                      className="gallery-image-small"
                      alt="Yoga practice gallery image 4"
                    />
                  </div>
                  <div className="gallery-grid-item-ml">
                    <img
                      src={galleryImages[4]}
                      className="gallery-image-small"
                      alt="Yoga practice gallery image 5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-section">
          <div className="contact-form-container">
            <h2 className="contact-title">
              Get in touch
            </h2>
            <p className="contact-description">
              I want to help you overcome all mental and physical hurdles in your everyday life. 6 Years ago, I was electrocuted with 277 volts.
            </p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="form-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message (required)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-textarea"
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="form-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                className="form-submit-button"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
