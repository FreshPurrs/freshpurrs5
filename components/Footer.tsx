export default function Footer() {
  return (
    <footer className="pt-12 border-t border-indigo-100 bg-white/50 backdrop-blur-sm rounded-t-3xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <i className="fas fa-cat text-white text-sm"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-800">Purrify™</h3>
              <div className="flex items-center text-xs text-gray-600">
                <span className="mr-1">Made in</span>
                <span className="text-sm">🇨🇦</span>
                <span className="mx-1">Montreal</span>
                <span className="text-sm">⚜️</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm">Advanced odor elimination powered by 1,150 m²/g high-purity activated carbon. Trusted by <strong>280+</strong> cat owners across Canada.</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-indigo-800">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition text-sm">How It Works</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition text-sm">Support Center</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition text-sm">Product Guides</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition text-sm">Wholesale Inquiries</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-indigo-800">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition text-sm">About Us</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition text-sm">Contact</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition text-sm">Blog</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition text-sm">Careers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-indigo-800">Stay Connected</h4>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="w-10 h-10 bg-indigo-100 hover:bg-indigo-200 rounded-full flex items-center justify-center transition text-indigo-600 shadow-sm">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-indigo-100 hover:bg-indigo-200 rounded-full flex items-center justify-center transition text-indigo-600 shadow-sm">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-indigo-100 hover:bg-indigo-200 rounded-full flex items-center justify-center transition text-indigo-600 shadow-sm">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-indigo-100 hover:bg-indigo-200 rounded-full flex items-center justify-center transition text-indigo-600 shadow-sm">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p className="text-gray-700 text-sm">Subscribe for tips and exclusive offers</p>
          <div className="flex mt-2">
            <input type="email" placeholder="Your email" className="bg-white/80 border border-indigo-100 text-gray-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full text-sm shadow-inner" />
            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg text-white text-sm shadow-md">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-indigo-100 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm mb-4 md:mb-0">© 2023 Purrify.ca. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition">Shipping Policy</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
