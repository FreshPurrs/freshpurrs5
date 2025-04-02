'use client'

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/50 overflow-hidden">
      <button 
        className="w-full text-left p-6 flex justify-between items-center hover:bg-indigo-50/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg text-indigo-800">{question}</h3>
        <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'} text-indigo-600 ml-4`}></i>
      </button>
      {isOpen && (
        <div className="p-6 pt-0 border-t border-indigo-100">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="mb-16 md:mb-24">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Frequently <span className="text-indigo-600">Asked Questions</span></h2>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">Everything you need to know about Purrify™</p>
      
      <div className="max-w-3xl mx-auto space-y-4">
        <FAQItem 
          question="How is Purrify different from baking soda?"
          answer={
            <p className="text-gray-700">
              Baking soda merely masks odors through a weak chemical reaction. Purrify's <strong>high-purity activated carbon (1,150 m²/g)</strong> physically traps and destroys odor molecules in its vast network of microscopic pores. It's like comparing a screen door to a bank vault when it comes to odor containment.
            </p>
          }
        />
        
        <FAQItem 
          question="How long does one container last?"
          answer={
            <>
              <p className="text-gray-700 mb-4">Usage varies based on:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-circle-notch text-xs text-indigo-600 mt-1 mr-2"></i>
                  <span><strong>60g Starter Pack:</strong> 1-2 months for one cat (1/2 tsp every 2-3 days)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle-notch text-xs text-indigo-600 mt-1 mr-2"></i>
                  <span><strong>200g Family Pack:</strong> 4-6 months for two cats (1/2 tsp daily)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle-notch text-xs text-indigo-600 mt-1 mr-2"></i>
                  <span><strong>500g Ultimate Pack:</strong> 8-12 months for 3+ cats or multiple litter boxes</span>
                </li>
              </ul>
            </>
          }
        />
        
        <FAQItem 
          question="Is Purrify safe for my cat?"
          answer={
            <>
              <p className="text-gray-700">Absolutely. Purrify uses the same high-purity activated carbon trusted in water and air purification systems around the world. It's 100% non-toxic and inert. Even if ingested in small amounts (as might happen when cats lick their paws), it's harmless.</p>
            </>
          }
        />
        
        <FAQItem 
          question="What types of odors does it eliminate?"
          answer={
            <>
              <p className="text-gray-700">Purrify is specially formulated to target the most offensive litter box odors:</p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                  <strong>Ammonia</strong> (from urine breakdown)
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                  <strong>Mercaptans</strong> (sulfur compounds in feces)
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                  <strong>Organic amines</strong> (responsible for "cat smell")
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                  <strong>Bacterial metabolites</strong> (from decomposition)
                </li>
              </ul>
            </>
          }
        />
        
        <FAQItem 
          question="Does it work with all types of litter?"
          answer={
            <>
              <p className="text-gray-700">Yes! Purrify enhances any litter type by tackling odors at a molecular level. It works particularly well with:</p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li className="flex items-start">
                  <i className="fas fa-paw text-indigo-600 mt-0.5 mr-2"></i>
                  Clumping clay litter
                </li>
                <li className="flex items-start">
                  <i className="fas fa-paw text-indigo-600 mt-0.5 mr-2"></i>
                  Silica gel crystals
                </li>
                <li className="flex items-start">
                  <i className="fas fa-paw text-indigo-600 mt-0.5 mr-2"></i>
                  Pine or wood pellets
                </li>
                <li className="flex items-start">
                  <i className="fas fa-paw text-indigo-600 mt-0.5 mr-2"></i>
                  Recycled paper
                </li>
                <li className="flex items-start">
                  <i className="fas fa-paw text-indigo-600 mt-0.5 mr-2"></i>
                  Corn, wheat or walnut litters
                </li>
              </ul>
              <p className="text-gray-700 mt-4">For best results, mix lightly into the top layer of litter rather than dumping at the bottom.</p>
            </>
          }
        />
        
        <FAQItem 
          question="How does shipping work?"
          answer={
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                  <i className="fas fa-truck text-xs"></i>
                </div>
                <span><strong>Canada:</strong> FREE shipping on orders over $49 (3-5 business days). $6.99 flat rate otherwise.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                  <i className="fas fa-box-open text-xs"></i>
                </div>
                <span><strong>USA:</strong> $9.99 flat rate (5-7 business days). Free shipping for orders over $99 USD.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                  <i className="fas fa-globe-americas text-xs"></i>
                </div>
                <span><strong>International:</strong> Contact us for rates. Some countries prohibit import of activated carbon products.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                  <i className="fas fa-bolt text-xs"></i>
                </div>
                <span><strong>Express Shipping:</strong> Available at checkout (2-3 days Canada, 3-5 days USA).</span>
              </li>
            </ul>
          }
        />
      </div>
    </section>
  );
}
