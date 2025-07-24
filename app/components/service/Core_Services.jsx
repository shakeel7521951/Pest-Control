import React from 'react';
import { FaFeatherAlt, FaShieldAlt, FaUtensils, FaHome } from 'react-icons/fa';

const Core_Services = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-16 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#7BAE4B] mb-10 text-center">
        Our Core Services
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Service Card Template */}
        {[
          {
            title: 'Basic Care',
            icon: <FaFeatherAlt />,
            items: [
              'Daily health monitoring',
              'Feather maintenance',
              'Nail and beak trimming',
              'Bathing guidance',
            ],
          },
          {
            title: 'Safety Services',
            icon: <FaShieldAlt />,
            items: [
              'Home safety audits',
              'Toxin identification',
              'Emergency preparedness',
              'Travel safety',
            ],
          },
          {
            title: 'Nutrition Services',
            icon: <FaUtensils />,
            items: [
              'Diet planning',
              'Supplement guidance',
              'Weight management',
              'Foraging strategies',
            ],
          },
          {
            title: 'Habitat Services',
            icon: <FaHome />,
            items: [
              'Cage setup design',
              'Environmental enrichment',
              'Lighting solutions',
              'Sanitation protocols',
            ],
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full"
          >
            <div className="text-[#7BAE4B] text-4xl mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-center text-[#7BAE4B] mb-3">
              {service.title}
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#7BAE4B] mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Core_Services;
