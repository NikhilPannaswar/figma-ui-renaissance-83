import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [cartCount] = useState(0);

  return (
    <header className="bg-[rgba(218,227,207,1)] pt-[34px]">
      <div className="self-center flex w-full max-w-[1515px] flex-col items-stretch max-md:max-w-full mx-auto">
        <nav className="self-center z-10 flex items-center text-[22px] flex-wrap max-md:max-w-full">
          <div className="text-[rgba(15,46,22,1)] text-[41px] font-normal leading-loose self-stretch my-auto">
            Vital Balance
          </div>
          <div className="self-stretch flex min-w-60 items-center gap-[40px_41px] text-black font-normal whitespace-nowrap text-center leading-none my-auto ml-auto">
            <a href="#trainer" className="self-stretch my-auto hover:text-[rgba(15,46,22,1)] transition-colors">
              Trainer
            </a>
            <a href="#blog" className="self-stretch my-auto hover:text-[rgba(15,46,22,1)] transition-colors">
              Blog
            </a>
            <a href="#contact" className="self-stretch my-auto hover:text-[rgba(15,46,22,1)] transition-colors">
              Contact
            </a>
            <a href="#plans" className="self-stretch my-auto hover:text-[rgba(15,46,22,1)] transition-colors">
              Plans
            </a>
          </div>
          <div className="self-stretch flex items-center gap-[34px] my-auto ml-8">
            <div className="self-stretch flex items-center gap-[3px] text-[rgba(16,35,37,1)] font-bold whitespace-nowrap text-center leading-none my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b823d8f72156682d18577b791e9df98f8f8d219b?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto"
                alt="Cart"
              />
              <span className="self-stretch my-auto">
                {cartCount}
              </span>
            </div>
            <button className="bg-[rgba(199,214,178,1)] self-stretch flex min-h-[60px] items-center gap-2.5 text-black font-semibold leading-10 w-[147px] my-auto pl-[11px] pr-5 py-2 rounded-[45px] border-[rgba(15,46,22,1)] border-solid border-[3px] hover:bg-[rgba(189,204,168,1)] transition-colors">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/56ee7190aa533f77d75747890a4b578ddbd14b89?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[45px] self-stretch shrink-0 my-auto rounded-[50%]"
                alt="User avatar"
              />
              <span className="self-stretch my-auto">
                Log in
              </span>
            </button>
          </div>
        </nav>
        <div className="text-[rgba(15,46,22,1)] text-xl font-extrabold leading-[68px] mt-[-68px] ml-[242px] max-md:ml-2.5">
          TM
        </div>
      </div>
    </header>
  );
};
