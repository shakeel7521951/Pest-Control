import React from "react";
import Link from "next/link";
import { FaMagic } from "react-icons/fa";

const BirdServices = [
  "Netting with stainless steel fixings",
  "Bird spikes",
  "Bird Wire system",
  "Bird Fire Gel",
  "Avishock Electric Deterrent (Ideal for Listed Buildings)",
  "Trapping Program",
  "Hawking",
  "Audio Deterrent",
];

const Bird = () => {
  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="bg-white p-10 ">
          <h1 className="text-2xl my-3 text-green-400">
            Fully Accredited, Fully Trained.
          </h1>
          <p>
            With our bird proofing solutions you can be assured you’ll never get
            in a flap over bird problems and you have taken the most effective
            steps towards preventing birds from inhabiting and damaging your
            building. Bird control offers a long-term solution and when
            installed correctly, is 100% effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-10 py-10 w-full items-center ">
            <div className="sm:w-1/2">
              <h2 className="text-2xl my-3 text-green-400 whitespace-nowrap">
                Our Bird Control Service Includes:{" "}
              </h2>
              <p>
                <ul className="flex flex-col gap-3">
                  {BirdServices.map((item,index) => (
                    <li key={index} className="flex gap-5 items-center">
                      <FaMagic className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </p>
              <p className="mt-5">
                If you are suffering with bird control problems we offer a free
                survey and will provide advice and recommendations to help you
                deter these nuisance birds. Our bird control experts are here to
                help you tackle these nuisance bird with bird proofing
                solutions, bird deterrents and also provide a guano removal
                service.
              </p>
            </div>
            <div className=" w-full sm:w-1/2 flex justify-center">
              <div className="w-[50%]  h-50  sm:w-80 sm:h-80">
                <img
                  src="/Navbar/pigeons.png"
                  className="w-full h-full bg-cover bg-center"
                  alt=""
                />
              </div>
            </div>
          </div>
          <h1 className="text-2xl my-3 text-green-400">Fast Response.</h1>
          <p>
            We offer a fast response service and will arrange a visit within 2
            hours of your enquiry. There is no call out charge and all completed
            work is guaranteed.
          </p>
          <h1 className="text-2xl my-3 text-green-400">Health & Safety.</h1>
          <p>
            At the heart of our business are the Health, Safety and Well-Being
            of our customers and staff. We take health and safety very seriously
            and ensure that we comply with all the current legislation. You can
            learn more about our policies and procedures by clicking
          </p>
         
        </div>

        {/* Don't map this Data just above */}
       
      </div>
    </div>
  );
};

export default Bird;
