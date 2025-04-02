export default function TrustBadges() {
    return (
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-16 bg-indigo-50/80 backdrop-blur-sm py-8 rounded-xl border border-indigo-100 shadow-lg">
        <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50">
          <div className="text-indigo-600 text-3xl font-bold">1,150 m²/g</div>
          <div className="text-gray-700 text-sm">Surface Area Activated Carbon</div>
        </div>
        
        <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50">
          <div className="text-indigo-600 text-3xl font-bold">93%</div>
          <div className="text-gray-700 text-sm">Odor Elimination</div>
        </div>
        
        <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50">
          <div className="text-indigo-600 text-3xl font-bold">280+</div>
          <div className="text-gray-700 text-sm">Happy Cats</div>
        </div>
        
        <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50">
          <div className="text-indigo-600 text-3xl font-bold">100%</div>
          <div className="text-gray-700 text-sm">Natural & Non-Toxic</div>
        </div>
      </div>
    );
  }
