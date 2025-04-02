export default function UsageInstructions() {
  return (
    <section className="mb-16 md:mb-24 bg-brand-primary-light/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-brand-primary-light/30">
      <h2 className="text-3xl font-bold text-center mb-12 text-brand-secondary">How to Use <span className="text-brand-primary">Purrify™</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/50">
          <div className="w-20 h-20 bg-brand-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-2xl font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-brand-secondary-dark">Clean the Litter</h3>
          <p className="text-gray-700">Scoop waste daily as normal. Monthly, empty and wash the entire litter box with mild soap.</p>
        </div>
        
        <div className="text-center bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/50">
          <div className="w-20 h-20 bg-brand-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-2xl font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-brand-secondary-dark">Sprinkle Purrify</h3>
          <p className="text-gray-700">After scooping, add 1/4 to 1/2 teaspoon (60g pack includes scoop) evenly across the litter surface.</p>
        </div>
        
        <div className="text-center bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/50">
          <div className="w-20 h-20 bg-brand-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-2xl font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-brand-secondary-dark">Mix Lightly</h3>
          <p className="text-gray-700">Gently stir into the top layer of litter. The carbon will work continuously for 5-7 days.</p>
        </div>
      </div>
    </section>
  );
}
