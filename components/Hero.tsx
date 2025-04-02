import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 glass-container p-8 rounded-xl">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="flex items-center space-x-2 mb-4">
          <div className="bg-brand-secondary-light text-white inline-block px-3 py-1 rounded-full text-xs font-medium">
            🐾 CAT LITTER REVOLUTION
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <span>Canadian product</span>
            <span className="text-2xl mx-1">🇨🇦</span>
            <span>Made in Montreal</span>
            <span className="text-2xl ml-1">⚜️</span>
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-text-primary">
          Finally...<br />
          <span className="text-brand-secondary">No More Litter Box Smells!</span>
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          Purrify™ uses <strong>high-purity activated carbon (1,150 m²/g surface area)</strong> trusted in water and air purification systems to <em>eliminate</em> odors at the molecular level — not just cover them up like those cheap baking soda products.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="glass-button px-8 py-4 rounded-lg font-bold transition transform hover:scale-105 glow flex items-center justify-center">
            <i className="fas fa-bolt mr-2"></i> SHOP NOW
          </button>
          <button className="border border-brand-primary text-brand-primary hover:bg-brand-primary/10 px-8 py-4 rounded-lg font-bold transition transform hover:scale-105 flex items-center justify-center backdrop-blur-sm">
            <i className="fas fa-play-circle mr-2"></i> WATCH DEMO
          </button>
        </div>
        <div className="flex items-center mt-6 space-x-2 text-sm text-gray-500">
          <div className="flex">
            <i className="fas fa-star text-brand-yellow"></i>
            <i className="fas fa-star text-brand-yellow"></i>
            <i className="fas fa-star text-brand-yellow"></i>
            <i className="fas fa-star text-brand-yellow"></i>
            <i className="fas fa-star text-brand-yellow"></i>
          </div>
          <span>4.9/5 from 280+ cat owners</span>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-4 bg-brand-secondary rounded-2xl -rotate-6"></div>
          <div className="relative glass p-4 rounded-2xl shadow-xl overflow-hidden border border-white/50">
            {/* We'll add a placeholder for the image first */}
            <div className="w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Cat Image Placeholder</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-brand-secondary/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-md flex items-center border border-brand-secondary-light/50">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-semibold text-white">ODOR FREE!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
