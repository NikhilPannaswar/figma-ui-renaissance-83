
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
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
    <section className="self-center flex w-full max-w-[1416px] flex-col items-stretch ml-3 max-md:ml-0 max-md:max-w-full px-4" id="contact">
      <div className="w-full mt-[209px] max-lg:mt-[120px] max-md:mt-[80px] max-md:max-w-full">
        <div className="gap-5 flex max-lg:flex-col max-lg:items-stretch">
          <div className="w-full lg:w-[69%] max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-full md:w-6/12 max-md:w-full max-md:ml-0">
                  <img
                    src={galleryImages[0]}
                    className="aspect-[0.99] object-contain w-full grow mt-3.5 rounded-[50%] max-md:max-w-full max-md:mt-10"
                    alt="Yoga practice gallery image 1"
                  />
                </div>
                <div className="w-full md:w-6/12 md:ml-5 max-md:w-full max-md:ml-0">
                  <div className="w-full max-md:max-w-full max-md:mt-[34px]">
                    <div className="max-md:max-w-full">
                      <div className="gap-5 flex max-sm:flex-col max-sm:items-stretch">
                        <div className="w-full sm:w-6/12 max-sm:w-full max-sm:ml-0">
                          <img
                            src={galleryImages[1]}
                            className="aspect-[1.04] object-contain w-full max-w-[213px] shrink-0 grow rounded-[50%] max-sm:mt-[35px]"
                            alt="Yoga practice gallery image 2"
                          />
                        </div>
                        <div className="w-full sm:w-6/12 sm:ml-5 max-sm:w-full max-sm:ml-0">
                          <img
                            src={galleryImages[2]}
                            className="aspect-[1.03] object-contain w-full max-w-[212px] shrink-0 grow rounded-[50%] max-sm:mt-[35px]"
                            alt="Yoga practice gallery image 3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 max-md:max-w-full">
                      <div className="gap-5 flex max-sm:flex-col max-sm:items-stretch">
                        <div className="w-full sm:w-6/12 max-sm:w-full max-sm:ml-0">
                          <img
                            src={galleryImages[3]}
                            className="aspect-[1.03] object-contain w-full max-w-[213px] shrink-0 grow rounded-[50%] max-sm:mt-[35px]"
                            alt="Yoga practice gallery image 4"
                          />
                        </div>
                        <div className="w-full sm:w-6/12 sm:ml-5 max-sm:w-full max-sm:ml-0">
                          <img
                            src={galleryImages[4]}
                            className="aspect-[1.03] object-contain w-full max-w-[212px] shrink-0 grow rounded-[50%] max-sm:mt-[35px]"
                            alt="Yoga practice gallery image 5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[31%] lg:ml-5 max-md:w-full max-md:ml-0">
            <div className="min-h-[470px] w-full text-lg max-md:text-base text-[rgba(15,46,20,1)] font-normal mt-3.5 max-md:mt-10">
              <h2 className="text-[64px] max-lg:text-[48px] max-md:text-[36px] max-sm:text-[28px] leading-[0] max-md:text-center lg:text-left">
                Get in touch
              </h2>
              <p className="leading-7 max-md:leading-6 mt-[38px] max-md:mt-6 max-md:text-center lg:text-left">
                I want to help you overcome all mental and physical hurdles in your everyday life. 6 Years ago, I was electrocuted with 277 volts.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-[38px] max-md:mt-6">
                <div className="mb-[38px] max-md:mb-6">
                  <label htmlFor="email" className="text-[rgba(16,35,37,1)] leading-[34px] block">
                    Email (required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-2 bg-transparent border-b border-[rgba(16,35,37,1)] focus:outline-none focus:border-[rgba(15,46,22,1)] transition-colors"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div className="mb-[38px] max-md:mb-6">
                  <label htmlFor="message" className="text-[rgba(16,35,37,1)] leading-[34px] block">
                    Message (required)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full mt-2 p-2 bg-transparent border-b border-[rgba(16,35,37,1)] focus:outline-none focus:border-[rgba(15,46,22,1)] transition-colors resize-vertical"
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="bg-[rgba(15,46,22,1)] min-h-[60px] max-md:min-h-[50px] w-full max-w-[180px] max-md:max-w-full gap-2.5 text-[22px] max-md:text-[18px] text-white font-semibold whitespace-nowrap leading-10 px-[39px] max-md:px-6 py-2.5 rounded-[45px] hover:bg-[rgba(25,56,32,1)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(15,46,22,1)] focus:ring-offset-2"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
