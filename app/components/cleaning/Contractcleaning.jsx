import React from "react";
import Link from "next/link";
import { FaMagic } from "react-icons/fa";

const CleaningServices = [
  "Monthly management inspection reports",
  "Technicians take photos on every visit",
  "Fully trained staff",
  "Vacuuming carpets and landings",
  "Cleaning windows, walls, skirting boards",
  "Polishing chrome/silver handles",
  "Maintaining outside common areas",
];

const ContractCleaning = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        {/* First Section */}
        <div className="bg-white p-10">
          <h1 className="text-2xl my-3 text-green-400">
            Monthly Management Inspection Reports
          </h1>
          <p>
            We thoroughly clean all common areas of residential blocks and
            estates. Regular cleaning and maintenance means that the homeowner
            or tenant can enjoy a clean, fresh environment, whilst any
            prospective residents will be attracted by the high standards of
            hygiene when visiting the building.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 py-10 w-full items-center">
            <div className="sm:w-1/2">
              <h2 className="text-2xl my-3 text-green-400 whitespace-nowrap">
                Our Contract Cleaning Service Includes:
              </h2>
              <ul className="flex flex-col gap-3">
                {CleaningServices.map((item, index) => (
                  <li key={index} className="flex gap-5 items-center">
                    <FaMagic className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5">
                That means a tidy hallway that is spotlessly clean, carpets and
                landings that have been thoroughly vacuumed, sparkling windows,
                walls and skirting board that have been meticulously cleaned,
                and chrome or silver handles polished to perfection. Outside
                common areas are equally well maintained and cared for.
              </p>
            </div>

            <div className="w-full sm:w-1/2 flex justify-center">
              <div className="w-[50%] h-50 sm:w-80 sm:h-80">
                <img
                  src="/contractcln.jpg"
                  className="w-full h-full rounded-sm bg-cover bg-center"
                  alt="Contract Cleaning"
                />
              </div>
            </div>
          </div>

          <h1 className="text-2xl my-3 text-green-400">
            Estate Management Cleaning
          </h1>
          <p>
            Regardless of whether the building is a small converted block of
            flats or a large mixed tenure housing estate, we are aware that for
            each individual owner, the investment is huge and employing the
            right estate management company is key to protecting that
            investment.
          </p>
          <p className="mt-3">
            Our experience and infrastructure allows us to deliver a block
            management service that is unparalleled by our competitors. We have
            a team of fully trained and qualified surveyors and technicians.
          </p>

          <h1 className="text-2xl my-3 text-green-400">Health & Safety</h1>
          <p>
            At the heart of our business are the Health, Safety and Well-Being
            of our customers and staff. We take health and safety very seriously
            and ensure that we comply with all the current legislation. You can
            learn more about our policies and procedures by clicking{" "}
            <Link href="/" className="text-green-500 underline font-semibold">
              HERE
            </Link>
            .
          </p>

          <div className="mt-10 flex">
            <div className="p-4 text-white font-semibold text-2xl bg-green-500 rounded-xl">
              <p>– Freephone: 0800 0279 273 –</p>
              <p>– Local Rate: 01689 834465 –</p>
            </div>
          </div>
        </div>

        {/* Callback Form (unchanged) */}
        <div className="bg-white p-10 ">
          <h1 className="text-2xl my-3 text-green-400">Request a Callback</h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Name*"
              className="w-full sm:w-1/2 my-2 bg-gray-100 focus:bg-white border-gray-400 border transition rounded-sm px-2 py-3 focus:outline-none"
            />
            <input
              type="Email"
              placeholder="Email*"
              className="w-full sm:w-1/2 my-2 bg-gray-100 focus:bg-white border-gray-400 border transition rounded-sm px-2 py-3 focus:outline-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-3">
            <input
              type="phone"
              placeholder="Telephone*"
              className="w-full my-2 bg-gray-100 focus:bg-white border-gray-400 border transition rounded-sm px-2 py-3 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Address / Postcode"
              className="w-full my-2 bg-gray-100 focus:bg-white border-gray-300 border transition rounded-sm px-2 py-3 focus:outline-none"
            />
          </div>
          <textarea
            name="Message"
            placeholder="Message"
            className="w-full border rounded-sm focus:bg-white transition h-40 mb-5 px-2 py-2 border-gray-400 mt-5 bg-gray-100 focus:outline-none"
          ></textarea>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>
                I agree to the{" "}
                <Link className="font-semibold hover:underline" href="/">
                  Privacy Policy
                </Link>{" "}
                *
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <Link href="/">
                <button className="px-10 rounded-sm py-2 text-xl text-white font-semibold bg-green-400 cursor-pointer hover:bg-green-300 transition">
                  Send
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractCleaning;
