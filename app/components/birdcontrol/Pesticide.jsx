"use client";
import Image from "next/image";
import { useState } from "react";

const Pesticide = () => {
  const [hoveredPet, setHoveredPet] = useState(null);

  const pets = [
    {
      id: 1,
      name: "Ants",
      image: "/home/ants.jpg",
      bgColor: "bg-[#FFD166]",
    },
    {
      id: 2,
      name: "Bedbug",
      image: "/home/bedbug.png",
      bgColor: "bg-[#06D6A0]",
    },
    {
      id: 3,
      name: "Fox",
      image: "/home/fox.jpg",
      bgColor: "bg-[#118AB2]",
    },
    {
      id: 4,
      name: "Flies",
      image: "/home/flies.jpg",
      bgColor: "bg-[#073B4C]",
    },
    {
      id: 5,
      name: "Flea",
      image: "/home/flea.jpg",
      bgColor: "bg-[#EF476F]",
    },
    {
      id: 6,
      name: "Cockroach",
      image: "/home/cockroach.jpg",
      bgColor: "bg-[#7209B7]",
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/home/wasps.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000000]"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pick Your <span className="text-[#7BAE4B]">Perfect Pet</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Discover the ideal companion for your lifestyle from our wide
            selection of pets.
          </p>
        </div>

        {/* Pet Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredPet(pet.id)}
              onMouseLeave={() => setHoveredPet(null)}
            >
              <div
                className={`relative overflow-hidden border-2 w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg mb-4 transition-all duration-300 ${
                  hoveredPet === pet.id ? "transform scale-110" : ""
                }`}
              >
                <Image
                  src={pet.image}
                  alt={pet.name}
                  layout="fill"
                  objectFit=""
                  className="drop-shadow-2xl"
                />
              </div>

              <h3
                className={`text-lg font-semibold transition-all duration-300 ${
                  hoveredPet === pet.id
                    ? "text-[#7BAE4B] scale-105"
                    : "text-white"
                }`}
              >
                {pet.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-[#7BAE4B] hover:bg-[#679640] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
            View All Pets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pesticide;

