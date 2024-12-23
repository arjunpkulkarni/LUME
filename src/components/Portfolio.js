'use client'

import React from 'react';

export default function PortfolioSection() {
  return (
    <section className="bg-black text-white">
      {/* Portfolio Header */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-5xl md:text-7xl font-light text-center mb-24">
          Portfolio
        </h2>

        {/* Case Study Card */}
        <div className="relative h-[300px] w-full rounded-3xl overflow-hidden">
          
          {/* <img
            src="/images/fitcheck-store.jpg"
            alt="FitCheck retail space"
            className="absolute inset-0 object-cover w-full h-full"
          /> */}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <div className="flex items-center gap-4 mb-8">
              {/* Icon */}
              <div className="text-blue-400">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V5C22 4.44772 21.5523 4 21 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 8L12 12L8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-4xl md:text-6xl font-light">
                FitCheck<span className="text-blue-400">.</span>
              </h3>
            </div>

            <p className="text-xl md:text-2xl max-w-2xl leading-relaxed">
              The first centralized fashion social platform. FitCheck is a hub for clothing,
              shopping, and sharing your outfits. With over 100 brands, our app offers the best
              deals and advanced technology to help you find the perfect clothes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
