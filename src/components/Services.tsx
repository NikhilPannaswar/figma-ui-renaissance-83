import React from 'react';

export const Services: React.FC = () => {
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
    <section className="self-center flex w-full max-w-[1416px] flex-col items-stretch ml-3 mt-[151px] max-md:max-w-full max-md:mt-10 px-4">
      <header>
        <h2 className="text-[rgba(15,46,20,1)] text-[64px] font-normal ml-[26px] max-md:text-[40px] max-md:ml-2.5">
          Our Services
        </h2>
        <p className="text-[rgba(15,46,20,1)] text-xl font-normal w-[531px] ml-[26px] mt-[11px] max-md:max-w-full">
          Whether you're a beginner or an advanced practitioner, our offerings are designed to inspire and support you on your wellness journey.
        </p>
      </header>
      
      <div className="self-center w-full max-w-[1350px] mt-[111px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {services.map((service, index) => (
            <article key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col text-black font-normal max-md:mt-10">
                {service.isPlaceholder ? (
                  <div className="flex w-[87px] shrink-0 h-[91px] rounded-xl border-[rgba(15,46,20,1)] border-solid border-[3px]" />
                ) : (
                  <img
                    src={service.icon}
                    className={index === 0 ? "aspect-[1.09] object-contain w-[97px]" : "aspect-[1.13] object-contain w-[85px]"}
                    alt={`${service.title} icon`}
                  />
                )}
                <h3 className="text-[32px] leading-none tracking-[-1px] mt-[18px]">
                  {service.title}
                </h3>
                <p className="text-base leading-[25px] self-stretch z-10 mt-[9px] max-md:mr-[-17px]">
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
