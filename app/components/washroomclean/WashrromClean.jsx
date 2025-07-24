import React from "react";
import Link from "next/link";
import { FaMagic } from "react-icons/fa";

const LinerBenefits = [
  "Carbon footprint is greatly reduced for Liner Service vehicles, as they can service many more bins per trip than traditional bin-for-bin systems.",
  "Cosmetic appeal of the Liner Sanitary bin is better and easier to maintain since it's cleaned on-site instead of swapped.",
  "Risk of manual handling injury is reduced due to fewer operatives and minimal manual handling aids required.",
];

const WashroomClean = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        <div className="bg-white p-10">
          <h1 className="text-2xl my-3 text-green-400">Washroom Services</h1>
          <p>
            <strong>ARK Washroom Solutions</strong><br />
            ARK is a Hygiene Company that provides the full range of washroom
            services required across the South East. Our products and service
            schedules are tailored to meet the individual needs of your business,
            designed to control usage and reduce maintenance.
          </p>
          <p className="mt-3">
            We’re committed to offering innovative products that reduce costs
            without compromising on service quality.
          </p>
          <p className="mt-3">
            Our aim is 100% customer satisfaction—achieved through experienced
            management, regular training, and incentive programs. We motivate our
            staff and use top-quality equipment to ensure cost-effective services.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 py-10 w-full items-center">
            <div className="sm:w-1/2">
              <h2 className="text-2xl my-3 text-green-400 whitespace-nowrap">
                Adding Value to the Account:
              </h2>
              <p>
                One of the key differences between ARK and competitors is our{" "}
                <strong>Liner Service</strong> instead of the traditional
                “bin-for-bin” exchange. Some core benefits include:
              </p>
              <ul className="flex flex-col gap-3 mt-5">
                {LinerBenefits.map((item, index) => (
                  <li key={index} className="flex gap-5 items-start">
                    <FaMagic className="text-green-500 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5">
                <strong>Free Waste Transfer Note:</strong> We're a fully licensed
                waste carrier and offer a season ticket waste transfer note
                completely free. Free consultation and expert support are also
                available to help maintain washrooms within current legislation.
              </p>

              <p className="mt-5">
                <strong>One Call Does it All:</strong> Unlike competitors, all your
                issues—whether invoicing, customer service, or maintenance—are
                handled by one dedicated person. One call, one solution.
              </p>

              <p className="mt-5">
                <strong>24 Hour Service Guarantee:</strong> In emergencies, ARK
                guarantees a response within 24 hours of receiving your call. We
                understand the importance of quick action in public washrooms to
                protect public health.
              </p>
            </div>

            <div className="w-full sm:w-1/2 flex justify-center">
              <div className="w-[50%] h-50 sm:w-80 sm:h-80">
                <img
                  src="/washrmcln.jpg"
                  className="w-full h-full bg-cover rounded-xl bg-center"
                  alt="Washroom Services"
                />
              </div>
            </div>
          </div>

          <h1 className="text-2xl my-3 text-green-400">Health & Safety</h1>
          <p>
            At the heart of our business are the Health, Safety and Well-Being
            of our customers and staff. We take health and safety very seriously
            and ensure that we comply with all current legislation. You can learn
            more about our policies and procedures by clicking HERE.
          </p>

          <div className="mt-10 flex">
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

export default WashroomClean;
