
import React from 'react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/99c00a8fa6b39a36939f102e07f6b69a7fd6dccb?placeholderIfAbsent=true",
      name: "Clare Bamford",
      username: "@staking",
      review: "My brother I can't thank you enough even if you say it's all me.",
      date: "15.09.2024"
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/d85c6785868a402f9a18be0ad61cc9a3b799a5a4?placeholderIfAbsent=true",
      name: "Tracy Hartmann",
      username: "@staking",
      review: "My brother I can't thank you enough even if you say it's all me.",
      date: "15.09.2024"
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/45399f003f954c87bd752ea4d6e552eff3d901af?placeholderIfAbsent=true",
      name: "Israel Steuber",
      username: "@staking",
      review: "My brother I can't thank you enough even if you say it's all me.",
      date: "15.09.2024"
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/baa4ccd67cb755d01aea28c4d8960d28d71f7088?placeholderIfAbsent=true",
      name: "Roderick Beier",
      username: "@staking",
      review: "My brother I can't thank you enough even if you say it's all me.",
      date: "15.09.2024"
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ca3aba2e8db7fdebf7ba4b10628870e78b7bbd1?placeholderIfAbsent=true",
      name: "Elena Dach",
      username: "@staking",
      review: "My brother I can't thank you enough even if you say it's all me.",
      date: "15.09.2024"
    }
  ];

  return (
    <section className="self-center flex w-full max-w-[1416px] flex-col items-stretch ml-3 max-md:ml-0 max-md:max-w-full px-4">
      <header>
        <h2 className="text-black text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-normal leading-[56px] max-lg:leading-[48px] max-md:leading-[41px] text-center self-center mt-[136px] max-lg:mt-[100px] max-md:mt-[60px] max-md:max-w-full">
          Over 100+ reviews from our clients
        </h2>
      </header>
      
      <div className="self-center flex w-full max-w-[1349px] items-stretch gap-[40px_49px] max-lg:gap-6 max-md:gap-4 text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-[115px] max-lg:mt-[70px] max-md:mt-[50px] max-md:max-w-full">
        {reviews.map((review, index) => (
          <article key={index} className="w-full">
            <div className="bg-[rgba(197,214,178,1)] flex w-full flex-col items-stretch px-4 py-[18px] rounded-xl">
              <header className="flex gap-5 justify-between">
                <img
                  src={review.avatar}
                  className="aspect-[1] object-contain w-11 shrink-0 rounded-[50%]"
                  alt={`${review.name} avatar`}
                />
                <div className="flex flex-col items-stretch mt-2.5">
                  <h3 className="text-base max-md:text-sm font-medium leading-none tracking-[0.32px]">
                    {review.name}
                  </h3>
                  <p className="text-[13px] max-md:text-xs font-extralight leading-none tracking-[0.13px]">
                    {review.username}
                  </p>
                </div>
              </header>
              <blockquote className="text-[15px] max-md:text-sm font-light leading-[17px] tracking-[0.3px] mt-7 max-md:mt-4">
                "{review.review}"
              </blockquote>
              <time className="text-sm max-md:text-xs font-extralight leading-none tracking-[0.14px] mt-[74px] max-md:mt-8">
                {review.date}
              </time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
