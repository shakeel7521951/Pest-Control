import React from 'react';
import Link from 'next/link'; // or 'react-router-dom' if using React Router
import { FaWpforms } from "react-icons/fa6";
const EnquiryForm = () => {
  return (
    <div className="bg-white  p-5 sm:p-20 py-5">
      {/* ✅ Second Div starts here */}
       <div className="border mb-5 border-green-500 w-full">
                  <div
                    className="flex justify-between items-center gap-5 text-white px-3 py-2 bg-green-600 cursor-pointer"
                  
                  >
                    <div className="flex items-center gap-2">
                      <FaWpforms className="text-3xl" />
                      <p className="text-lg md:text-xs lg:text-lg font-semibold">
                        Enquiry Form
                      </p>
                    </div>
              
                  </div>
                  </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Name*"
          className="w-full sm:w-1/2 my-2 bg-gray-100 focus:bg-white border-gray-400 border transition rounded-sm px-2 py-3 focus:outline-none"
        />
        <input
          type="email" // ✅ FIXED: lowercase "email"
          placeholder="Email*"
          className="w-full sm:w-1/2 my-2 bg-gray-100 focus:bg-white border-gray-400 border transition rounded-sm px-2 py-3 focus:outline-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-3">
        <input
          type="tel" // ✅ FIXED: correct type
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
        <div className="flex justify-center items-center gap-2 ">
          <input type="checkbox" />
          <p className="text-sm">
            I agree to the{" "}
            <Link className="font-semibold hover:underline" href="/">
              Privacy Policy
            </Link>{" "}
            *
          </p>
        </div>
        <div className=" mt-5 sm:mt-0">
          <Link href="/">
            <button className="px-10 w-full sm:w-auto rounded-sm py-2 text-xl text-white font-semibold bg-green-400 cursor-pointer hover:bg-green-300 transition">
              Send
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
