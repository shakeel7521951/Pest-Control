import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const cleaningFeatures = [
  "Detailed monthly inspection reports",
  "On-site photos for transparency",
  "Fully trained and uniformed staff",
  "Vacuuming all carpets and flooring",
  "Sanitizing touchpoints and surfaces",
  "Maintaining outdoor communal areas",
  "Spotless windows and stairwells",
];

const ContractCleaning = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Professional Contract Cleaning</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Creating cleaner, healthier environments for residential blocks and estates across the region.
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="/contractcln.jpg"
              alt="Professional Cleaning"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Why Regular Contract Cleaning Matters</h2>
            <p className="mb-4 text-gray-700">
              Consistent, high-quality cleaning not only improves living standards for current residents, but also
              boosts your property’s appeal to prospective buyers and tenants.
            </p>
            <p className="text-gray-700">
              Whether you're managing a small block or a large estate, we tailor our cleaning services to meet your
              exact needs — ensuring every communal area stays spotless.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">
          Our Contract Cleaning Includes:
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-800">
          {cleaningFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Health & Safety + Contact Info */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl text-green-600 font-semibold mb-3">Health & Safety Commitment</h2>
        <p className="text-gray-700 mb-4">
          We prioritize the well-being of both our clients and our staff. All our operations strictly adhere to the
          latest Health & Safety regulations, and our team is continuously trained in safe working practices.
        </p>

        <div className="mt-6 bg-green-100 border border-green-400 p-6 rounded-lg text-center text-green-800 text-lg font-semibold">
          <p>Freephone: 0800 0279 273</p>
          <p>Local Rate: 01689 834 465</p>
        </div>
      </section>

     
    </div>
  );
};

export default ContractCleaning;
