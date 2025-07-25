'use client';
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaWpforms } from "react-icons/fa6";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdOutlineStart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const BedBugsAppearance = [
  "The eggs are tiny and hard to see with a white cap.",
  "Adults are around 6mm, with oval and flattened bodies.",
  "After feeding, their color changes to a red-brown shade.",
  "They have piercing mouthparts for sucking, simple antennae, legs, and claws to cling to hosts while feeding."
];

const BedBugsLifecycle = [
  "Up to 200 eggs are laid in a lifetime.",
  "4–5 eggs are laid daily, glued in cracks and crevices.",
  "Newly hatched nymphs are no bigger than a pinhead and hatch only above 13°C.",
  "Nymphs go through 5 moults over weeks to months depending on food and temperature.",
  "Each moult requires a blood meal, and limited access delays development."
];

const BedBugsBehaviour = [
  "They hide in cracks such as headboards, peeling wallpaper, plaster gaps, light switches, plug sockets, carpets, and skirting boards.",
  "Also found in soft furnishings like mattress seams, curtains, clothing, and bedsheets.",
  "Feeding typically lasts around 10 minutes; though nocturnal, they may appear during the day if hungry.",
  "Prefer to stay near sleeping areas, remaining dormant until a host sleeps.",
  "They mainly feed on humans but can bite other warm-blooded animals, including pets."
];

const Herobedbus = () => {
  const [mouse, setMouse] = useState(false);
  const [rat, setRat] = useState(false);

  const toggleMouse = () => {
    setMouse(!mouse);
    if (rat) setRat(false);
  };

  return (
    <div className="p-5 sm:px-20 flex gap-5 py-10">
      <div className="w-full">
        <h1 className="text-3xl mb-2 font-semibold text-green-400">
          Trouble with Bed Bugs?
        </h1>
        <p className="text-sm">
          Ark provide pest control solutions to bed bugs infestations in London, the South East, the North West, the North and the Midlands.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center p-5 sm:py-10">
          <div className="w-full sm:w-1/2 h-80">
            <img
              src="/Navbar/bedbugs.png"
              className="w-full h-full object-cover rounded-xl"
              alt="bedbugs"
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

        {/* Bed Bugs Info Card */}
        <div className="w-full mt-5 sm:mt-2 flex flex-col md:flex-row gap-5">
          <div
            className={`border border-green-500 w-full  ${
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
                  Bed Bugs - Learn More
                </p>
              </div>
              {mouse ? (
                <FiMinus className="text-xl" />
              ) : (
                <GoPlus className="text-xl" />
              )}
            </div>

            {mouse && (
              <div className="p-2 flex flex-col">
                <div className="my-3">
                  <h1 className="font-semibold mb-5">Appearance</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {BedBugsAppearance.map((item, index) => (
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
                    {BedBugsLifecycle.map((item, index) => (
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
                    {BedBugsBehaviour.map((item, index) => (
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

export default Herobedbus;
