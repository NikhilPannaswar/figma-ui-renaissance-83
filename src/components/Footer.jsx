
import React from 'react';
import './Footer.css';

export const Footer = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9890a6a5941a4a6a8ed4fe9e2c9411b27f42e9a7?placeholderIfAbsent=true", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7aaba1fb9bb43a3146f2c15d57d801b8707261b5?placeholderIfAbsent=true", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/935410ff5f58d25bff508f3301a9b7355dbf59f6?placeholderIfAbsent=true", alt: "Instagram" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/020056698e8733abdad817eba7115e6e09af81c0?placeholderIfAbsent=true", alt: "LinkedIn" }
  ];

  const menuItems = ["About", "Features", "Pricing", "Gallery", "Team"];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="social-icons" role="list" aria-label="Social media links">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="social-icon-link"
                  aria-label={icon.alt}
                  role="listitem"
                >
                  <img
                    src={icon.src}
                    className="social-icon"
                    alt={icon.alt}
                  />
                </a>
              ))}
            </div>
            <nav className="footer-nav" aria-label="Footer navigation">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="footer-nav-link"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <button className="footer-cta-button">
            Start for free
          </button>
        </div>
        <hr className="footer-divider" />
        <p className="footer-copyright">
          © 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
