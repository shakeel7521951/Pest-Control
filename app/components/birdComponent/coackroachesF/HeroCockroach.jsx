'use client';
import React, { useState } from "react";
import Image from "next/image";
import { PiBugBold, PiFlameBold, PiClockCountdownFill } from "react-icons/pi";
import { TbVirusSearch } from "react-icons/tb";

const cockroachInfo = {
  german: {
    title: "German Cockroach",
    image: "/Navbar/cockroaches.jpg",
    intro:
      "German cockroaches are one of the most common indoor pests, especially in kitchens and food storage areas. They thrive in warm, humid environments.",
    appearance: [
      "12–15mm in length, tan with two dark stripes.",
      "Long antennae and visible spiny legs.",
      "Males have longer wings overlapping the body.",
    ],
    lifecycle: [
      "Ootheca holds 30–40 eggs, carried by female.",
      "Eggs hatch in 2–4 weeks depending on temperature.",
      "Nymphs go through 5–7 molts before adulthood.",
      "Adults live for approximately 6 months.",
    ],
    behavior: [
      "Nocturnal and hide in kitchen cracks & appliances.",
      "Can climb smooth and rough surfaces.",
      "Omnivorous scavengers—consume all organic material.",
      "Highly dependent on moisture—stay near water sources.",
    ],
  },
  oriental: {
    title: "Oriental Cockroach",
    image: "/Navbar/cockroaches.jpg",
    intro:
      "Oriental cockroaches are larger and often found in damp, cooler areas such as basements, drains, and utility rooms. They're slower but hardy survivors.",
    appearance: [
      "17–30mm long, shiny dark brown to black body.",
      "Head concealed under a large pronotum.",
      "Spiny legs, long antennae, and visible cerci.",
    ],
    lifecycle: [
      "Each ootheca contains ~16 eggs.",
      "Laid in dark crevices, incubation 6–12 weeks.",
      "Nymphs undergo 7–10 molts before adulthood.",
      "Adults can live up to 6 months.",
    ],
    behavior: [
      "Prefer cooler, damp places like basements & drains.",
      "Cannot climb smooth surfaces unlike German type.",
      "Slower moving but more tolerant of cold.",
      "Common in food-related commercial properties.",
    ],
  },
};

const SectionCard = ({ icon, title, items }) => (
  <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
    <h3 className="flex items-center gap-2 text-green-700 font-bold mb-3 text-md">
      {icon}
      {title}
    </h3>
    <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const HeroCockroach = () => {
  const [selected, setSelected] = useState("german");
  const pest = cockroachInfo[selected];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
          Identify & Eliminate Cockroach Infestations
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Discover the key differences between German and Oriental cockroaches and learn how our experts target each species effectively.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-5 py-2 rounded-full border font-semibold text-sm transition ${
            selected === "german"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-green-700 border-green-400 hover:bg-green-100"
          }`}
          onClick={() => setSelected("german")}
        >
          German Cockroach
        </button>
        <button
          className={`px-5 py-2 rounded-full border font-semibold text-sm transition ${
            selected === "oriental"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-green-700 border-green-400 hover:bg-green-100"
          }`}
          onClick={() => setSelected("oriental")}
        >
          Oriental Cockroach
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image + Intro */}
        <div>
          <div className="w-full h-72 relative rounded-xl overflow-hidden shadow-xl mb-4">
            <Image
              src={pest.image}
              alt={pest.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-xl font-bold text-green-700 mb-2">{pest.title}</h2>
          <p className="text-sm text-gray-600">{pest.intro}</p>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 gap-5">
          <SectionCard
            icon={<PiBugBold className="text-green-600" />}
            title="Appearance"
            items={pest.appearance}
          />
          <SectionCard
            icon={<PiClockCountdownFill className="text-green-600" />}
            title="Lifecycle"
            items={pest.lifecycle}
          />
          <SectionCard
            icon={<TbVirusSearch className="text-green-600" />}
            title="Behavior"
            items={pest.behavior}
          />
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-lg font-bold mb-1">Need Immediate Cockroach Control?</h3>
          <p className="text-sm">Call our specialists now for a fast, discreet response.</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">📞 Freephone: 0800 0279 273</p>
          <p className="font-semibold">📱 Local Rate: 01689 834 465</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCockroach;
