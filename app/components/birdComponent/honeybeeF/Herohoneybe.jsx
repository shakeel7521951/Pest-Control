'use client';
import React from "react";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";

const Herohoneybe = () => {
  return (
    <div className="w-full bg-yellow-50 px-5 sm:px-16 py-14">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-700 mb-4">Honey Bee Awareness & Nest Management</h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
          Honey bees are vital to our environment due to their essential role in pollination. Before considering removal or treatment, explore sustainable alternatives that ensure both safety and ecological preservation.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Block */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-yellow-200">
          <img
            src="/Navbar/honeybee.jpg"
            alt="Honey Bee"
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Info Block */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-yellow-800 mb-3">Recommended Alternatives</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
              <li>
                Bees generally do not damage property. If left undisturbed, stings are rare.
              </li>
              <li>
                When possible, allow bee nests to thrive naturally—they play a crucial ecological role.
              </li>
              <li>
                Contact your local beekeeper to safely relocate a nest to a better location.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Need Professional Advice?</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <BsFillTelephoneFill className="text-lg" />
                <span>Freephone: 0800 0279 273</span>
              </div>
              <div className="flex items-center gap-3">
                <BsTelephone className="text-lg" />
                <span>Local Rate: 01689 834 465</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herohoneybe;
