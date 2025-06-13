
import React from 'react';
import './Statistics.css';

export const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics-container">
        <div className="statistics-content">
          <div className="statistics-stats">
            <div className="stat-item">
              <div className="stat-number">
                <span className="stat-value">3.2</span>
                <span className="stat-unit">K</span>
              </div>
              <div className="stat-label">World champions</div>
            </div>
            <div className="stat-divider">l</div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="stat-value">1.8</span>
                <span className="stat-unit">%</span>
              </div>
              <div className="stat-label">Runner up champions</div>
            </div>
            <div className="stat-divider">l</div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="stat-value">4.5</span>
                <span className="stat-unit">M</span>
              </div>
              <div className="stat-label">Sea games participation</div>
            </div>
          </div>
          <div className="statistics-text">
            <p>
              Once we receive your consult request we match you up with a trainer. This is to ensure that your unique goals, needs, and personalities align.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
