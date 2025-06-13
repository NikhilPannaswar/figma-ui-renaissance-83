import React from 'react';

export const CommunityClasses: React.FC = () => {
  return (
    <section className="self-center flex w-full max-w-[1416px] flex-col items-stretch ml-3 max-md:max-w-full px-4">
      <header className="text-center">
        <h2 className="text-black text-[66px] font-normal leading-none self-center mt-[186px] max-md:text-[40px] max-md:mt-10">
          Community
          <span style={{fontFamily: 'Playfair Display, -apple-system, Roboto, Helvetica, sans-serif', fontStyle: 'italic'}}>
            sweat
          </span>
          {' '}classes
        </h2>
        <p className="text-black text-lg font-normal leading-6 tracking-[1px] text-center self-center w-[669px] mt-[37px] max-md:max-w-full">
          If you're looking to supplement your current fitness routine with small group training or just want to join a few classes a month then take a look at our class pass options below.
        </p>
      </header>
    </section>
  );
};
