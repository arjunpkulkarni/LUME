'use client'

import React from 'react'

export default function Footer() {
  const aboutLinks = ['ABOUT', 'ABOUT', 'ABOUT', 'ABOUT', 'ABOUT', 'ABOUT', 'ABOUT']

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Logo and Copyright */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">LUME</h2>
            <p className="text-sm max-w-md">
              2025 ALL RIGHTS RESERVED. LUMELABS, IS A MARKETING AND RESEARCH FIRM LOCATED IN NEW YORK.
            </p>
          </div>

          {/* Right side - About Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
            {aboutLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-gray-200 underline underline-offset-4 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

