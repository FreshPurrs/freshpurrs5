export default function MoneyBackGuarantee() {
  return (
    <section id="guarantee" className="money-back mb-16 md:mb-24 rounded-2xl p-8 border border-indigo-100 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <div className="bg-indigo-600 w-32 h-32 rounded-full flex items-center justify-center shadow-xl border-4 border-white/50">
            <i className="fas fa-hand-holding-usd text-4xl text-white"></i>
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">100% Smell-Free Guarantee</h2>
          <p className="text-gray-700 mb-6 text-lg">We're so confident you'll love Purrify™ that we offer a <strong>60-day money-back guarantee</strong>. If you don't notice a dramatic reduction in litter box odors, just email us for a full refund — no questions asked.</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-md">
            TRY IT RISK-FREE
          </button>
        </div>
      </div>
    </section>
  );
}
