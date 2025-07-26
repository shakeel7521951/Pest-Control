'use client';
import React, { useState } from "react";
import { PiBugBeetleFill } from "react-icons/pi";
import { GiInsectJaws, GiEggClutch } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const facts = [
  "Bed bugs can live for months without feeding.",
  "They’re attracted to body heat and carbon dioxide.",
  "Females lay up to 500 eggs in their lifetime.",
  "Infestations spread quickly between rooms and apartments."
];

const NewBedBugsSection = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="bg-gray-100 py-12 px-5 sm:px-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-3">Say Goodbye to Bed Bugs</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our experts specialize in rapid and discreet bed bug extermination. Sleep peacefully again with our safe and effective treatments.
        </p>
      </div>

      {/* Image & Contact Info */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
        <img
          src="/Navbar/bedbugs.png"
          alt="Bed Bugs"
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg"
        />
        <div className="w-full md:w-1/2 bg-green-600 text-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <FaPhoneVolume className="text-2xl" />
            Speak with an Expert
          </h2>
          <p className="text-lg">0800 0279 273 (Freephone)</p> 
          
          <p className="text-lg">01689 834 465 (Local Rate)</p>
          <p className="text-sm text-green-100">Available 24/7 – Immediate response guaranteed</p>
        </div>
      </div>

      {/* Toggle Panel */}
      <div className="bg-white border border-green-400 rounded-lg shadow-sm">
        <div
          className="flex justify-between items-center px-5 py-4 cursor-pointer bg-green-500 text-white rounded-t-lg"
          onClick={() => setShowInfo(!showInfo)}
        >
          <div className="flex items-center gap-3 font-semibold text-lg">
            <PiBugBeetleFill className="text-2xl" />
            What You Should Know About Bed Bugs
          </div>
          {showInfo ? <MdExpandLess className="text-2xl" /> : <MdExpandMore className="text-2xl" />}
        </div>

        {showInfo && (
          <div className="p-6 space-y-8 text-gray-700">
            {/* Section 1 */}
            <div>
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                <GiInsectJaws className="text-green-600" /> What Are Bed Bugs?
              </h3>
              <p className="text-sm">
                Bed bugs are small, reddish-brown insects that feed on the blood of humans and animals.
                They're nocturnal and tend to hide in mattresses, bed frames, cracks, and behind wallpapers.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                <GiEggClutch className="text-green-600" /> How We Handle Them
              </h3>
              <p className="text-sm">
                Our licensed pest control team uses heat treatments, residual sprays, and thorough inspections
                to eliminate bed bugs at every stage of life. We offer full property coverage and follow-ups.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                <TbAlertTriangleFilled className="text-green-600" /> Quick Facts
              </h3>
              <ul className="list-disc list-inside text-sm pl-4 space-y-2">
                {facts.map((fact, i) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewBedBugsSection;
