import React from 'react';

export const AppPromotion: React.FC = () => {
  return (
    <section className="bg-[rgba(164,191,134,1)] self-center w-[1321px] max-w-full mt-[237px] pl-[76px] rounded-[32px] max-md:mt-10 max-md:pl-5 mx-4">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[41%] max-md:w-full max-md:ml-0">
          <div className="z-10 flex w-full flex-col items-stretch mt-[60px] max-md:max-w-full max-md:mt-10">
            <h2 className="text-[rgba(15,46,20,1)] text-5xl font-normal leading-[60px] max-md:text-[40px] max-md:leading-[56px]">
              Clearmind, 
              <span style={{fontFamily: 'Playfair Display, -apple-system, Roboto, Helvetica, sans-serif', fontStyle: 'italic', color: 'rgba(15,46,20,1)'}}>
                your partner
              </span>
              {' '}in mental wellness.
            </h2>
            <p className="text-black text-xl font-normal leading-[27px] mr-[25px] mt-2 max-md:mr-2.5">
              Find and book your favorite yoga classes from anywhere with our yoga app.
            </p>
            <div className="mt-[18px] max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-6/12 max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44118a6a381fb08c8a5f1ea6416cb7cad3c44783?placeholderIfAbsent=true"
                    className="aspect-[3.39] object-contain w-[200px] shrink-0 max-w-full self-stretch my-auto max-md:mt-10"
                    alt="App Store download"
                  />
                </div>
                <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f339654269849ddf43633678c1aacc7b28aeb6?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-[212px] shrink-0 max-w-full max-md:mt-7"
                    alt="Google Play download"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[59%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b9a17145badeb748988a822ccc74a18e0bdd1b?placeholderIfAbsent=true"
            className="aspect-[1.11] object-contain w-full mt-[-38px] grow max-md:max-w-full max-md:mt-10"
            alt="Mobile app preview"
          />
        </div>
      </div>
    </section>
  );
};
