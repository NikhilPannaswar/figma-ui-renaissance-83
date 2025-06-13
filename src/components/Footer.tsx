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
    <footer className="bg-[rgba(218,227,207,1)] flex w-full flex-col overflow-hidden justify-center px-20 py-[57px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1365px] flex-col max-md:max-w-full mx-auto">
        <div className="flex w-[892px] max-w-full items-stretch gap-5 flex-wrap justify-between">
          <div className="flex flex-col items-stretch">
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
            <nav className="flex gap-10 text-base text-[rgba(16,35,37,1)] font-normal whitespace-nowrap mt-10" aria-label="Footer navigation">
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
          <button className="self-stretch bg-[rgba(16,35,37,1)] min-h-[60px] gap-2.5 text-[22px] text-[rgba(218,227,207,1)] font-semibold leading-10 my-auto px-[39px] py-2.5 rounded-[45px] border-[rgba(15,46,22,1)] border-solid border-[3px] max-md:px-5 hover:bg-[rgba(26,45,47,1)] transition-colors">
            Start for free
          </button>
        </div>
        <hr className="border w-[1203px] shrink-0 max-w-full h-px mt-[92px] border-[rgba(16,35,37,1)] border-solid max-md:mt-10" />
        <p className="text-[rgba(15,46,22,1)] text-xs font-light self-center ml-[17px] mt-[33px]">
          © 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
