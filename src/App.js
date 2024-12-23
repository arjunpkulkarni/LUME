'use client'

import React from 'react';
import Header from '../src/components/Nav';
import HeroSection from '../src/components/Hero';
import WhySection from './components/WhyUs';
import ServicesSection from './components/Services';
import CTASection from '../src/components/CTA';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhySection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
