'use client'

import React from 'react'
import logo from "../images/logo.png"

export default function Nav() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
          <h1 className="text-2xl font-bold">LUME</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8 mr-8">
            <a href="#services" className="hover:text-gray-300 transition duration-300 uppercase font-medium">
              Services
            </a>
            <a href="#brands" className="hover:text-gray-300 transition duration-300 uppercase font-medium">
              Brands
            </a>
            <a href="#portfolio" className="hover:text-gray-300 transition duration-300 uppercase font-medium">
              Portfolio
            </a>
          </nav>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition duration-300">
            Contact Us
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition duration-300">
          Menu
        </button>
      </div>
    </header>
  )
}

