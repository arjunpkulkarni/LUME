'use client'

import React from 'react'
import SocialMedia from "../images/socialMedia.png"
import Programming from "../images/programming.png"

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-light text-center mb-24">
          Services
        </h2>

        {/* Social Media Marketing */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-blue-500 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Social Media Marketing
            </h3>
            <p className="text-blue-400 text-xl font-light">
              Drive clicks. Unlock insights. Deliver results.
            </p>
            <p className="text-gray-300 text-lg max-w-xl">
              Your business has value to share—whether it's products, services, or expertise. 
              Let's ensure your message reaches the right audience.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300">
              Explore More
            </button>
          </div>
          <div className="relative">
            <img
              src={SocialMedia}
              alt="Social Media Marketing Illustration"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Website Development */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={Programming}
              alt="Website Development Illustration"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6 text-right order-1 md:order-2">
            <h3 className="text-4xl md:text-5xl font-light">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Website Development
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                and, Design
              </span>
            </h3>
            <p className="text-blue-400 text-xl font-light">
              Seamless functionality. Higher conversions. Proven results.
            </p>
            <p className="text-gray-300 text-lg max-w-xl ml-auto">
              Our expert team blends design, development, and SEO strategies to craft a stunning, 
              performance-driven website tailored to your business goals.
            </p>
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

