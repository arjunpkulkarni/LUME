'use client'

import React from 'react';
import Header from '../src/components/Nav';
import HeroSection from '../src/components/Hero';
import WhySection from './components/WhyUs';
import ServicesSection from './components/Services';
import Footer from '../src/components/Footer';
import PortfolioSection from './components/Portfolio';
import ContactSection from './components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhySection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
