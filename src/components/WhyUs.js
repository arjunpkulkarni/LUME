'use client'

import React from 'react'
import whyPicture from "../images/why.png"

export default function WhySection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-20">
          Why Us?
        </h2>
        
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Illustration */}
            <div className="relative">
              <img
                src={whyPicture}
                alt="Team collaboration illustration"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-light leading-relaxed">
                At LumeLabs we don't just market—we innovate.
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                Our tailored strategies, creative designs, and data-driven insights are crafted to amplify your brand's voice and deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

