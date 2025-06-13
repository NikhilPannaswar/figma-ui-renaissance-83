
import React from 'react';
import './CommunityClasses.css';

export const CommunityClasses = () => {
  return (
    <section className="community-classes">
      <header className="community-classes-header">
        <h2 className="community-classes-title">
          Community
          <span className="community-classes-title-italic">
            sweat
          </span>
          {' '}classes
        </h2>
        <p className="community-classes-description">
          If you're looking to supplement your current fitness routine with small group training or just want to join a few classes a month then take a look at our class pass options below.
        </p>
      </header>
    </section>
  );
};
