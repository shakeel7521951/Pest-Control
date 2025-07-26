import React from 'react';
import Link from 'next/link'
const Service_Packages = () => {
  return (
    <section className="mb-14 px-4 sm:px-6 lg:px-16 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#7BAE4B] mb-12 text-center">
        Service Packages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Package Cards */}
        {[
          {
            title: 'Basic Care Package',
            subtitle: 'For new bird owners',
            price: '$99',
            features: [
              'Initial health assessment',
              'Diet consultation',
              'Habitat evaluation',
              '2 follow-up consultations',
            ],
            highlight: false,
          },
          {
            title: 'Premium Care Package',
            subtitle: 'For dedicated bird owners',
            price: '$199',
            features: [
              'Everything in Basic',
              'Monthly health checks',
              'Nutrition plan updates',
              'Emergency support',
              'Discount on products',
            ],
            highlight: true,
          },
          {
            title: 'Avian VIP Package',
            subtitle: 'For exotic bird owners',
            price: '$399',
            features: [
              'Everything in Premium',
              'Weekly check-ins',
              'Priority appointments',
              '24/7 vet access',
              'Annual blood work',
            ],
            highlight: false,
          },
        ].map((pkg, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-lg overflow-hidden border-2 ${
              pkg.highlight ? 'border-green-400 shadow-xl scale-105 z-10' : 'border-green-200 shadow-lg'
            } hover:shadow-2xl transition`}
          >
            <div className={`${pkg.highlight ? 'bg-green-200' : 'bg-green-100'} p-6 relative`}>
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-[#7BAE4B] text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <h3 className="text-lg sm:text-xl font-semibold text-center text-[#7BAE4B]">{pkg.title}</h3>
              <p className="text-center text-green-600 mt-1 sm:mt-2 text-sm sm:text-base">{pkg.subtitle}</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-[#7BAE4B]">{pkg.price}</span>
                <span className="text-gray-500 text-sm"> /month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm sm:text-base">
                {pkg.features.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#7BAE4B] mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
          <Link href="/contact">    <button className="w-full bg-[#7BAE4B] hover:bg-green-600 text-white py-2 rounded-lg transition duration-300">
                Packages
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service_Packages;
