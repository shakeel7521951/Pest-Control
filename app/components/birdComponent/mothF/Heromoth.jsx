'use client';
import React from "react";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdOutlineStart } from "react-icons/md";

const appearance = [
  "Length: 4–7mm long overall.",
  "Long thread-like antennae and long legs with spines at the joints.",
  "Forewings are shiny golden with no markings.",
  "Trailing edge of the wings is strongly fringed."
];

const lifecycle = [
  "Eggs are laid amongst fibres and fabrics, hatching in 1–5 weeks at temperatures above 10°C.",
  "Larvae are whitish caterpillars that form silk tunnels camouflaged with fibres and debris.",
  "Pupae develop inside fabric, taking 2 weeks to 2 months to develop.",
  "Adults do not feed and are short-lived."
];

const behaviour = [
  "Target textiles like wool, fur, silk, skins, feathers, and leather.",
  "Prefer dark areas such as wardrobes and furniture.",
  "Found on clothes, carpets, curtains, and sofas.",
  "Cause significant property damage across the UK."
];

const Heromoth = () => {
  return (
    <section className="px-5 md:px-20 py-10 bg-white text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600 mb-2">Clothes Moth Infestation</h1>
        <p className="text-sm max-w-xl mx-auto">
          We offer effective moth pest control solutions across London, the Midlands, and beyond. Learn more about their appearance, lifecycle, and behavior.
        </p>
      </div>

      {/* Image + Contact */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
        <div className="w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-md ">
          <img
            src="/Navbar/moths2.webp"
            alt="Clothes Moth"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full md:w-1/2 bg-green-600 text-white rounded-xl p-6 shadow-lg space-y-4">
          <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
          <div className="flex items-center gap-4 text-lg">
            <BsFillTelephoneFill />
            <span>Freephone: 0800 0279 273</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <BsTelephone />
            <span>Local Rate: 01689 834 465</span>
          </div>
        </div>
      </div>

      {/* Moth Details Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-green-600 mb-3">Appearance</h3>
          <ul className="space-y-2 text-sm">
            {appearance.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <MdOutlineStart className="text-green-500 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-green-600 mb-3">Lifecycle</h3>
          <ul className="space-y-2 text-sm">
            {lifecycle.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <MdOutlineStart className="text-green-500 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-green-600 mb-3">Behaviour</h3>
          <ul className="space-y-2 text-sm">
            {behaviour.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <MdOutlineStart className="text-green-500 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Heromoth;
