export default function ProductSection() {
  return (
    <section id="sizes" className="mb-16 md:mb-24 glass-container p-8 rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 text-text-primary">Choose Your <span className="text-brand-secondary">Purrify™</span> Size</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">Select the perfect size for your feline family. All prices in CAD.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Small Size */}
        <div className="product-focus bg-brand-yellow/30 p-6 rounded-xl border-2 border-brand-yellow hover:border-brand-yellow-dark relative shadow-lg">
          <div className="absolute top-4 right-4 bg-brand-secondary text-white text-xs px-2 py-1 rounded-full shadow-md">BEST SELLER</div>
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1587135990345-fcfa3f1ad2d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="60g Purrify" className="w-full h-full object-contain" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-text-primary">Purrify™ Starter Pack</h3>
          <p className="text-text-secondary text-center mb-4">60 grams - Lasts 1-2 months</p>
          <div className="text-center mb-6">
            <span className="text-3xl font-bold text-brand-primary">$19.99</span>
            <span className="text-text-secondary ml-2 line-through">$24.99</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm text-gray-700">
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              For 1-2 cats
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              300+ sq meters of carbon
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              Small litter boxes
            </li>
          </ul>
          <button className="w-full glass-button py-3 rounded-lg font-medium transition shadow-md">
            ADD TO CART
          </button>
        </div>
        
        {/* Medium Size */}
        <div className="product-focus bg-brand-mid-tier/70 p-6 rounded-xl border-2 border-brand-yellow-dark relative shadow-lg">
          <div className="absolute top-4 right-4 bg-brand-yellow-dark text-white text-xs px-2 py-1 rounded-full shadow-md">BEST VALUE</div>
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1606229365481-6e9da120ad16?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="200g Purrify" className="w-full h-full object-contain" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-text-primary">Purrify™ Family Pack</h3>
          <p className="text-text-secondary text-center mb-4">200 grams - Lasts 4-6 months</p>
          <div className="text-center mb-6">
            <span className="text-3xl font-bold text-brand-primary">$49.99</span>
            <span className="text-text-secondary ml-2 line-through">$64.99</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm text-gray-700">
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              For 2-4 cats
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              1,000+ sq meters of carbon
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              Large litter boxes
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              SAVE 23%
            </li>
          </ul>
          <button className="w-full glass-button py-3 rounded-lg font-medium transition shadow-md">
            ADD TO CART
          </button>
        </div>
        
        {/* Large Size */}
        <div className="product-focus bg-brand-premium-tier/50 p-6 rounded-xl border-2 border-brand-premium-tier hover:border-brand-green relative shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="500g Purrify" className="w-full h-full object-contain" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mb-2 text-text-primary">Purrify™ Ultimate Pack</h3>
          <p className="text-text-secondary text-center mb-4">500 grams - Lasts 8-12 months</p>
          <div className="text-center mb-6">
            <span className="text-3xl font-bold text-brand-primary">$99.99</span>
            <span className="text-text-secondary ml-2 line-through">$129.99</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm text-gray-700">
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              For 4+ cats or catteries
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              2,500+ sq meters of carbon
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              Multiple litter boxes
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-brand-green mr-2"></i>
              SAVE 30%
            </li>
          </ul>
          <button className="w-full glass-button py-3 rounded-lg font-medium transition shadow-md">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Bundle Deal */}
      <div className="highlight-box p-6 rounded-xl mb-8 shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-text-primary">⚡ Exclusive Bundle Deal</h3>
            <p className="text-text-secondary">Buy 2 Family Packs (200g each) and get 1 Starter Pack (60g) FREE — that's 460g total for just $99.98 ($119.97 value).</p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <button className="glass-button px-6 py-3 rounded-lg font-bold whitespace-nowrap shadow-md">
              GET BUNDLE ($20 SAVINGS)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
