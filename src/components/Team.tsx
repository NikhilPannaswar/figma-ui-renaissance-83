import React from 'react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a37850772362f569835d8bbad72d843813bfb87a?placeholderIfAbsent=true",
      name: "Clare Ford"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2e0f0e791b3235ce130b0a78d203b3022d2c1aa?placeholderIfAbsent=true",
      name: "Alicia Regis"
    }
  ];

  return (
    <section className="self-center flex w-full max-w-[1416px] flex-col items-stretch ml-3 max-md:max-w-full px-4">
      <header>
        <h2 className="text-[rgba(15,46,20,1)] text-[64px] font-normal tracking-[-1.28px] ml-[17px] mt-[90px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
          meet our team
        </h2>
      </header>
      
      <div className="w-full max-w-[1353px] mt-[71px] max-md:max-w-full max-md:mr-0.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {teamMembers.map((member, index) => (
            <article key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex w-full flex-col items-stretch text-2xl text-black max-md:mt-10">
                <img
                  src={member.image}
                  className="aspect-[0.64] object-contain w-full"
                  alt={`${member.name} profile`}
                />
                <div className="self-center flex w-[296px] max-w-full items-center gap-[40px_96px] justify-between mt-[21px]">
                  <h3 className="font-normal self-stretch my-auto">
                    {member.name}
                  </h3>
                  <button className="font-semibold tracking-[-0.48px] self-stretch my-auto hover:text-[rgba(15,46,22,1)] transition-colors">
                    More-&gt;
                  </button>
                </div>
              </div>
            </article>
          ))}
          
          <article className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(15,46,20,1)] flex w-full flex-col items-stretch text-[rgba(253,255,240,1)] font-light mx-auto pt-[30px] pb-12 px-[29px] rounded-2xl max-md:mt-10 max-md:pl-5">
              <h3 className="text-xl tracking-[-0.8px]">
                Join the team
              </h3>
              <h4 className="text-[26px] font-medium tracking-[-0.52px] mt-[17px]">
                Personalized Coaching
              </h4>
              <p className="text-[15px] leading-[17px] tracking-[-0.75px] mt-[17px] max-md:mr-[9px]">
                One-on-one sessions with our fitness and yoga experts. Get personalized guidance and encouragement to reach your specific goals.
              </p>
              <button className="bg-[rgba(218,227,207,1)] min-h-10 gap-2.5 text-base text-[rgba(15,46,20,1)] font-semibold leading-10 flex-wrap mt-[228px] pl-[22px] pr-[21px] rounded-[45px] max-md:mt-10 max-md:px-5 hover:bg-[rgba(208,217,197,1)] transition-colors">
                View more
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
