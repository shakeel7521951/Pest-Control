'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PiMouseSimpleLight, PiPawPrint } from "react-icons/pi";

const rodentData = {
  mouse: {
    name: "House Mouse",
    image: "/Navbar/mouse.png",
    description:
      "Small, nimble, and often found nesting inside buildings. House mice are common pests in urban environments.",
    appearance: [
      "Body length: 70–90mm",
      "Weight: 15–18g",
      "Brown-grey fur, lighter underneath",
      "Large ears and pointed nose",
      "Tail is about 80% of body length"
    ],
    lifecycle: [
      "Matures at 8–12 weeks",
      "Gestation: 17–20 days",
      "Average litter size: 5–6",
      "Weaning in 3 weeks"
    ],
    behavior: [
      "Nests in quiet indoor spaces or fields",
      "Omnivorous, prefers cereals & insects",
      "Consumes 3g food/day",
      "Mostly nocturnal"
    ]
  },
  rat: {
    name: "Brown Rat",
    image: "/Navbar/mouse.png",
    description:
      "Larger and more aggressive than mice, brown rats are resourceful scavengers and strong swimmers often found in sewers and burrows.",
    appearance: [
      "Body length: 200–270mm",
      "Weight: 250–500g",
      "Coarse brown fur with pale underside",
      "Tail length: 150–210mm"
    ],
    lifecycle: [
      "Lives 18 months in wild, up to 4 years in captivity"
    ],
    behavior: [
      "Burrows and nests in varied habitats",
      "Eats about 30g of food and drinks 60ml daily",
      "Omnivorous, prefers protein-rich foods",
      "Lives in loosely structured colonies",
      "Strong swimmer, good hearing and smell"
    ]
  }
};

const InfoSection = ({ title, items }) => (
  <div className="mb-5">
    <h3 className="text-lg font-semibold text-green-700 mb-2">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

const HeroRodent = () => {
  const [active, setActive] = useState("mouse");

  const current = rodentData[active];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Rodent Identification & Control
          </h1>
          <p className="text-gray-700 mb-6 text-sm leading-relaxed">
            Understanding the difference between house mice and brown rats is key to effective pest control. Learn their behaviors, lifecycles, and how we target each with precision.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setActive("mouse")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                active === "mouse"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-700 border-green-500 hover:bg-green-100"
              }`}
            >
              <PiMouseSimpleLight className="text-xl" />
              Rodent - Learn More
              {active === "mouse" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <button
              onClick={() => setActive("rat")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                active === "rat"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-700 border-green-500 hover:bg-green-100"
              }`}
            >
              <PiPawPrint className="text-xl" />
              Brown Rat
              {active === "rat" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>

        <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-xl">
          <Image
            src={current.image}
            alt={current.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          {current.name}
        </h2>
        <p className="text-sm text-gray-600 mb-6">{current.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoSection title="Appearance" items={current.appearance} />
          <InfoSection title="Lifecycle" items={current.lifecycle} />
          <InfoSection title="Behavior" items={current.behavior} />
        </div>
      </div>
    </div>
  );
};

export default HeroRodent;
