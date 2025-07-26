'use client';
import React from "react";
import { FaFeatherAlt, FaCheckCircle } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import Link from 'next/link'
const birdSolutions = [
  "Bird Netting with stainless steel fixings",
  "Anti-Roost Bird Spikes",
  "Wire Systems for ledges",
  "Bird Fire Gel Deterrents",
  "Electric Avishock System",
  "Live Trapping Program",
  "Hawking (Birds of Prey)",
  "Audio & Ultrasonic Repellents"
];

const Bird = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-green-600">Professional Bird Control Solutions</h1>
        <p className="mt-4 text-lg">
          Effective, humane, and accredited bird management services across the UK.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="/Navbar/pigeons2.webp"
            alt="Bird Control"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bird Service Info */}
        <div className="bg-white p-6 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold text-green-500 mb-4">Why Choose Our Bird Control Services?</h2>
          <p className="mb-4">
            Our bird deterrent systems are tailored to protect your property from nesting,
            damage, and contamination. We guarantee effective, long-term control using humane methods.
          </p>

          <h3 className="text-lg font-semibold mb-3 text-green-600">Solutions We Offer:</h3>
          <ul className="space-y-3">
            {birdSolutions.map((solution, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        {/* Fast Response */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-green-500 font-semibold text-lg mb-2">🚨 Fast Response</h4>
          <p>
            We respond within 2 hours of your enquiry. No call-out fees, and all work is guaranteed.
          </p>
        </div>

        {/* Health & Safety */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-green-500 font-semibold text-lg mb-2">🛡️ Health & Safety First</h4>
          <p>
            Compliant with the latest safety regulations, prioritizing the well-being of both clients and staff.
          </p>
        </div>

        {/* Free Site Survey */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-green-500 font-semibold text-lg mb-2">📋 Free Site Survey</h4>
          <p>
            Our experts offer a free survey and custom advice to eliminate bird-related issues effectively.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-3">
          Book Your Free Survey Today
        </h2>
        <p className="text-lg mb-6">
          Let us protect your building from unwanted bird activity. Quick, ethical, and guaranteed.
        </p>
    <Link href="/contact">    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition duration-300">
          Contact Us Now
        </button></Link>
      </div>
    </div>
  );
};

export default Bird;
