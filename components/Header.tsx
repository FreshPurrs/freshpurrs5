'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center mb-8 md:mb-12">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
          <i className="fas fa-cat text-white"></i>
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          purrify<span className="text-indigo-600">.ca</span>
        </h1>
      </div>
      
      <nav className="hidden md:flex space-x-8 items-center">
        <Link href="#how-it-works" className="hover:text-indigo-600 transition">
          How It Works
        </Link>
        <Link href="#sizes" className="hover:text-indigo-600 transition">
          Products
        </Link>
        <Link href="#faq" className="hover:text-indigo-600 transition">
          FAQ
        </Link>
        <Link href="#guarantee" className="hover:text-indigo-600 transition">
          Guarantee
        </Link>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium ml-4 transition">
          Order Now
        </button>
      </nav>
      
      <button 
        className="md:hidden text-2xl text-gray-600"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#how-it-works" 
              className="hover:text-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#sizes" 
              className="hover:text-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="#faq" 
              className="hover:text-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="#guarantee" 
              className="hover:text-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Guarantee
            </Link>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition w-full">
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}