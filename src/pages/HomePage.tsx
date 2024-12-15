import React from 'react';
import { Hero } from '../components/sections/Hero';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Features } from '../components/sections/Features';
import { ECGBasics } from '../components/sections/ECGBasics';
import { TechnicalSpecs } from '../components/sections/TechnicalSpecs';
import { CPRAwareness } from '../components/sections/CPRAwareness';
import { Contact } from '../components/sections/Contact';

export function HomePage() {
  return (
    <main className="pt-16">
      <Hero />
      <WhyChooseUs />
      <Features />
      <ECGBasics />
      <TechnicalSpecs />
      <CPRAwareness />
      <Contact />
    </main>
  );
}