import React from 'react';

const WindowClean = () => {
  const services = [
    "Reach and Wash Systems",
    "Traditional Methods",
    "Hydraulic Platform Systems",
    "Cradle System (B.M.U)",
    "Abseiling",
    "Facade and Cladding cleaned",
    "High Level Window Cleaning",
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-green-700">Window Cleaning</h1>
          <p className="mb-4">
            Using state of the art equipment both mobile and static teams deliver high quality and verifiable standards of window cleaning services. All the necessary certifications and training certificates are held by our highly skilled and motivated operatives.
          </p>

          <ul className="list-disc list-inside mb-4 space-y-1">
            {services.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="mb-4">
            <strong>Rope Access Windows Cleaning</strong> is a skilled trade that has undergone a massive transformation over time. The installation and upkeep of permanently installed suspended access systems has become an exhaustive expense to Building Owners. We can design and install rope access abseil anchor points and rails at the initial build stage or post-build, significantly reducing costs.
          </p>

          <p className="mb-4">
            At ARK our Rope Access Window Cleaning Services have always been at the core of delivering complete solutions for our customers.
          </p>

          <h2 className="text-xl font-semibold mb-2 text-green-600">Reach and Wash</h2>
          <p className="mb-4">
            The pure water fed pole system eliminates health and safety issues, making it the safest and most cost-effective cleaning method with excellent results.
          </p>

          <p className="mb-4">
            By using 100% pure water pumped through telescopic poles, we can now access and clean windows up to heights of 40 feet. This helps our clients save over 40% on total cleaning costs by eliminating the need for access vehicles.
          </p>

          <h2 className="text-xl font-semibold mb-2 text-green-600">Health & Safety</h2>
          <p className="mb-4">
            At the heart of our business are the Health, Safety and Well-Being of our customers and staff. We comply fully with current legislation. Learn more by clicking HERE.
          </p>

          <div className="mt-6 text-sm text-gray-700">
            <p><strong>Freephone:</strong> 0800 0279 273</p>
            <p><strong>Local Rate:</strong> 01689 834465</p>
          </div>
        </div>

        <div className="w-full h-full">
          <img
            src="/windowcln.jpg"
            alt="Window Cleaning"
            className="rounded-lg shadow-md rounded-xl w-full object-cover max-h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WindowClean;
