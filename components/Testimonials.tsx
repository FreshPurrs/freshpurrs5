export default function Testimonials() {
  return (
    <section className="mb-16 md:mb-24">
      <h2 className="text-3xl font-bold text-center mb-4 text-brand-secondary">What <span className="text-brand-primary">Cat Parents</span> Say</h2>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">Real results from real customers (we don't do paid reviews)</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
          <div className="flex mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 shadow-md border-2 border-brand-secondary-light">
              <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary-dark">Sarah K.</h4>
              <p className="text-gray-600 text-sm mb-2">Toronto, ON 🇨🇦</p>
              <div className="flex text-brand-yellow">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <p className="text-gray-700 italic">"I was skeptical but after trying EVERYTHING... this actually works. I have 3 Persians and their litter box is in my small apartment. Before Purrify, guests would wrinkle their noses within minutes of arriving. Now? Nothing. It's like magic carbon fairy dust."</p>
        </div>
        
        {/* Testimonial 2 */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
          <div className="flex mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 shadow-md border-2 border-brand-secondary-light">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary-dark">Mark T.</h4>
              <p className="text-gray-600 text-sm mb-2">Vancouver, BC 🇨🇦</p>
              <div className="flex text-brand-yellow">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <p className="text-gray-700 italic">"My wife was about to make me choose between our two cats or sleeping in the same bed. The ammonia smell was that bad. Purrify saved my marriage (mostly joking but not entirely). I sprinkle it every time I scoop and the difference is night and day."</p>
        </div>
        
        {/* Testimonial 3 */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
          <div className="flex mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 shadow-md border-2 border-brand-secondary-light">
              <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary-dark">Lisa M.</h4>
              <p className="text-gray-600 text-sm mb-2">Montreal, QC ⚜️</p>
              <div className="flex text-brand-yellow">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <p className="text-gray-700 italic">"I run a small cat rescue with 12 permanent residents. The smell was becoming unmanageable until I found Purrify. Now volunteers comment on how much better it smells. The 500g container lasts me about 9 months with daily use across 8 litter boxes."</p>
        </div>
        
        {/* Testimonial 4 */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
          <div className="flex mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 shadow-md border-2 border-brand-secondary-light">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary-dark">David P.</h4>
              <p className="text-gray-600 text-sm mb-2">Calgary, AB 🇨🇦</p>
              <div className="flex text-brand-yellow">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <p className="text-gray-700 italic">"My Bengal's urine is... potent. Baking soda did nothing. Those litter deodorizers just made it smell like flowers mixed with cat pee (which is worse). Purrify actually eliminates the smell. I use about 1/2 teaspoon per day in a large litter box and change it weekly."</p>
        </div>
      </div>
    </section>
  );
}
