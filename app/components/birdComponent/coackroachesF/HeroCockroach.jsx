'use client';
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaWpforms } from "react-icons/fa6";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdOutlineStart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const GermnAprenceAry = [
  "Adults – 12 – 15mm long.",
  "Pronotum yellow with 2 dark brown stripes.",
  "The wings are as long as the body or slightly overlapping on males.",
  "Long antennae and spiny legs with 2 anal cerci visible on females.",
];
const GermnLifeAry = [
  "Eggs – Each ootheca (egg case) is around 6mm long and contains 30 – 40 eggs.",
  "Females carry the ootheca until just before it hatches – some 2 – 4 weeks later.",
  "Nymphs – will hatch and pass through 5-7 moults before reaching maturity. This is hugely influenced by temperature.",
  "Adults – emerge between 2 ½ months and 6 months later usually living for around 6 months.",
];
const GermnBehaAry = [
  "Being nocturnal they hide in the cracks and crevices around sinks, cookers and motor compartments of house hold appliances.",
  "They can scale rough and smooth surfaces.",
  "Mostly found in the heated areas of buildings such as kitchens and boiler rooms as they need high temperatures for optimum breeding.",
  "Being omnivorous they scavenge for organic material.",
  "They also need to be near a water source for regular drinking.Cockroaches are very common in commercial premises associated with the production or handling of food.",
  "Egg cases or adults can be transported into your premises on incoming crates, packaging and laundry.",
];

const OrientAprenceAry = [
  "Adults – 17 – 30 mm long.",
  "Their colour is a dark brown almost shiny black.",
  "Head tucked beneath pronotum, long antennae and spiny legs with 2 anal cerci.",
  "It is dangerous to swat a wasp near its nest site or to attempt to remove the nest yourself, as wasps can sting repeatedly.",
];
const OrientLifeAry = [
  "Eggs – ootheca (around 5 laid at intervals by female) each contain on average 16 eggs.",
  "These are deposited when they are fully formed in harbourages. Incubation is 6 – 12 weeks later dependent on temperature.",
  "Nymphs – progress through 7-10 moults before reaching maturity. Developing into adults may take up to 18 months.",
  "Adults – can live up to 6 months.",
];
const OrientBehaAry = [
  "Cockroaches are very common in commercial premises associated with the production or handling of food..",
  "Egg cases or adults can be transported into your premises on incoming crates, packaging and laundry.",
  "They can survive lower temperatures than other cockroaches so can also be found outdoors.",
  "Mostly found less cooler, less humid areas such as basements and drains.",
  "Oriental cockroaches can climb rough but not smooth vertical surfaces.",
];

const HeroCockroach = () => {
  const [german, setGerman] = useState(false);
  const [orient, setOrient] = useState(false);

  const toggleGerman = () => {
    setGerman(!german);
    if (orient) setOrient(false);
  };

  const toggleOrient = () => {
    setOrient(!orient);
    if (german) setGerman(false);
  };

  return (
    <div className="p-5 sm:px-20 flex gap-5 py-10">
      <div className="w-full">
        <h1 className="text-3xl mb-2 font-semibold text-green-400">
          Trouble with Cockroaches?
        </h1>
        <p className="text-sm">
          Ark provides pest control solutions to cockroach infestations in
          London, the South East, the North West, the North, and the Midlands.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center p-5 sm:py-10">
          <div className=" w-full sm:w-1/2 h-80">
            <img
              src="/Navbar/cockroaches.jpg"
              className="w-full h-full object-cover rounded-xl"
              alt="cockroaches"
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
          {/* German Cockroach Card */}
          <div className="border border-green-500 w-full md:w-1/2">
            <div
              className="flex justify-between items-center gap-5 text-white px-3 py-2 bg-green-600 cursor-pointer"
              onClick={toggleGerman}
            >
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-3xl" />
                <p className="text-md md:text-xs lg:text-lg font-semibold">
                  German Cockroaches - Learn More
                </p>
              </div>
              {german ? (
                <FiMinus className="text-xl" />
              ) : (
                <GoPlus className="text-xl" />
              )}
            </div>
            {german && (
              <div className="p-2 flex flex-col">
                <div className="my-3">
                  <h1 className="font-semibold mb-5">Appearence</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {GermnAprenceAry.map((item, index) => (
                      <li key={index} className="flex gap-2 items-center my-1">
                        <MdOutlineStart />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-3">
                  <h1 className="font-semibold mb-5">Lifecycle:</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {GermnLifeAry.map((item, index) => (
                      <li key={index} className="flex gap-2 items-center my-1">
                        <MdOutlineStart />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-3">
                  <h1 className="font-semibold mb-5">Habits & Behaviour:</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {GermnBehaAry.map((item, index) => (
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

          {/* Oriental Cockroach Card */}
          <div className="border border-green-500 w-full md:w-1/2">
            <div
              className="flex justify-between items-center gap-5 text-white px-3 py-2 bg-green-600 cursor-pointer"
              onClick={toggleOrient}
            >
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-3xl" />
                <p className="text-md md:text-xs lg:text-lg font-semibold">
                  Oriental Cockroaches - Learn More
                </p>
              </div>
              {orient ? (
                <FiMinus className="text-xl" />
              ) : (
                <GoPlus className="text-xl" />
              )}
            </div>
            {orient && (
              <div className="p-2 bg-red-300 flex flex-col">
                <div className="my-3">
                  <h1 className="font-semibold mb-5">Appearence</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {OrientAprenceAry.map((item, index) => (
                      <li key={index} className="flex gap-2 items-center my-1">
                        <MdOutlineStart />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-3">
                  <h1 className="font-semibold mb-5">Lifecycle:</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {OrientLifeAry.map((item, index) => (
                      <li key={index} className="flex gap-2 items-center my-1">
                        <MdOutlineStart />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-3">
                  <h1 className="font-semibold mb-5">Habits & Behaviour:</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {OrientBehaAry.map((item, index) => (
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

export default HeroCockroach;
