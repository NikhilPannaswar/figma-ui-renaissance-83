
import React from 'react';
import './Reviews.css';

export const Reviews = () => {
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
    <section className="reviews">
      <header className="reviews-header">
        <h2 className="reviews-title">
          Over 100+ reviews from our clients
        </h2>
      </header>
      
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <article key={index} className="review-card">
            <div className="review-content">
              <header className="review-header">
                <img
                  src={review.avatar}
                  className="review-avatar"
                  alt={`${review.name} avatar`}
                />
                <div className="review-user-info">
                  <h3 className="review-name">
                    {review.name}
                  </h3>
                  <p className="review-username">
                    {review.username}
                  </p>
                </div>
              </header>
              <blockquote className="review-text">
                "{review.review}"
              </blockquote>
              <time className="review-date">
                {review.date}
              </time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
