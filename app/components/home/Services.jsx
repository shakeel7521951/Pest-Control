"use client";
import { FaBug, FaShieldAlt, FaClock, FaHome, FaLeaf } from "react-icons/fa";
import Link from 'next/link'
const Services = () => {
  const services = [
    {
      icon: <FaBug className="text-3xl text-[#7BAE4B]" />,
      title: "Ant Control",
      description:
        "Effective elimination of all ant species with pet-safe treatments.",
      badge: "Most Popular",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#7BAE4B]" />,
      title: "Bed Bug Extermination",
      description:
        "Complete bed bug removal with heat treatment and follow-up inspections.",
      badge: "Guaranteed",
    },
    {
      icon: <FaClock className="text-3xl text-[#7BAE4B]" />,
      title: "Rodent Removal",
      description:
        "Humane trapping and exclusion techniques to keep rodents out permanently.",
      badge: "24/7 Service",
    },
    {
      icon: <FaHome className="text-3xl text-[#7BAE4B]" />,
      title: "Cockroach Control",
      description:
        "Targeted gel baits and insect growth regulators for long-term prevention.",
      badge: null,
    },
    {
      icon: <FaLeaf className="text-3xl text-[#7BAE4B]" />,
      title: "Eco-Friendly Solutions",
      description: "Green pest control options safe for children and pets.",
      badge: "Eco Choice",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-[#7BAE4B] bg-[#e8f5f0] rounded-full mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4">
            Professional Pest{" "}
            <span className="text-[#7BAE4B]">Control Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Effective treatments tailored to your specific pest problem with
            guaranteed results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Service Card */}
              <div className="p-6 pt-8">
                <div className="flex items-start">
                  <div className="p-3 bg-[#e8f5f0] rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E2A38] mb-2 group-hover:text-[#7BAE4B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge (if exists) */}
              {service.badge && (
                <div className="absolute top-2 right-4 bg-[#7BAE4B] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {service.badge}
                </div>
              )}

              {/* Footer Link */}
              <Link href="/about"> <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-[#7BAE4B] font-semibold flex items-center hover:text-[#679640] transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div></Link>
            </div>
          ))}

          {/* Custom Service Card */}
          <div className="bg-gradient-to-br from-[#7BAE4B] to-[#1E5C47] rounded-xl shadow-lg overflow-hidden text-white">
            <div className="p-6 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4">
                Can't Find Your Pest Problem?
              </h3>
              <p className="mb-6 opacity-90">
                We handle all types of pests including termites, spiders,
                mosquitoes, and more.
              </p>
              <div className="mt-auto">
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-white text-[#7BAE4B] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request Custom Solution
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
