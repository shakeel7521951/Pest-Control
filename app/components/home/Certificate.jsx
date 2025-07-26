"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const Certificate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "ISO 9001 Certification",
      image: "/home/certificate (1).jpg",
      description: "Quality management system certification demonstrating our commitment to consistent quality.",
      para: "Our ISO 9001 certification represents a milestone in our commitment to excellence. This globally recognized standard confirms that we follow a well-structured, effective quality management system across all our operations. From customer service to fieldwork, every process is optimized for performance and accountability. ISO 9001 ensures we consistently meet customer expectations and comply with regulatory requirements. The certification highlights our dedication to continual improvement and operational efficiency. Our staff undergo regular training to uphold these standards. Clients can rely on us for systematic, repeatable, and quality-assured pest control services every time."
    },
    {
      id: 2,
      title: "ISO 9001 Certification",
      image: "/home/certificate (1).png",
      description: "Quality management system certification demonstrating our commitment to consistent quality.",
      para: "Achieving ISO 9001 certification is a testament to our unwavering focus on quality. It verifies that our management systems are aligned with international benchmarks for excellence. With this certification, clients can trust that we are committed to transparent operations, quality service delivery, and continuous enhancement of our internal processes. ISO 9001 helps us identify risks, improve customer satisfaction, and increase productivity. Every action we take is guided by a quality-first mindset. We treat this certification not as a badge, but as a responsibility we take seriously every day."
    },
    {
      id: 3,
      title: "Environmental Safety",
      image: "/home/certificate (2).jpg",
      description: "Certification for environmentally safe pest control practices.",
      para: "This Environmental Safety certification reflects our green approach to pest control. We prioritize eco-friendly solutions that minimize harm to the environment while effectively controlling pests. Our products are biodegradable, non-toxic to humans and pets, and meet strict environmental standards. We follow integrated pest management (IPM) strategies to reduce chemical use. Our technicians are trained in environmentally responsible procedures, ensuring your home stays safe and your surroundings remain untouched. Protecting nature is part of our mission, and this certification proves we go beyond industry expectations."
    },
    {
      id: 4,
      title: "Environmental Safety",
      image: "/home/certificate (2).png",
      description: "Certification for environmentally safe pest control practices.",
      para: "We understand the importance of preserving the ecosystem while managing pests effectively. This Environmental Safety certificate showcases our dedication to sustainable pest control. We carefully select products and methods that pose minimal risk to soil, water, and air quality. Wildlife and beneficial insects are protected under our green policy. Our team stays up to date on the latest innovations in safe pest control. By choosing us, you're partnering with a company that cares deeply about environmental stewardship and future generations."
    },
    {
      id: 5,
      title: "Pest Control Excellence",
      image: "/home/certificate (3).jpg",
      description: "Award for excellence in pest control services for 5 consecutive years.",
      para: "Earning this Pest Control Excellence award for five years in a row reflects our relentless pursuit of perfection. We’ve built a reputation for dependability, safety, and innovation. This award recognizes our high customer satisfaction scores, consistent service delivery, and ability to solve complex infestations. Our team stays on the cutting edge of pest science, bringing new solutions to traditional problems. We’re proud to be a trusted partner for homes and businesses across the region. Excellence isn’t just a goal—it’s our standard."
    },
    {
      id: 6,
      title: "Pest Control Excellence",
      image: "/home/certificate (3).png",
      description: "Award for excellence in pest control services for 5 consecutive years.",
      para: "Winning the Pest Control Excellence award repeatedly places us in the top tier of the industry. It’s not just about removing pests; it’s about creating safe, long-term solutions for our clients. This accolade honors our efforts to improve technology, customer education, and field training. Each service call is backed by a history of proven results and a team committed to your peace of mind. Whether for residential or commercial spaces, we deliver excellence, year after year."
    },
    {
      id: 7,
      title: "Employee Safety Training",
      image: "/home/certificate (4).jpg",
      description: "Certification showing all our technicians complete rigorous safety training.",
      para: "The Employee Safety Training certification confirms that our entire staff undergoes intensive health and safety instruction. We equip every technician with up-to-date knowledge on safe chemical handling, equipment usage, and personal protective measures. Our safety culture ensures both our employees and your family are protected during every visit. We follow OSHA standards and conduct frequent refresher courses. When you choose us, you're hiring a team that values safety as much as efficiency."
    },
    {
      id: 8,
      title: "Organic Certification",
      image: "/home/certificate (5).jpg",
      description: "Certification for our organic pest control solutions.",
      para: "This Organic Certification ensures that we provide pest control options that are safe, effective, and fully compliant with organic standards. We cater especially to households with children, pets, or sensitive occupants who prefer chemical-free alternatives. Our solutions are derived from natural ingredients and cause no harm to indoor air quality or soil health. We take pride in being pioneers in organic pest control, giving our customers peace of mind without compromising results."
    },
    {
      id: 9,
      title: "Organic Certification",
      image: "/home/certificate (6).jpg",
      description: "Certification for our organic pest control solutions.",
      para: "Certified organic pest control isn’t just a trend—it’s our commitment to healthier homes and ecosystems. This certification confirms that our products and practices meet stringent organic standards. We carefully source eco-friendly ingredients, avoid synthetic chemicals, and prioritize natural repellents. Our organic treatments are suitable for sensitive environments like schools, hospitals, and organic farms. When you choose our service, you’re choosing nature-backed protection that doesn’t compromise effectiveness."
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#7BAE4B]">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized certifications that demonstrate our commitment to quality and safety standards.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 max-w-7xl mx-auto md:px-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="cursor-pointer group"
              onClick={() => openModal(cert)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 group-hover:bg-[#302f2f1b] transition-all duration-300" />
              </div>
              <h3 className="mt-3 text-center font-medium text-gray-800 group-hover:text-[#7BAE4B] transition-colors">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full h-full max-w-6xl">
              {selectedCert && (
                <div className="relative h-full w-full bg-white rounded-lg overflow-hidden">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="flex flex-col md:flex-row h-full">
                    <div className="relative w-full md:w-2/4 h-1/3 md:h-1/4 m-auto">
                      <Image
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center bg-gray-50">
                      <Dialog.Title className="text-2xl font-bold text-gray-800 mb-4">
                        {selectedCert.title}
                      </Dialog.Title>
                      <Dialog.Description className="text-gray-600 mb-4">
                        {selectedCert.description}
                      </Dialog.Description>
                      <p className="text-gray-600 mb-6">
                        {selectedCert.para}
                      </p>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="mt-auto px-6 py-3 bg-[#7BAE4B] hover:bg-[#679640] text-white font-medium rounded-lg transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default Certificate;
