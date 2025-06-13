
import React from 'react';

export const Statistics: React.FC = () => {
  return (
    <section className="bg-[rgba(15,46,20,1)] flex w-full flex-col items-center justify-center mt-[218px] max-lg:mt-[120px] max-md:mt-[80px] px-[70px] max-lg:px-[40px] max-md:px-5 py-[60px] max-md:py-[40px] max-md:max-w-full">
      <div className="w-full max-w-[1510px] max-md:max-w-full">
        <div className="gap-5 flex max-lg:flex-col max-lg:items-stretch">
          <div className="w-full lg:w-[54%] max-md:w-full max-md:ml-0">
            <div className="flex grow items-center max-lg:items-start max-md:flex-col gap-[17px] max-md:gap-[30px] text-[28px] max-lg:text-[24px] max-md:text-[20px] text-[rgba(218,227,207,1)] font-normal leading-[49px] max-lg:leading-[40px] max-md:leading-[35px] flex-wrap mt-7 max-md:mt-10">
              <div className="text-white text-center max-md:text-left">
                <span style={{fontWeight: 500, fontSize: '85px', color: 'rgba(218,227,207,1)'}} className="max-lg:text-[60px] max-md:text-[48px]">
                  3.2
                </span>
                <span style={{fontWeight: 500, fontSize: '40px', color: 'rgba(250,252,134,1)'}} className="max-lg:text-[30px] max-md:text-[24px]">
                  K
                </span>
                <br />
                <span style={{fontSize: '22px'}} className="max-lg:text-[18px] max-md:text-[16px]">World champions</span>
              </div>
              <div className="text-[135px] max-lg:text-[80px] max-md:hidden font-thin leading-[0.3] my-auto">
                l
              </div>
              <div className="text-white text-center max-md:text-left">
                <span style={{fontWeight: 500, fontSize: '85px', color: 'rgba(218,227,207,1)'}} className="max-lg:text-[60px] max-md:text-[48px]">
                  1.8
                </span>
                <span style={{fontSize: '40px', color: 'rgba(250,252,134,1)'}} className="max-lg:text-[30px] max-md:text-[24px]">
                  %
                </span>
                <br />
                <span style={{fontSize: '22px'}} className="max-lg:text-[18px] max-md:text-[16px]">Runner up champions</span>
              </div>
              <div className="text-[135px] max-lg:text-[80px] max-md:hidden font-thin leading-[0.3] my-auto">
                l
              </div>
              <div className="text-white text-center max-md:text-left">
                <span style={{fontWeight: 500, fontSize: '85px', color: 'rgba(218,227,207,1)'}} className="max-lg:text-[60px] max-md:text-[48px]">
                  4.5
                </span>
                <span style={{fontSize: '40px', color: 'rgba(250,252,134,1)'}} className="max-lg:text-[30px] max-md:text-[24px]">
                  M
                </span>
                <br />
                <span style={{fontSize: '22px'}} className="max-lg:text-[18px] max-md:text-[16px]">Sea games participation</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[46%] lg:ml-5 max-md:w-full max-md:ml-0">
            <p className="text-[rgba(218,227,207,1)] text-2xl max-lg:text-xl max-md:text-lg font-normal leading-10 max-lg:leading-8 max-md:leading-7 max-md:max-w-full max-md:mt-10">
              Once we receive your consult request we match you up with a trainer. This is to ensure that your unique goals, needs, and personalities align.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
