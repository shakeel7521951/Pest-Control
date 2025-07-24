'use client';
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaWpforms } from "react-icons/fa6";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdOutlineStart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const FoxAppearance = [
  "Average 60 – 90cms head & body length but can reach 1.5m.",
  "Male foxes average weight is about 10kgs and the female fox is 8kgs.",
  "The colour of the fox’s fur varies and can range from yellowy orange, through red to black.",
  "Most common characteristic of the fox is white fur on the chin, chest and end of the tail."
];

const FoxLifecycle = [
  "Breeding season lasts for three months over the winter period. Foxes gestation period is about eight weeks.",
  "Litter sizes range from one to ten ‘kits’.",
  "‘Kits’ leave their mother at between 6 and 8 months old.",
  "Although a fox could live well beyond 10, their life expectancy in the wild is short and probably only averages between one and two years."
];

const FoxBehaviour = [
  "Foxes tend to make their homes in woodland and farmland. Except for breeding females, foxes do not tend to sleep in their ‘dens’ but may sleep in the open.",
  "Foxes are nocturnal creatures but do occasionally venture out in daylight.",
  "Foxes are curious animals but also wary of contact and are unlikely to approach a human.",
  "They have seldom been known to attack fully grown domestic pets such as dogs and cats.",
  "Foxes’ diet is variable – they eat chickens, rats, mice etc. but also like berries, fruit, vegetables, and grains.",
  "Foxes will, in fact, eat pretty much the same as a human being which is why they scavenge in dustbins."
];

const Herofox = () => {
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
          Trouble with Foxes?
        </h1>
        <p className="text-sm">
          Ark provide pest control solutions to fox infestations in London, the South East, the North West, the North and the Midlands.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center p-5 sm:py-10">
          <div className="w-full sm:w-1/2 h-80">
            <img
              src="/Navbar/fox.jpg"
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
          {/* Fox Card */}
          <div
            className={`border border-green-500 w-full ${
              rat ? "h-0 overflow-hidden" : "h-auto"
            }`}
          >
            <div
              className="flex justify-between items-center gap-5 text-white px-3 py-2 bg-green-600 cursor-pointer"
              onClick={toggleMouse}
            >
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-3xl" />
                <p className="text-md md:text-xs lg:text-lg font-semibold">
                  Foxes - Learn More
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
                    {FoxAppearance.map((item, index) => (
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
                    {FoxLifecycle.map((item, index) => (
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
                    {FoxBehaviour.map((item, index) => (
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

export default Herofox;
