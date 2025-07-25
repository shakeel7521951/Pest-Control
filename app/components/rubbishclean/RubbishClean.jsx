import React from "react";
import Link from "next/link";
import { FaMagic } from "react-icons/fa";

const RubbishServices = [
  "House Clearance – Furniture, TVs, fridges, freezers, books, clothes, paper, rubbish & boxes.",
  "Office Clearance – Computers, desks, chairs, electrical goods, packaging, carpets etc.",
  "Garden Clearance – Garden furniture, sheds, wood, cuttings, trimmings, stones, DIY rubble, BBQs.",
];

const RubbishClean = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        <div className="bg-white p-10">
          <h1 className="text-2xl my-3 text-green-400">
            Bulk Waste Rubbish Removal Experts
          </h1>
          <p>
            As Waste Removal experts, we’ve been clearing and removing all types
            of rubbish for managing agents, businesses, and home owners.
          </p>
          <p className="mt-3">
            Our experience and knowledge of the industry means we are ideally
            placed to offer comprehensive and effective removal services from
            any premises.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 py-10 w-full items-center">
            <div className="sm:w-1/2">
              <h2 className="text-2xl my-3 text-green-400 whitespace-nowrap">
                We Provide a Range of Related Services:
              </h2>
              <ul className="flex flex-col gap-3">
                {RubbishServices.map((item, index) => (
                  <li key={index} className="flex gap-5 items-center">
                    <FaMagic className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                Curious about the cost to clear your waste? Get an instant
                estimate from Ark Waste Removal. <br /> *All prices quoted are
                subject to VAT.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center">
              <div className="w-[50%] h-50 sm:w-80 sm:h-80">
                <img
                  src="/rubbishcln.jpg"
                  className="w-full h-full rounded-xl bg-cover bg-center"
                  alt="Rubbish Removal"
                />
              </div>
            </div>
          </div>

          <h1 className="text-2xl my-3 text-green-400">Health & Safety</h1>
          <p>
            At the heart of our business are the Health, Safety and Well-Being
            of our customers and staff. We take health and safety very seriously
            and ensure that we comply with all the current legislation. You can
            learn more about our policies and procedures by clicking HERE.
          </p>

          <div className="mt-15 flex">
            <p className="p-4 text-white font-semibold text-2xl bg-green-500 rounded-xl">
              <p>– Freephone: 0800 0279 273 –</p>
              <p>– Local Rate: 01689 834465 –</p>
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-10">
          <h1 className="text-2xl my-3 text-green-400">Request a Callback</h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Name*"
              className="w-full sm:w-1/2 my-2 bg-gray-100 focus:bg-white border-gray-400 border transition rounded-sm px-2 py-3 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full sm:w-1/2 my-2 bg-gray-100 focus:bg-white border-gray-400 border transition rounded-sm px-2 py-3 focus:outline-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-3">
            <input
              type="tel"
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

export default RubbishClean;
