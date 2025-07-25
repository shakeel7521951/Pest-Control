'use client';
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaWpforms } from "react-icons/fa6";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdOutlineStart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const WaspAppearance = [
  "Body length: 10–20mm depending on species.",
  "Black and yellow striped abdomen (warning coloration).",
  "Narrow waist separating thorax and abdomen.",
  "Two pairs of wings, with hindwings smaller.",
  "Antennae are straight and clearly visible."
];

const WaspLifecycle = [
  "Queens emerge in spring and build nests from chewed wood pulp.",
  "Eggs hatch in a few days, larvae are fed by the queen.",
  "Larvae pupate after ~2 weeks, becoming adult wasps.",
  "Lifecycle completes in 4–6 weeks, depending on temperature.",
  "Colonies die in autumn, only new queens survive winter."
];

const WaspBehaviour = [
  "Highly social insects living in colonies with a queen, workers, and drones.",
  "Become aggressive in late summer as food becomes scarce.",
  "Feed on nectar, sweet foods, and other insects.",
  "Can sting multiple times, unlike bees.",
  "Build nests in attics, wall cavities, sheds, and underground."
];

const Herowasps = () => {
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
          Wasp Problems? We Can Help.
        </h1>
        <p className="text-sm">
          Ark provides expert wasp control services across London, the Midlands, and Northern regions. Get rid of wasp infestations quickly and effectively.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center p-5 sm:py-10">
          <div className="w-full sm:w-1/2 h-80">
            <img
              src="/Navbar/wasps.jpg"
              className="w-full h-full object-cover rounded-xl"
              alt="wasps"
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
                  Wasps - Learn More
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
                    {WaspAppearance.map((item, index) => (
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
                    {WaspLifecycle.map((item, index) => (
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
                    {WaspBehaviour.map((item, index) => (
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

export default Herowasps;
