
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[rgba(218,227,207,1)] px-4">
      <div className="self-center flex w-full max-w-[1515px] flex-col items-stretch mx-auto">
        <div className="mt-[101px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-lg:flex-col max-lg:items-stretch">
            <div className="w-full lg:w-[45%] max-md:w-full max-md:ml-0">
              <div className="flex w-full flex-col self-stretch my-auto max-md:max-w-full max-md:mt-10">
                <h1 className="text-[rgba(15,46,22,1)] text-[86px] max-lg:text-[56px] max-md:text-[40px] max-sm:text-[32px] font-extrabold leading-[105px] max-lg:leading-[70px] max-md:leading-[55px] max-sm:leading-[45px] self-stretch max-md:max-w-full">
                  <span style={{fontFamily: 'Instrument Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 500, color: 'rgba(15,46,22,1)'}}>
                    Transform
                  </span>
                  {' '}
                  <span style={{fontFamily: 'Playfair Display, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 400, fontStyle: 'italic', color: 'rgba(15,46,22,1)'}}>
                    Your Body
                  </span>
                  {' '}
                  <span style={{fontFamily: 'Instrument Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 500, color: 'rgba(15,46,22,1)'}}>
                    and Mind
                  </span>
                </h1>
                <p className="text-black text-[28px] max-lg:text-[22px] max-md:text-[18px] font-normal leading-[42px] max-lg:leading-[32px] max-md:leading-[28px] mt-[31px] max-md:max-w-full">
                  Join us in transforming your body and mind through our comprehensive yoga and fitness programs.
                </p>
                <div className="flex w-full max-w-[442px] items-stretch gap-3 max-sm:gap-2 text-[22px] max-md:text-[18px] font-semibold leading-10 max-sm:flex-col max-sm:items-center mt-16 max-md:mt-10">
                  <button className="flex-1 max-sm:w-full bg-[rgba(15,46,22,1)] min-h-[60px] max-md:min-h-[50px] gap-2.5 text-[rgba(199,214,178,1)] px-[39px] max-md:px-6 py-2.5 rounded-[45px] hover:bg-[rgba(25,56,32,1)] transition-colors">
                    Join Member
                  </button>
                  <button className="flex-1 max-sm:w-full bg-[rgba(199,214,178,1)] min-h-[60px] max-md:min-h-[50px] gap-2.5 text-[rgba(15,46,22,1)] px-[39px] max-md:px-6 py-2.5 rounded-[45px] border-[rgba(15,46,22,1)] border-solid border-[3px] hover:bg-[rgba(189,204,168,1)] transition-colors">
                    Start for free
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[55%] lg:ml-5 max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08391574b7d77ea368cd6bbeac8c4d08a337e712?placeholderIfAbsent=true"
                className="aspect-[1.13] object-contain w-full grow rounded-[32px] max-md:max-w-full max-md:mt-10"
                alt="Yoga and fitness training"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
