'use client';
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaWpforms } from "react-icons/fa6";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdOutlineStart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const HouseMouseAppearance = [
  "Combined head and body length: 70–90mm.",
  "Mice usually weigh less than 23g (average 15–18g).",
  "Length of hind feet: 16–19mm.",
  "Brown-grey fur, with slightly lighter under-parts.",
  "House mice have large ears, a pointed nose, and a tail that's usually around 80% the length of the head and body."
];

const HouseMouseLifecycle = [
  "Sexually mature at: 8–12 weeks.",
  "Gestation period: 17–20 days.",
  "Litter size (average): 5–6.",
  "Weaning period: 3 weeks."
];

const HouseMouseBehaviour = [
  "Mice are usually ground-living, nesting around undisturbed parts of buildings and climbing through wall cavities.",
  "They are also found in open fields, burrowing and building complex tunnel systems with several exits.",
  "Omnivorous but prefer to eat cereals and insects.",
  "Consume around 3g of food and up to 3ml of water daily, though they can survive without additional water.",
  "Typically nocturnal, but may forage during the day if colonies become overcrowded."
];

const BrownRatAppearance = [
  "Combined head & body Length: 200–270mm.",
  "Average weight: 250–500g (Max 700g).",
  "Coarse brown (occasionally black) fur, with a pale underside.",
  "Tails are 150–210mm."
];

const BrownRatLifecycle = [
  "Can live up to 18 months in the wild, but 3–4 years domestically."
];

const BrownRatBehaviour = [
  "Rats are very adaptable and can be found in a variety of habitats, usually in close conjunction with humans.",
  "Burrowing, but sometimes climbing — they are the only species to occur in UK sewers.",
  "Norway rats are omnivorous, eating fish, vegetables, weeds, earthworms, nuts and fruit, but prefer protein-rich foods, such as cereals.",
  "They will eat around 30g of food a day and drink 60ml.",
  "Rats are typically nocturnal, although they will sometimes forage for food during the day if colonies become overpopulated.",
  "They live in loose colonies, made up of aggregations of clans – usually defending their territory from other rats.",
  "The biggest rats are dominant over their smaller counterparts.",
  "Brown rats swim well and are sometimes mistaken for water voles.",
  "They have well-developed senses of hearing and smell."
];

const HeroRodent = () => {
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
          Rodent Problems? We Can Help.
        </h1>
        <p className="text-sm">
          Ark provides expert rodent control services across London, the Midlands, and Northern regions. Get rid of house mice and brown rats effectively.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-10 items-center p-5 sm:py-10">
          <div className="w-full sm:w-1/2 h-80">
            <img
              src="/Navbar/mouse.png"
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
          {/* House Mouse Card */}
          <div
          
        
          className={`border border-green-500 w-full md:w-1/2 ${
            rat ? "h-0" :"h-auto"
          }`}>
            <div
              className="flex justify-between items-center gap-5 text-white px-3 py-2 bg-green-600 cursor-pointer"
              onClick={toggleMouse}
            >
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-3xl" />
                <p className="text-md md:text-xs lg:text-lg font-semibold">
                  Rats - Learn More
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
                    {HouseMouseAppearance.map((item, index) => (
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
                    {HouseMouseLifecycle.map((item, index) => (
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
                    {HouseMouseBehaviour.map((item, index) => (
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

          {/* Brown Rat Card */}
          <div className={`  w-full md:w-1/2 ${
            mouse ? "h-0" :"h-auto"
          }`}>
            <div
              className="flex justify-between items-center gap-5 text-white px-3 py-2 bg-green-600 cursor-pointer"
              onClick={toggleRat}
            >
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-3xl" />
                <p className="text-md md:text-xs lg:text-lg font-semibold">
                  Mice - Learn More
                </p>
              </div>
              {rat ? (
                <FiMinus className="text-xl" />
              ) : (
                <GoPlus className="text-xl" />
              )}
            </div>
            {rat && (
              <div 
              className="p-2  flex flex-col border border-green-500">
                <div className="my-3">
                  <h1 className="font-semibold mb-5">Appearance</h1>
                  <ul className="flex flex-col text-sm gap-3">
                    {BrownRatAppearance.map((item, index) => (
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
                    {BrownRatLifecycle.map((item, index) => (
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
                    {BrownRatBehaviour.map((item, index) => (
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

export default HeroRodent;
