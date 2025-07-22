import React from 'react';

const Service_Packages = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">Service Packages</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Basic Care Package */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-green-200 hover:shadow-xl transition">
          <div className="bg-green-100 p-6">
            <h3 className="text-xl font-semibold text-center text-green-800">Basic Care Package</h3>
            <p className="text-center text-green-600 mt-2">For new bird owners</p>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-green-700">$99</span>
              <span className="text-gray-500"> /month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Initial health assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Diet consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Habitat evaluation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>2 follow-up consultations</span>
              </li>
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300">
              Packages
            </button>
          </div>
        </div>

        {/* Premium Care Package */}
        <div className="bg-white rounded-lg overflow-hidden shadow-xl border-2 border-green-400 transform scale-105 z-10 hover:shadow-2xl transition">
          <div className="bg-green-200 p-6 relative">
            <div className="absolute top-0 right-0 bg-green-700 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rounded-bl-lg">
              POPULAR
            </div>
            <h3 className="text-xl font-semibold text-center text-green-800">Premium Care Package</h3>
            <p className="text-center text-green-600 mt-2">For dedicated bird owners</p>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-green-700">$199</span>
              <span className="text-gray-500"> /month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Everything in Basic</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Monthly health checks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Nutrition plan updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Emergency support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Discount on products</span>
              </li>
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300">
            Packages
            </button>
          </div>
        </div>

        {/* Avian VIP Package */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-green-200 hover:shadow-xl transition">
          <div className="bg-green-100 p-6">
            <h3 className="text-xl font-semibold text-center text-green-800">Avian VIP Package</h3>
            <p className="text-center text-green-600 mt-2">For exotic bird owners</p>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-green-700">$399</span>
              <span className="text-gray-500"> /month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Everything in Premium</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Weekly check-ins</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Priority appointments</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>24/7 vet access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Annual blood work</span>
              </li>
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300">
              Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Service_Packages;
