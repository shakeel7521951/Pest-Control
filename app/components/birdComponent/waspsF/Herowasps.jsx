'use client';
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdOutlineStart } from "react-icons/md";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { FaBug } from "react-icons/fa6";

const WaspDetails = {
  Identification: [
    "Typically 10–20mm in size, species may vary.",
    "Bold black and yellow body patterns.",
    "Thin midsection connecting thorax and abdomen.",
    "Transparent wings folded along the back.",
    "Long antennae with noticeable motion."
  ],
  NestingCycle: [
    "Queens wake from hibernation in early spring.",
    "Paper-like nests built using wood fibers and saliva.",
    "Eggs are laid and larvae hatch within days.",
    "Adults emerge within a few weeks, increasing colony size.",
    "Only new queens survive after autumn."
  ],
  CommonHabits: [
    "Social insects often nesting in sheltered areas.",
    "Increased activity in late summer due to sugar craving.",
    "Sting repeatedly when threatened.",
    "Predators of smaller insects but also attracted to sweet foods.",
    "Nests found in sheds, lofts, trees, or wall voids."
  ]
};

const Herowasps = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionName) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  return (
    <div className="px-6 sm:px-20 py-12 bg-gray-50">
      <h1 className="text-3xl text-green-500 font-bold mb-3">Expert Wasp Removal Services</h1>
      <p className="text-sm mb-6 max-w-3xl">
        Dealing with an aggressive wasp nest? Our trained specialists are equipped to handle infestations safely and efficiently. Covering London, the Midlands, and Northern UK.
      </p>

      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        {/* Left: Accordion */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {Object.entries(WaspDetails).map(([title, items]) => (
            <div key={title} className="border border-green-400 rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center bg-green-600 text-white px-4 py-3 cursor-pointer"
                onClick={() => toggleSection(title)}
              >
                <div className="flex items-center gap-3">
                  <FaBug />
                  <h2 className="font-semibold text-lg">{title.replace(/([A-Z])/g, ' $1').trim()}</h2>
                </div>
                {expandedSection === title ? <FiMinus /> : <GoPlus />}
              </div>
              {expandedSection === title && (
                <ul className="p-4 bg-white text-sm space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <MdOutlineStart className="text-green-600 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right: Image and Call Box */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="h-72 w-full rounded-xl overflow-hidden">
            <img
              src="/Navbar/wasps.jpg"
              alt="Wasp Control"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg space-y-3 text-lg font-semibold">
            <div className="flex items-center gap-3">
              <BsFillTelephoneFill />
              <span>Freephone: 0800 0279 273</span>
            </div>
            <div className="flex items-center gap-3">
              <BsTelephone />
              <span>Local Rate: 01689 834 465</span>
            </div>
            <p className="text-sm mt-2">
              Speak to our pest control experts today and eliminate your wasp problem fast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herowasps;
