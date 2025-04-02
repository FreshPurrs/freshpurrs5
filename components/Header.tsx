'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center mb-8 md:mb-12 glass-container p-4 rounded-xl">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
          <i className="fas fa-cat text-white"></i>
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-text-primary">
          purrify<span className="text-brand-primary">.ca</span>
        </h1>
      </div>
      
      <nav className="hidden md:flex space-x-8 items-center">
        <Link href="#how-it-works" className="text-text-secondary hover:text-brand-primary transition">
          How It Works
        </Link>
        <Link href="#sizes" className="text-text-secondary hover:text-brand-primary transition">
          Products
        </Link>
        <Link href="#faq" className="text-text-secondary hover:text-brand-primary transition">
          FAQ
        </Link>
        <Link href="#guarantee" className="text-text-secondary hover:text-brand-primary transition">
          Guarantee
        </Link>
        <button className="glass-button px-5 py-2 rounded-lg font-medium ml-4 transition">
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
        <div className="absolute top-16 left-0 right-0 glass z-50 p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#how-it-works" 
              className="text-text-secondary hover:text-brand-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#sizes" 
              className="text-text-secondary hover:text-brand-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="#faq" 
              className="text-text-secondary hover:text-brand-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="#guarantee" 
              className="text-text-secondary hover:text-brand-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Guarantee
            </Link>
            <button className="glass-button px-5 py-2 rounded-lg font-medium transition w-full">
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
