export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center mb-16 shadow-xl border border-indigo-400/30 backdrop-blur-sm">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">Ready to Transform Your Litter Box Experience?</h2>
      <p className="text-white max-w-2xl mx-auto mb-8 text-lg">Join over <span className="font-bold">280+</span> cat owners who've reclaimed their homes from litter box odors. Choose your Purrify size below.</p>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-lg">
            <h3 className="text-white font-bold mb-2 drop-shadow-sm">60g Starter Pack</h3>
            <div className="text-white text-2xl font-bold mb-3 drop-shadow-md">$19.99</div>
            <button className="w-full bg-white text-indigo-600 hover:bg-gray-100 py-3 rounded-lg font-bold transition shadow-md">
              BUY NOW
            </button>
          </div>
          <div className="bg-white/30 backdrop-blur-sm p-4 rounded-xl border-2 border-yellow-300 relative shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full shadow-md">BEST VALUE</div>
            <h3 className="text-white font-bold mb-2 drop-shadow-sm">200g Family Pack</h3>
            <div className="text-white text-2xl font-bold mb-3 drop-shadow-md">$49.99</div>
            <button className="w-full bg-yellow-400 text-indigo-800 hover:bg-yellow-300 py-3 rounded-lg font-bold transition shadow-md">
              BUY NOW
            </button>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-lg">
            <h3 className="text-white font-bold mb-2 drop-shadow-sm">500g Ultimate Pack</h3>
            <div className="text-white text-2xl font-bold mb-3 drop-shadow-md">$99.99</div>
            <button className="w-full bg-white text-indigo-600 hover:bg-gray-100 py-3 rounded-lg font-bold transition shadow-md">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <img src="https://cdn.pixabay.com/photo/2016/04/01/09/59/credit-card-1300481_640.png" alt="Payment methods" className="h-8 mx-auto opacity-90" />
        <p className="text-white text-sm mt-4 font-medium">30-Day Money Back Guarantee • Secure Checkout</p>
      </div>
    </section>
  );
}
