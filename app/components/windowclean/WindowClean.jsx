import React from "react";
import Link from "next/link";
import { FaWindowRestore, FaPhoneAlt } from "react-icons/fa";

const features = [
  "Eco-Friendly Pure Water Technology",
  "Abseiling & Rope Access Certified",
  "Safe & Compliant With All Regulations",
  "Interior & Exterior Window Cleaning",
  "One-Off or Regular Contracts",
];

const WindowClean = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-green-100 to-white py-16 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-green-700 mb-4">
              Professional Window Cleaning Services
            </h1>
            <p className="text-lg mb-6">
              We provide modern, safe, and efficient window cleaning solutions
              for residential and commercial properties — from high-rise buildings
              to storefronts, with minimal disruption and maximum shine.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="/contact">
                <button className="bg-green-500 hover:bg-green-400 transition text-white font-semibold px-6 py-2 rounded-md">
                  Get a Free Quote
                </button>
              </Link>
              <div className="text-green-700 font-semibold">
                <p><FaPhoneAlt className="inline mr-2" />0800 0279 273</p>
                <p><FaPhoneAlt className="inline mr-2" />01689 834 465</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="/windowcln.jpg"
              alt="Window Cleaning"
              className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-2xl font-bold text-green-600 mb-8">
          Why Choose Our Service?
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <FaWindowRestore className="text-green-500 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-14 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Abseiling & Rope Access</h3>
            <p className="mb-4">
              We specialize in rope-access window cleaning for high-rise buildings.
              Our technicians are fully certified, allowing us to clean complex
              structures safely and cost-effectively.
            </p>

            <h3 className="text-2xl font-semibold text-green-700 mb-4">Pure Water Technology</h3>
            <p className="mb-4">
              Our water-fed pole system uses purified water to clean windows
              up to 6 stories high without ladders or lifts — safe, streak-free, and eco-friendly.
            </p>

            <h3 className="text-2xl font-semibold text-green-700 mb-4">Health & Safety</h3>
            <p>
              Safety is our top priority. We comply with all UK regulations and
              ensure every operative is trained, certified, and equipped with
              the latest safety gear.
            </p>
          </div>

         
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready for Sparkling Windows?</h2>
        <p className="mb-6">Contact us today for a no-obligation quote for your window cleaning needs.</p>
        <Link href="/contact">
          <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WindowClean;
