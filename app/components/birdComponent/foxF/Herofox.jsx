'use client';
import React, { useState } from "react";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";

const TABS = {
  appearance: "Appearance",
  lifecycle: "Lifecycle",
  behaviour: "Behaviour",
};

const TAB_CONTENT = {
  appearance: [
    "Average 60 – 90cms head & body length but can reach 1.5m.",
    "Male foxes average weight is about 10kgs and the female fox is 8kgs.",
    "The colour of the fox’s fur varies and can range from yellowy orange, through red to black.",
    "Most common characteristic of the fox is white fur on the chin, chest and end of the tail."
  ],
  lifecycle: [
    "Breeding season lasts for three months over the winter period. Foxes gestation period is about eight weeks.",
    "Litter sizes range from one to ten ‘kits’.",
    "‘Kits’ leave their mother at between 6 and 8 months old.",
    "Although a fox could live well beyond 10, their life expectancy in the wild is short and probably only averages between one and two years."
  ],
  behaviour: [
    "Foxes tend to make their homes in woodland and farmland. Except for breeding females, foxes do not tend to sleep in their ‘dens’ but may sleep in the open.",
    "Foxes are nocturnal creatures but do occasionally venture out in daylight.",
    "Foxes are curious animals but also wary of contact and are unlikely to approach a human.",
    "They have seldom been known to attack fully grown domestic pets such as dogs and cats.",
    "Foxes’ diet is variable – they eat chickens, rats, mice etc. but also like berries, fruit, vegetables, and grains.",
    "Foxes will, in fact, eat pretty much the same as a human being which is why they scavenge in dustbins."
  ],
};

const HeroFox = () => {
  const [activeTab, setActiveTab] = useState("appearance");

  return (
    <div className="px-5 sm:px-20 py-10 bg-gray-50">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-600 mb-4">Fox Control Services</h1>
          <p className="text-gray-700 mb-6">
            Professional fox control and wildlife management services across the UK. Safe, humane, and effective.
          </p>
          <div className="space-y-3 text-base">
            <div className="flex items-center gap-3 text-green-700 font-medium">
              <BsFillTelephoneFill />
              <span>Freephone: 0800 0279 273</span>
            </div>
            <div className="flex items-center gap-3 text-green-700 font-medium">
              <BsTelephone />
              <span>Local Rate: 01689 834 465</span>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src="/Navbar/fox2.avif"
            alt="Fox Control"
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="mt-10">
        <div className="flex gap-5 border-b border-gray-300">
          {Object.entries(TABS).map(([key, label]) => (
            <button
              key={key}
              className={`py-2 px-4 text-sm sm:text-base font-medium ${
                activeTab === key
                  ? "border-b-4 border-green-600 text-green-700"
                  : "text-gray-500 hover:text-green-600"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-6 bg-white p-5 rounded-lg shadow-sm border">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {TAB_CONTENT[activeTab].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroFox;
