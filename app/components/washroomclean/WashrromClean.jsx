import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const LinerBenefits = [
  "Significantly reduced carbon footprint through multi-bin service trips.",
  "Improved appearance with onsite cleaning, not bin-swapping.",
  "Minimal manual handling risks and less manpower required.",
];

const WashroomClean = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HERO SECTION */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-green-600">Premium Washroom Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            ARK provides innovative, eco-conscious hygiene services tailored to your business. From product placement to maintenance, we ensure total washroom care.
          </p>
        </section>

        {/* SECTION: ABOUT */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">Why Choose ARK?</h2>
            <p>
              We provide tailored solutions with cost-effective systems that improve hygiene without increasing costs. Our experienced teams ensure top-tier cleanliness with a personal touch.
            </p>
            <p>
              Regular staff training and performance incentives help us deliver consistently excellent service.
            </p>
          </div>
          <div>
            <img src="/washrmcln.jpg" alt="Washroom" className="rounded-xl shadow-xl w-full h-80 object-cover" />
          </div>
        </section>

        {/* SECTION: BENEFITS */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4">The ARK Liner Service Advantage</h2>
          <ul className="space-y-4">
            {LinerBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION: SERVICE HIGHLIGHTS */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-green-50 p-6 rounded-lg space-y-4">
            <h2 className="text-xl font-semibold text-green-700">One Call Does it All</h2>
            <p>We streamline your experience with a single point of contact for everything: billing, support, and service scheduling. It’s fast, efficient, and stress-free.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg space-y-4">
            <h2 className="text-xl font-semibold text-green-700">24 Hour Guarantee</h2>
            <p>Need urgent hygiene help? ARK guarantees on-site response within 24 hours for emergencies—ensuring your facilities are always clean and safe.</p>
          </div>
        </section>

        {/* SECTION: HEALTH & SAFETY */}
        <section>
          <h2 className="text-2xl font-bold text-green-600 mb-3">Health & Safety</h2>
          <p className="text-gray-700">
            The health, safety, and well-being of our clients and staff are our top priorities. All services strictly comply with current legislation. Learn more about our detailed policies by contacting us.
          </p>
        </section>

   

       
      </div>
    </div>
  );
};

export default WashroomClean;
