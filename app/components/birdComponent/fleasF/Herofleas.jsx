'use client';
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaWpforms } from "react-icons/fa6";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdOutlineStart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const FleasAppearance = [
  "Length: Around 2mm.",
  "Compressed flattened bodies with overlapping toughened plates.",
  "Long well-developed hind legs for jumping.",
  "Greyish through to dark mahogany in colour.",
  "Mouthparts adapted to piercing and sucking with small eyes.",
  "Covered with backward-directed bristles and spines."
];

const FleasLifecycle = [
  "Eggs (0.5mm, pearly white) are laid in carpets, floorboards, fur, bedding, and clothing.",
  "Hatch in 2–3 days. Larvae (whitish, up to 5mm) thrive in dark, humid places like under furniture.",
  "Larvae molt 2–3 times and are fully grown in 3–4 weeks.",
  "Pupae spin cocoons with debris; development depends on temperature.",
  "Adults emerge from cocoons in response to vibration and immediately seek a blood meal."
];

const FleasBehaviour = [
  "Adults can survive several weeks without a blood meal.",
  "Larvae thrive in dark, humid areas such as pet bedding and carpet fluff.",
  "They feed on organic debris and adult flea excrement.",
  "Adults feed on preferred hosts' blood but may bite other animals if necessary.",
  "Often found on pets and may cause irritation to humans.",
  "Wall-to-wall carpets and central heating provide ideal conditions for flea development.",
  "Fleas can transmit diseases and parasitic worms to pets and sometimes humans.",
  "Flea bites can cause allergic reactions and were once linked to the spread of the plague (1665)."
];

const Herofleas = () => {
  const [mouse, setMouse] = useState(false);
  const [rat, setRat] = useState(false);

  const toggleMouse = () => {
    setMouse(!mouse);
    if (rat) setRat(false);
  };

  const toggleRat = () => {
    setRat(!rat);
    if (mouse) setMouse(false);
  };

  return (
    <div className="p-5 sm:px-20 flex gap-5 py-10">
      <div className="w-full">
        <h1 className="text-3xl mb-2 font-semibold text-green-400">
          Trouble with Fleas?
        </h1>
        <p className="text-sm">
          Ark provide pest control solutions to flea infestations in London, the South East, the North West, the North and the Midlands.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center p-5 sm:py-10">
          <div className="w-full sm:w-1/2 h-80">
            <img
              src="/Navbar/fleas.jpg"
              className="w-full h-full object-cover rounded-xl"
              alt="rodents"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-3 text-xl font-semibold border-2 bg-green-500 text-white p-5 rounded-r-4xl">
            <h1 className="flex items-center gap-5">
              <BsFillTelephoneFill />
              <p>Freephone: 0800 0279 273</p>
            </h1>
            <h1 className="flex items-center gap-5">
              <BsTelephone />
              <p>Local Rate: 01689 834 465</p>
            </h1>
          </div>
        </div>

        <div className="w-full mt-5 sm:mt-2 flex flex-col md:flex-row gap-5">
          {/* Fleas Card */}
          <div
            className={`border border-green-500 w-full ${
              rat ? "h-0" : "h-auto"
            }`}
          >
            <div
              className="flex justify-between items-center gap-5 text-white px-3 py-2 bg-green-600 cursor-pointer"
              onClick={toggleMouse}
            >
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-3xl" />
                <p className="text-md md:text-xs lg:text-lg font-semibold">
                  Fleas - Learn More
                </p>
              </div>
              {mouse ? (
                <FiMinus className="text-xl" />
              ) : (
                <GoPlus className="text-xl" />
              )}
            </div>
            {mouse && (
              <div className="p-2  flex flex-col">
                <div className="my-3">
                  <h1 className="font-semibold mb-5">Appearance</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {FleasAppearance.map((item, index) => (
                      <li key={index} className="flex gap-2 items-center my-1">
                        <MdOutlineStart />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-3">
                  <h1 className="font-semibold mb-5">Lifecycle</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {FleasLifecycle.map((item, index) => (
                      <li key={index} className="flex gap-2 items-center my-1">
                        <MdOutlineStart />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-3">
                  <h1 className="font-semibold mb-5">Behaviour</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {FleasBehaviour.map((item, index) => (
                      <li key={index} className="flex gap-2 items-center my-1">
                        <MdOutlineStart />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herofleas;
