
import React from 'react';
import './AppPromotion.css';

export const AppPromotion = () => {
  return (
    <section className="app-promotion">
      <div className="app-promotion-container">
        <div className="app-promotion-content">
          <div className="app-promotion-text">
            <h2 className="app-promotion-title">
              Clearmind, 
              <span className="app-promotion-title-italic">
                your partner
              </span>
              {' '}in mental wellness.
            </h2>
            <p className="app-promotion-description">
              Find and book your favorite yoga classes from anywhere with our yoga app.
            </p>
            <div className="app-promotion-buttons">
              <div className="app-store-container">
                <div className="app-store-button">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44118a6a381fb08c8a5f1ea6416cb7cad3c44783?placeholderIfAbsent=true"
                    className="app-store-image"
                    alt="App Store download"
                  />
                </div>
                <div className="google-play-button">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f339654269849ddf43633678c1aacc7b28aeb6?placeholderIfAbsent=true"
                    className="google-play-image"
                    alt="Google Play download"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-promotion-image-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b9a17145badeb748988a822ccc74a18e0bdd1b?placeholderIfAbsent=true"
            className="app-promotion-image"
            alt="Mobile app preview"
          />
        </div>
      </div>
    </section>
  );
};
