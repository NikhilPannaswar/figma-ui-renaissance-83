
import React from 'react';

export const Footer: React.FC = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9890a6a5941a4a6a8ed4fe9e2c9411b27f42e9a7?placeholderIfAbsent=true", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7aaba1fb9bb43a3146f2c15d57d801b8707261b5?placeholderIfAbsent=true", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/935410ff5f58d25bff508f3301a9b7355dbf59f6?placeholderIfAbsent=true", alt: "Instagram" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/020056698e8733abdad817eba7115e6e09af81c0?placeholderIfAbsent=true", alt: "LinkedIn" }
  ];

  const menuItems = ["About", "Features", "Pricing", "Gallery", "Team"];

  return (
    <footer className="bg-[rgba(218,227,207,1)] flex w-full flex-col overflow-hidden justify-center px-20 max-lg:px-10 max-md:px-5 py-[57px] max-md:py-[40px] max-md:max-w-full">
      <div className="flex w-full max-w-[1365px] flex-col max-md:max-w-full mx-auto">
        <div className="flex w-full max-w-[892px] items-stretch gap-5 flex-wrap justify-between max-lg:flex-col max-lg:items-center max-lg:gap-8">
          <div className="flex flex-col items-stretch max-lg:items-center">
            <div className="self-center flex gap-4" role="list" aria-label="Social media links">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={icon.alt}
                  role="listitem"
                >
                  <img
                    src={icon.src}
                    className="aspect-[1] object-contain w-6 shrink-0"
                    alt={icon.alt}
                  />
                </a>
              ))}
            </div>
            <nav className="flex gap-10 max-md:gap-6 max-sm:gap-4 text-base max-md:text-sm text-[rgba(16,35,37,1)] font-normal whitespace-nowrap mt-10 max-md:mt-6 max-sm:flex-wrap max-sm:justify-center" aria-label="Footer navigation">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[rgba(15,46,22,1)] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <button className="self-stretch max-lg:self-center bg-[rgba(16,35,37,1)] min-h-[60px] max-md:min-h-[50px] gap-2.5 text-[22px] max-md:text-[18px] text-[rgba(218,227,207,1)] font-semibold leading-10 my-auto px-[39px] max-md:px-6 py-2.5 rounded-[45px] border-[rgba(15,46,22,1)] border-solid border-[3px] hover:bg-[rgba(26,45,47,1)] transition-colors">
            Start for free
          </button>
        </div>
        <hr className="border w-full max-w-[1203px] shrink-0 h-px mt-[92px] max-md:mt-[60px] border-[rgba(16,35,37,1)] border-solid" />
        <p className="text-[rgba(15,46,22,1)] text-xs font-light self-center mt-[33px] max-md:mt-6">
          © 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
