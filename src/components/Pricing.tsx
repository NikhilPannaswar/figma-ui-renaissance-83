import React from 'react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter plan",
      price: "$29",
      period: "per user, per month",
      features: [
        "8 yoga classes per month",
        "2 fitness training sessions per month",
        "Access to online resources",
        "Monthly wellness newsletter"
      ],
      isPopular: false
    },
    {
      name: "Basic plan",
      price: "$29",
      period: "per user, per month",
      features: [
        "Unlimited yoga classes",
        "4 fitness training sessions per month",
        "1 personalized coaching session per month",
        "Access to online resources",
        "Monthly wellness newsletter"
      ],
      isPopular: true
    },
    {
      name: "Premium plan",
      price: "$29",
      period: "per user, per month",
      features: [
        "4 personalized coaching sessions per month",
        "Customized fitness and yoga plans",
        "Access to online resources",
        "Monthly wellness newsletter"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="self-center flex w-full max-w-[1416px] flex-col items-stretch ml-3 max-md:max-w-full px-4" id="plans">
      <div className="w-full max-w-[1393px] mt-[73px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {plans.map((plan, index) => (
            <article key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <div className={`flex min-h-[587px] flex-col items-center text-[rgba(15,46,22,1)] max-md:mt-10 ${plan.isPopular ? 'relative' : ''}`}>
                <div className={`relative flex min-h-[587px] max-w-full w-[419px] flex-col pt-[377px] pb-[50px] px-[30px] max-md:pt-[100px] max-md:px-5 ${plan.isPopular ? 'px-[135px] py-[293px]' : ''}`}>
                  <div className={`${plan.isPopular ? 'bg-[rgba(15,46,20,1)]' : 'bg-white'} absolute z-0 flex w-[419px] max-w-[419px] flex-col -translate-x-2/4 translate-y-[0%] h-[587px] ${plan.isPopular ? 'pt-[45px] pb-[327px]' : 'pt-[85px] pb-[250px]'} px-[42px] rounded-3xl left-2/4 bottom-0 max-md:pb-[100px] max-md:px-5`}>
                    <div className={`self-center w-[147px] max-w-full ${plan.isPopular ? 'text-[rgba(253,255,240,1)]' : 'text-[rgba(15,46,22,1)]'} font-normal text-center`}>
                      <h3 className="text-[28px] leading-none">
                        {plan.name}
                      </h3>
                      <div className="text-[64px] leading-[0] mt-[25px] max-md:text-[40px]">
                        {plan.price}
                      </div>
                      <p className="text-base font-light leading-[30px] mt-[25px]">
                        {plan.period}
                      </p>
                    </div>
                    <button className={`self-stretch ${plan.isPopular ? 'bg-[rgba(197,214,178,1)] text-[rgba(15,46,20,1)]' : 'border border-black text-[rgba(15,46,22,1)]'} gap-2.5 text-[22px] font-semibold leading-10 mt-[13px] px-[34px] py-[5px] rounded-[45px] max-md:px-5 hover:opacity-80 transition-opacity`}>
                      Start my 15-day trail
                    </button>
                    <div className={`border mb-[-50px] w-[148px] shrink-0 h-px mt-12 ${plan.isPopular ? 'border-[rgba(250,252,134,1)]' : 'border-[rgba(15,46,22,1)]'} border-solid max-md:mt-10 max-md:mb-2.5`} />
                  </div>
                  <div className={`${plan.isPopular ? 'text-[rgba(253,255,240,1)]' : 'text-[rgba(15,46,22,1)]'} text-lg font-semibold leading-10 text-center self-center z-0`}>
                    {plan.features.map((feature, featureIndex) => (
                      <React.Fragment key={featureIndex}>
                        {feature}
                        {featureIndex < plan.features.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                {plan.isPopular && (
                  <div className="border self-center z-0 min-h-px max-w-full w-[148px] border-[rgba(250,252,134,1)] border-solid" />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
