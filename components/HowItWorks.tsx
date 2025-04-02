export default function HowItWorks() {
    return (
      <section id="how-it-works" className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          The <span className="text-indigo-600">Purrify™</span> Difference
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Why does Purrify work when other products fail? It's all about the science of activated carbon.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md card-hover border border-white/50">
            <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
              <i className="fas fa-atom text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-indigo-800">Microporous Structure</h3>
            <p className="text-gray-700 text-center">
              Each gram of our high-purity carbon has <strong>1,150 square meters</strong> of surface area - that's like a football field of odor-absorbing power in a teaspoon!
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md card-hover border border-white/50">
            <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
              <i className="fas fa-magnet text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-indigo-800">Adsorption Magic</h3>
            <p className="text-gray-700 text-center">
              Unlike baking soda that just masks smells, our carbon <strong>traps odor molecules</strong> permanently in its microscopic pores using Van der Waals forces.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md card-hover border border-white/50">
            <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
              <i className="fas fa-wind text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-indigo-800">Ammonia Neutralizer</h3>
            <p className="text-gray-700 text-center">
              Specially processed to target <strong>ammonia molecules</strong> (the main culprit in cat urine odor) and convert them to harmless compounds.
            </p>
          </div>
        </div>
      </section>
    );
  }
