'use client'

import React from 'react';
import bean from "../images/bean.png"; // Import the image correctly

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bean})`, // Use the imported image as the background
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          The B2B SaaS Agency that Delivers.
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          For those who want to be NOTICED in an era of noisy, over-saturated branding.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
}
