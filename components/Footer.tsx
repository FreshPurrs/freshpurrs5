export default function Footer() {
  return (
    <footer className="pt-12 border-t border-brand-primary/20 bg-white/50 backdrop-blur-sm rounded-t-3xl glass-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-md">
              <i className="fas fa-cat text-white text-sm"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary">Purrify™</h3>
              <div className="flex items-center text-xs text-gray-600">
                <span>Canadian product</span>
                <span className="text-lg mx-1">🇨🇦</span>
                <span>Made in Montreal</span>
                <span className="text-lg ml-1">⚜️</span>
              </div>
            </div>
          </div>
          <p className="text-text-secondary text-sm">Advanced odor elimination powered by 1,150 m²/g high-purity activated carbon. Trusted by <strong>280+</strong> cat owners across Canada.</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-text-primary">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-text-secondary hover:text-brand-primary transition text-sm">How It Works</a></li>
            <li><a href="#" className="text-text-secondary hover:text-brand-primary transition text-sm">Support Center</a></li>
            <li><a href="#" className="text-text-secondary hover:text-brand-primary transition text-sm">Product Guides</a></li>
            <li><a href="#" className="text-text-secondary hover:text-brand-primary transition text-sm">Wholesale Inquiries</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-text-primary">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-text-secondary hover:text-brand-primary transition text-sm">About Us</a></li>
            <li><a href="#" className="text-text-secondary hover:text-brand-primary transition text-sm">Contact</a></li>
            <li><a href="#" className="text-text-secondary hover:text-brand-primary transition text-sm">Blog</a></li>
            <li><a href="#" className="text-text-secondary hover:text-brand-primary transition text-sm">Careers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-text-primary">Stay Connected</h4>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="w-10 h-10 bg-brand-primary-light hover:bg-brand-primary/20 rounded-full flex items-center justify-center transition text-brand-primary shadow-sm">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-brand-primary-light hover:bg-brand-primary/20 rounded-full flex items-center justify-center transition text-brand-primary shadow-sm">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-brand-primary-light hover:bg-brand-primary/20 rounded-full flex items-center justify-center transition text-brand-primary shadow-sm">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-brand-primary-light hover:bg-brand-primary/20 rounded-full flex items-center justify-center transition text-brand-primary shadow-sm">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p className="text-text-secondary text-sm">Subscribe for tips and exclusive offers</p>
          <div className="flex mt-2">
            <input type="email" placeholder="Your email" className="bg-white/80 border border-brand-primary-light text-gray-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-primary w-full text-sm shadow-inner" />
            <button className="glass-button px-4 py-2 rounded-r-lg text-white text-sm shadow-md">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-brand-primary/20 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-text-secondary text-sm mb-4 md:mb-0">© 2023 Purrify.ca. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-text-secondary hover:text-brand-primary text-sm transition">Privacy Policy</a>
          <a href="#" className="text-text-secondary hover:text-brand-primary text-sm transition">Terms of Service</a>
          <a href="#" className="text-text-secondary hover:text-brand-primary text-sm transition">Shipping Policy</a>
          <a href="#" className="text-text-secondary hover:text-brand-primary text-sm transition">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
