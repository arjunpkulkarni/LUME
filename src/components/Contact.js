'use client'

import React, { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering bold brands with creative solutions to dream bigger and do more.
            </h2>
            <p className="text-xl text-gray-300">
              Share your marketing goals with us—we're excited to help. Fill out the form below to 
              connect with our team!
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company*"
                  required
                  className="w-full px-6 py-4 rounded-full bg-white text-black placeholder-gray-500"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  required
                  className="w-full px-6 py-4 rounded-full bg-white text-black placeholder-gray-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  required
                  className="w-full px-6 py-4 rounded-full bg-white text-black placeholder-gray-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Questions and Comments*"
                  required
                  rows="6"
                  className="w-full px-6 py-4 rounded-3xl bg-white text-black placeholder-gray-500"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-32 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
