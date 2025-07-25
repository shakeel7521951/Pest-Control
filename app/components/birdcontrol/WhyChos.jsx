import React from "react";
import { VscActivateBreakpoints } from "react-icons/vsc";

const whychosArr = [
  "1 Hour Response",
  "  Fully Accredited",
  " Trained Technicians",
  "  Unrivaled Service",
  "  DBS Checked",
  " 24hr Callouts",
];

const WhyChos = () => {
  return (
    <div className=" mb-5">
        <h1 className="text-center text-3xl font-semibold text-green-500">Why Choose Ark?</h1>
          <div className="p-10 grid gap-5 grid-cols-1 mg:grid-cols-2  lg:grid-cols-3 ">
      {whychosArr.map((item,index) => (
        <div key={index} className="flex text-white bg-green-400 shadow-xl flex-col items-center gap-2 px-3 py-5  ">
          <div><VscActivateBreakpoints className="text-2xl" /></div>
          <p className="text-xl font-semibold">{item}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default WhyChos;
