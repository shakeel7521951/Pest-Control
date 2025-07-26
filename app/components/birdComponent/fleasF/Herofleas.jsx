'use client';
import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { PiBugBeetleBold } from "react-icons/pi";
import { GiJumpingDog } from "react-icons/gi";

const sections = [
  {
    title: "Flea Appearance",
    icon: <PiBugBeetleBold className="text-lg text-green-600" />,
    content: [
      "Length: Around 2mm.",
      "Compressed, flattened bodies with hard plates.",
      "Powerful hind legs for jumping.",
      "Grey to dark mahogany color.",
      "Piercing mouthparts and tiny eyes.",
      "Body covered in backward-facing spines."
    ]
  },
  {
    title: "Lifecycle",
    icon: <GiJumpingDog className="text-lg text-green-600" />,
    content: [
      "Eggs laid in fabric, bedding, and crevices.",
      "Hatch in 2–3 days into larvae (5mm long).",
      "Larvae develop in dark, humid areas.",
      "Spin cocoons; adults emerge via vibration.",
      "Development speed varies with temperature."
    ]
  },
  {
    title: "Behaviour",
    icon: <TbPhoneCall className="text-lg text-green-600" />,
    content: [
      "Adults live for weeks without feeding.",
      "Larvae feed on debris and adult flea dirt.",
      "Prefer pet hosts but will bite humans.",
      "Flea bites can cause allergic reactions.",
      "Can transmit tapeworms and diseases.",
      "Central heating and carpets help infestation spread."
    ]
  }
];

const Herofleas = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-green-600">Flea Control Services</h1>
          <p className="text-sm text-gray-600">
            Professional flea removal services covering homes and businesses across the UK.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/Navbar/fleas.jpg"
              alt="Fleas"
              className="object-cover w-full h-80"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-green-50 border border-green-300 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Contact Us Today</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <TbPhoneCall className="text-xl text-green-600" />
                <span>Freephone: <strong>0800 0279 273</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <TbPhoneCall className="text-xl text-green-600" />
                <span>Local Rate: <strong>01689 834 465</strong></span>
              </div>
              <p className="mt-4 text-gray-700">
                Speak with our pest experts to schedule an inspection or treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion Info */}
        <div className="space-y-5">
          {sections.map((section, index) => (
            <div key={index} className="border rounded-md shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-green-600 text-white font-medium hover:bg-green-700 transition"
              >
                <span className="flex items-center gap-3">
                  {section.icon}
                  {section.title}
                </span>
                {openIndex === index ? (
                  <MdExpandLess className="text-2xl" />
                ) : (
                  <MdExpandMore className="text-2xl" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white px-5 py-4 text-sm text-gray-700 space-y-2">
                  {section.content.map((point, idx) => (
                    <li key={idx} className="ml-4 list-disc">{point}</li>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herofleas;
