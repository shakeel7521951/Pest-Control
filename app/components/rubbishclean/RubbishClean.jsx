import React from "react";
import Link from "next/link";
import { FaTrashAlt, FaRecycle, FaPhoneAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const serviceItems = [
  { icon: <FaTrashAlt />, label: "Household Waste Removal" },
  { icon: <MdLocalShipping />, label: "Commercial Premises Clearance" },
  { icon: <FaRecycle />, label: "Eco-Friendly Disposal Solutions" },
];

const RubbishClean = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-100 py-16 px-6 sm:px-20 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Reliable Rubbish Clearance Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We provide fast, responsible, and affordable waste removal solutions across residential and commercial properties.
        </p>
        <div className="mt-6 text-lg font-semibold text-green-700">
          <p>Freephone: 0800 0279 273</p>
          <p>Local Rate: 01689 834 465</p>
        </div>
      </section>

      {/* Image + Description */}
      <section className="flex flex-col lg:flex-row items-center gap-10 py-16 px-6 sm:px-20 bg-white">
        <div className="w-full lg:w-1/2">
          <img
            src="/rubbishcln.jpg"
            alt="Waste Clearance"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 text-gray-700">
          <h2 className="text-2xl font-bold text-green-600 mb-4">We Clear It All</h2>
          <p className="mb-4">
            Whether it's a one-off removal or regular collection, we ensure your space is left clean, safe, and clutter-free.
            Our team is fully trained and equipped to handle everything from single items to full property clearances.
          </p>
          <p>
            From bulky waste to delicate removals, our eco-conscious approach ensures over 90% of waste is recycled or reused.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6 sm:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-8">What We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-green-500 text-4xl mb-4 mx-auto">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6 sm:px-20">
        <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-3xl mx-auto">
          <li>Same-day service with no hidden fees</li>
          <li>Licensed and insured waste carriers</li>
          <li>Environmentally responsible and ethical disposal</li>
          <li>Tailored solutions for homes, offices, and gardens</li>
          <li>Highly rated by both domestic and business clients</li>
        </ul>
      </section>

     
    </div>
  );
};

export default RubbishClean;
