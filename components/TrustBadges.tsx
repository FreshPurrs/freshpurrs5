export default function TrustBadges() {
    return (
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-16 bg-brand-primary/10 backdrop-blur-sm py-8 rounded-xl border border-brand-primary/30 shadow-lg">
        <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50">
          <div className="text-brand-secondary text-3xl font-bold">1,150 m²/g</div>
          <div className="text-text-secondary text-sm">Surface Area Activated Carbon</div>
        </div>
        
        <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50">
          <div className="text-brand-secondary text-3xl font-bold">93%</div>
          <div className="text-text-secondary text-sm">Odor Elimination</div>
        </div>
        
        <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50">
          <div className="text-brand-secondary text-3xl font-bold">280+</div>
          <div className="text-text-secondary text-sm">Happy Cats</div>
        </div>
        
        <div className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50">
          <div className="text-brand-green text-3xl font-bold">100%</div>
          <div className="text-text-secondary text-sm">Natural & Non-Toxic</div>
        </div>
      </div>
    );
  }
