'use client';
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaWpforms } from "react-icons/fa6";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdOutlineStart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

// Correct pigeon data arrays
const PigeonAppearance = [
  "Length: 29–33cm.",
  "Weight: 260–580g.",
  "Grey, slightly iridescent neck feathers that shine pink and green in sunlight.",
  "Color variants include white, brownish-red, and mixtures."
];

const PigeonLifecycle = [
  "Can produce up to 9 broods per year, typically 2–3 on average.",
  "Each clutch contains 2 eggs; new eggs laid when chicks are 20 days old.",
  "Egg incubation lasts 17–19 days.",
  "Chicks remain in the nest for 35–37 days.",
  "Lifespan: 3–5 years in the wild, up to 35 years in captivity."
];

const PigeonBehaviour = [
  "Female pigeons build nests using materials gathered by males.",
  "Often roost in urban structures like ledges, lofts, and statues.",
  "Feed on seeds, bread, vegetables, meat, and food waste.",
  "Drink by dipping bills in water and sipping without lifting heads.",
  "Young pigeons (squabs) are fed pigeon milk produced in the crop.",
  "When startled, pigeons take flight with loud clapping to alert others.",
  "Capable of rapid flight maneuvers at speeds up to 50mph.",
  "Non-migratory and remain resident year-round.",
  "Avoid feeding pigeons near buildings to prevent nesting.",
  "Acidic droppings damage structures and pose health risks (e.g., Psittacosis)."
];

const Heropigeons = () => {
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
          Trouble with Pigeons?
        </h1>
        <p className="text-sm">
          Ark provide pest control solutions to pigeon infestations in London, the South East, the North West, the North and the Midlands.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center p-5 sm:py-10">
          <div className="w-full sm:w-1/4 h-70">
            <img
              src="/Navbar/pigeons.png"
              className="w-full h-full object-cover rounded-xl"
              alt="pigeons"
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
          {/* Pigeon Info Card */}
          <div className={`border border-green-500 w-full ${rat ? "h-0" : "h-auto"}`}>
            <div
              className="flex justify-between items-center gap-5 text-white px-3 py-2 bg-green-600 cursor-pointer"
              onClick={toggleMouse}
            >
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-3xl" />
                <p className="text-md md:text-xs lg:text-lg font-semibold">
                  Pigeons - Learn More
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
                    {PigeonAppearance.map((item, index) => (
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
                    {PigeonLifecycle.map((item, index) => (
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
                    {PigeonBehaviour.map((item, index) => (
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

export default Heropigeons;
