'use client';
import React, { useState } from "react";
import { FaDove } from "react-icons/fa";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const pigeonDetails = [
  {
    title: "Appearance",
    items: [
      "Length ranges between 29–33cm.",
      "Weight varies from 260–580g.",
      "Grey body with shimmering neck feathers.",
      "Various color mutations including white and brown."
    ]
  },
  {
    title: "Lifecycle",
    items: [
      "Capable of producing 9 broods a year.",
      "Clutches typically have 2 eggs.",
      "Incubation lasts around 17–19 days.",
      "Chicks stay in the nest for 35–37 days.",
      "Lifespan can reach 35 years in captivity."
    ]
  },
  {
    title: "Behaviour",
    items: [
      "Nests built by females using male-gathered materials.",
      "Often found roosting on buildings and statues.",
      "Consume seeds, scraps, and even meat.",
      "Drink by suction without lifting heads.",
      "Produce crop milk for young squabs.",
      "Fly with loud wing claps when alarmed.",
      "Can reach flying speeds of 50mph.",
      "Droppings are acidic and cause damage.",
      "May spread diseases like Psittacosis."
    ]
  }
];

const Heropigeons = () => {
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 flex items-center justify-center gap-3">
            <FaDove className="text-4xl" />
            Pigeon Control Services
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Professional pigeon management in London, the Midlands, the North & beyond.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image + Contact */}
          <div className="flex flex-col gap-8">
            {/* Pigeon Image */}
            <div className="w-full h-[300px] rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <img
                src="/Navbar/pigeons2.webp"
                alt="Pigeon Control"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Contact Card */}
            <div className="bg-green-50 border border-green-200 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Talk to an Expert</h3>
              <div className="space-y-4 text-gray-800 text-base">
                <div className="flex items-center gap-3">
                  <BsFillTelephoneFill className="text-green-600" />
                  <span>Freephone: <strong>0800 0279 273</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <BsTelephone className="text-green-600" />
                  <span>Local Rate: <strong>01689 834 465</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-6">
            {pigeonDetails.map((section, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 shadow-md"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center px-6 py-4 bg-green-100 hover:bg-green-200 transition duration-200 font-medium text-lg text-green-800"
                >
                  <div className="flex items-center gap-2">
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                    {section.title}
                  </div>
                  {activeSection === index ? (
                    <FiMinus className="text-xl" />
                  ) : (
                    <GoPlus className="text-xl" />
                  )}
                </button>
                {activeSection === index && (
                  <ul className="px-6 py-4 text-gray-700 space-y-2 text-base bg-white">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heropigeons;
