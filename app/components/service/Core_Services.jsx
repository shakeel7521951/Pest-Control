import React from 'react';
import { FaFeatherAlt, FaShieldAlt, FaUtensils, FaHome } from 'react-icons/fa';

const Core_Services = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">Our Core Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Basic Care Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full">
          <div className="text-green-600 text-4xl mb-4 flex justify-center">
            <FaFeatherAlt />
          </div>
          <h3 className="text-xl font-semibold text-center text-green-700 mb-3">Basic Care</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Daily health monitoring</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Feather maintenance</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Nail and beak trimming</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Bathing guidance</span>
            </li>
          </ul>
        </div>

        {/* Safety Services Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full">
          <div className="text-green-600 text-4xl mb-4 flex justify-center">
            <FaShieldAlt />
          </div>
          <h3 className="text-xl font-semibold text-center text-green-700 mb-3">Safety Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Home safety audits</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Toxin identification</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Emergency preparedness</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Travel safety</span>
            </li>
          </ul>
        </div>

        {/* Nutrition Services Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full">
          <div className="text-green-600 text-4xl mb-4 flex justify-center">
            <FaUtensils />
          </div>
          <h3 className="text-xl font-semibold text-center text-green-700 mb-3">Nutrition Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Diet planning</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Supplement guidance</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Weight management</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Foraging strategies</span>
            </li>
          </ul>
        </div>

        {/* Habitat Services Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full">
          <div className="text-green-600 text-4xl mb-4 flex justify-center">
            <FaHome />
          </div>
          <h3 className="text-xl font-semibold text-center text-green-700 mb-3">Habitat Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Cage setup design</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Environmental enrichment</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Lighting solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Sanitation protocols</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};


export default Core_Services;
