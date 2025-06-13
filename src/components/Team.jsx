
import React from 'react';
import './Team.css';

export const Team = () => {
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
    <section className="team">
      <header className="team-header">
        <h2 className="team-title">
          meet our team
        </h2>
      </header>
      
      <div className="team-grid">
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <article key={index} className="team-member">
              <div className="member-content">
                <img
                  src={member.image}
                  className="member-image"
                  alt={`${member.name} profile`}
                />
                <div className="member-info">
                  <h3 className="member-name">
                    {member.name}
                  </h3>
                  <button className="member-more-btn">
                    More-&gt;
                  </button>
                </div>
              </div>
            </article>
          ))}
          
          <article className="team-join-card">
            <div className="join-card-content">
              <h3 className="join-card-subtitle">
                Join the team
              </h3>
              <h4 className="join-card-title">
                Personalized Coaching
              </h4>
              <p className="join-card-description">
                One-on-one sessions with our fitness and yoga experts. Get personalized guidance and encouragement to reach your specific goals.
              </p>
              <button className="join-card-button">
                View more
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
