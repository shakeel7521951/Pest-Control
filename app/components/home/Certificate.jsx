"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

const Certificate = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 1,
            title: "ISO 9001 Certification",
            image: "/home/certificate (1).jpg",
            description: "Quality management system certification demonstrating our commitment to consistent quality."
        },
        {
            id: 2,
            title: "ISO 9001 Certification",
            image: "/home/certificate (1).png",
            description: "Quality management system certification demonstrating our commitment to consistent quality."
        },
        {
            id: 3,
            title: "Environmental Safety",
            image: "/home/certificate (2).jpg",
            description: "Certification for environmentally safe pest control practices."
        },
        {
            id: 4,
            title: "Environmental Safety",
            image: "/home/certificate (2).png",
            description: "Certification for environmentally safe pest control practices."
        },
        {
            id: 5,
            title: "Pest Control Excellence",
            image: "/home/certificate (3).jpg",
            description: "Award for excellence in pest control services for 5 consecutive years."
        },
        {
            id: 6,
            title: "Pest Control Excellence",
            image: "/home/certificate (3).png",
            description: "Award for excellence in pest control services for 5 consecutive years."
        },
        {
            id: 7,
            title: "Employee Safety Training",
            image: "/home/certificate (4).jpg",
            description: "Certification showing all our technicians complete rigorous safety training."
        },
        {
            id: 8,
            title: "Organic Certification",
            image: "/home/certificate (5).jpg",
            description: "Certification for our organic pest control solutions."
        },
        {
            id: 9,
            title: "Organic Certification",
            image: "/home/certificate (6).jpg",
            description: "Certification for our organic pest control solutions."
        }
    ];

    const openModal = (cert) => {
        setSelectedCert(cert);
        setIsOpen(true);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our <span className="text-[#7BAE4B]">Certifications</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Recognized certifications that demonstrate our commitment to quality and safety standards.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 max-w-7xl mx-auto md:px-3">
                    {certificates.map((cert) => (
                        <Link href=""><div
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
                        </Link>
                    ))}
                </div>

                {/* Modal */}
                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-50"
                >
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-black/75" aria-hidden="true" />

                    {/* Full-screen container */}
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
                                            <Dialog.Description className="text-gray-600 mb-6">
                                                {selectedCert.description}
                                            </Dialog.Description>
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