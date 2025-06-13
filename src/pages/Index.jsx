
import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Reviews } from '../components/Reviews';
import { AppPromotion } from '../components/AppPromotion';
import { CommunityClasses } from '../components/CommunityClasses';
import { Pricing } from '../components/Pricing';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-[rgba(218,227,207,1)] flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <main>
        <Hero />
        <Statistics />
        <Services />
        <Team />
        <Reviews />
        <AppPromotion />
        <CommunityClasses />
        <Pricing />
        <Contact />
      </main>
      
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
