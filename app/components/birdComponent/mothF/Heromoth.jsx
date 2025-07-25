'use client';
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaWpforms } from "react-icons/fa6";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdOutlineStart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const ClothesMothAppearance = [
  "Length: 4–7mm long overall.",
  "Long thread-like antennae and long legs with spines at the joints.",
  "Forewings are shiny golden with no markings.",
  "Trailing edge of the wings is strongly fringed."
];

const ClothesMothLifecycle = [
  "Eggs are laid amongst fibres and fabrics, hatching in 1–5 weeks at temperatures above 10°C.",
  "Larvae are whitish caterpillars that form silk tunnels camouflaged with fibres and debris; they leave tunnels at night to feed.",
  "Pupae develop inside the last larval skin concealed in fabric, taking 2 weeks to 2 months to develop.",
  "Adults: Female moths are mostly sedentary, males may fly occasionally. Adults do not feed and are short-lived."
];

const ClothesMothBehaviour = [
  "Attack textiles and animal products like wool, fur, silk, skins, feathers, and leather.",
  "Avoid light and are often found in dark areas like old wardrobes and furniture.",
  "Also found on clothes, carpets, curtains, and sofas.",
  "Previously the most economically important clothing pest in Britain, causing an estimated £12 million worth of damage."
];

const Heromoth = () => {
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
          Trouble with Moths?
        </h1>
        <p className="text-sm">
          Ark provide pest control solutions to moth infestations in London, the South East, the North West, the North and the Midlands.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center p-5 sm:py-10">
          <div className="w-full sm:w-1/2 h-80">
            <img
              src="/Navbar/moths.jpg"
              className="w-full h-full object-cover rounded-xl"
              alt="moths"
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
          {/* Moths Card */}
          <div className={`border border-green-500 w-full ${rat ? "h-0 overflow-hidden" : "h-auto"}`}>
            <div
              className="flex justify-between items-center gap-5 text-white px-3 py-2 bg-green-600 cursor-pointer"
              onClick={toggleMouse}
            >
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-3xl" />
                <p className="text-md md:text-xs lg:text-lg font-semibold">
                  Moths - Learn More
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
                    {ClothesMothAppearance.map((item, index) => (
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
                    {ClothesMothLifecycle.map((item, index) => (
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
                    {ClothesMothBehaviour.map((item, index) => (
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

export default Heromoth;
