import React from 'react';

export const Statistics: React.FC = () => {
  return (
    <section className="bg-[rgba(15,46,20,1)] flex w-full flex-col items-center justify-center mt-[218px] px-[70px] py-[60px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="w-full max-w-[1510px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[54%] max-md:w-full max-md:ml-0">
            <div className="flex grow items-stretch gap-[17px] text-[28px] text-[rgba(218,227,207,1)] font-normal leading-[49px] flex-wrap mt-7 max-md:mt-10">
              <div className="text-white">
                <span style={{fontWeight: 500, fontSize: '85px', color: 'rgba(218,227,207,1)'}}>
                  3.2
                </span>
                <span style={{fontWeight: 500, fontSize: '40px', color: 'rgba(250,252,134,1)'}}>
                  K
                </span>
                <br />
                <span style={{fontSize: '22px'}}>World champions</span>
              </div>
              <div className="text-[135px] font-thin leading-[0.3] my-auto max-md:text-[40px]">
                l
              </div>
              <div>
                <span style={{fontWeight: 500, fontSize: '85px', color: 'rgba(218,227,207,1)'}}>
                  1.8
                </span>
                <span style={{fontSize: '40px', color: 'rgba(250,252,134,1)'}}>
                  %
                </span>
                <br />
                <span style={{fontSize: '22px'}}>Runner up champions</span>
              </div>
              <div className="text-[135px] font-thin leading-[0.3] my-auto max-md:text-[40px]">
                l
              </div>
              <div>
                <span style={{fontWeight: 500, fontSize: '85px', color: 'rgba(218,227,207,1)'}}>
                  4.5
                </span>
                <span style={{fontSize: '40px', color: 'rgba(250,252,134,1)'}}>
                  M
                </span>
                <br />
                <span style={{fontSize: '22px'}}>Sea games participation</span>
              </div>
            </div>
          </div>
          <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <p className="text-[rgba(218,227,207,1)] text-2xl font-normal leading-10 max-md:max-w-full max-md:mt-10">
              Once we receive your consult request we match you up with a trainer. This is to ensure that your unique goals, needs, and personalities align.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
