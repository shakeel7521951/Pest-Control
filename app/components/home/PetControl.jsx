"use client";
import { useState } from "react";
import Link from 'next/link'
import {
  FaPaw,
  FaShieldAlt,
  FaHeart,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import { CgPlayTrackNextR } from "react-icons/cg";

const PetControl = () => {
  const [selectedPet, setSelectedPet] = useState("");

 const petOptions = [
  { value: "", label: "Select your pet" },
  { value: "Rodents", label: "Rodents", link: "/hoverbird/rodent" },
  { value: "Cockroaches", label: "Cockroaches", link: "/hoverbird/cockraches" },
  { value: "Fleas", label: "Fleas", link: "/hoverbird/fleas" },
  { value: "Bed Bugs", label: "Bed Bugs", link: "/hoverbird/bedbugs" },
  { value: "Wasps", label: "Wasps", link: "/hoverbird/wasps" },
  { value: "Pigeon", label: "Pigeon", link: "/hoverbird/pigeon" },
  { value: "Honeybee", label: "Honeybee", link: "/hoverbird/honeybee" },
  { value: "Moths", label: "Moths", link: "/hoverbird/moth" },
  { value: "Fox", label: "Fox", link: "/hoverbird/fox" }
];

  const serviceQualities = [
    {
      icon: <FaPaw className="text-3xl text-[#7BAE4B]" />,
      title: "Expert Care",
      description:
        "Certified professionals with specialized training in pet care",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#7BAE4B]" />,
      title: "Safety First",
      description: "100% safe and monitored environment for your pets",
    },
    {
      icon: <FaHeart className="text-3xl text-[#7BAE4B]" />,
      title: "Loving Attention",
      description: "Your pet receives affection and playtime daily",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-[#7BAE4B]" />,
      title: "Flexible Scheduling",
      description: "Services available 24/7 to fit your busy life",
    },
    {
      icon: <FaStar className="text-3xl text-[#7BAE4B]" />,
      title: "Premium Quality",
      description: "Only the best food, toys, and equipment used",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#f9f9f9] to-[#f0f0f0]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          {/* Left side - Text content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A41] mb-4">
              Personalized Pet Care Control
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Take control of your pet's wellness journey. Our specialized
              services adapt to your pet's unique needs, ensuring they receive
              the perfect care tailored just for them.
            </p>
            <p className="text-gray-600">
              Select your pet type to discover customized care options and
              services designed specifically for their breed and personality.
            </p>
          </div>

          {/* Right side - Pet selection */}
          <div className="md:w-1/2 w-full">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#1B2A41] mb-2">
                  My Pet Profile
                </h3>
                <p className="text-gray-600">
                  Let us know about your furry friend
                </p>
              </div>

              <div className="relative">
                <select
                  value={selectedPet}
                  onChange={(e) => setSelectedPet(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7BAE4B] focus:ring-2 focus:ring-[#7BAE4B] outline-none transition-all duration-200 appearance-none bg-white"
                >
                  {petOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {selectedPet && (
           <Link href={petOptions.find((p) => p.value === selectedPet)?.link || "#"}>
                <div className="mt-6 p-4 bg-[#7BAE4B1A] cursor-pointer rounded-lg border hover:shadow-md transition border-[#7BAE4B] border-opacity-30">
                  <p className=" font-medium flex items-center gap-3 text-[#1B2A41]">
                    <span className="whitespace-nowrap">Great choice! We have special services for your{" "}</span>
                 <p className="flex items-center gap-3 uppercase">
                    <span className="underline text-green-600"> {petOptions
                      .find((p) => p.value === selectedPet)
                      ?.label.toLowerCase()}</span>
                    <span><CgPlayTrackNextR className="text-xl text-green-800" /></span>
                 </p>

                  </p>
                </div>
           </Link>
              )}
            </div>
          </div>
        </div>

        {/* Service Qualities Section */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[#1B2A41] mb-12">
            Why Pet Owners <span className="text-[#7BAE4B]">Trust Us</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceQualities.map((quality, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#7BAE4B] hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-[#7BAE4B1A] rounded-full">
                    {quality.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-[#1B2A41] mb-2">
                    {quality.title}
                  </h4>
                  <p className="text-gray-600">{quality.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetControl;
