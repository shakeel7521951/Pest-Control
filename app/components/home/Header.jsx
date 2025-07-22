"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      bgImage: "/home/pet (1).jpg",
      title: "Professional Grooming Services",
      description: "Pamper your pets with our premium grooming treatments",
      cta: "Book Now",
      service: "Grooming",
    },
    {
      id: 2,
      bgImage: "/home/pet (2).jpg",
      title: "Luxury Pet Boarding",
      description: "Safe and comfortable stays for your furry friends",
      cta: "Learn More",
      service: "Boarding",
    },
    {
      id: 3,
      bgImage: "/home/pet (5).jpg",
      title: "Expert Veterinary Care",
      description: "Compassionate healthcare for your beloved pets",
      cta: "Schedule Visit",
      service: "Veterinary",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, isHovered]);

  return (
    <>
      <header
        className="relative h-screen w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.bgImage}
                alt={slide.service}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#00000045]"></div>
            </div>

            {/* Slide Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6 lg:px-30 text-white">
                <div className="max-w-2xl p-8 rounded-lg">
                  <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-white bg-[#7BAE4B] rounded-full">
                    {slide.service}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8">{slide.description}</p>
                  <button className="px-8 py-3 bg-[#1B2A41] hover:bg-[#142031] text-white font-semibold rounded-full transition duration-300 hover:scale-105">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`absolute left-20 top-1/2 -translate-y-1/2 z-10 p-4 bg-[#1B2A41cc] text-white rounded-full transition-opacity duration-300 ${
            isHovered ? "opacity-100 cursor-pointer" : "opacity-0"
          } hover:bg-[#1B2A41]`}
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-20 top-1/2 -translate-y-1/2 z-10 p-4 bg-[#1B2A41cc] text-white rounded-full transition-opacity duration-300 ${
            isHovered ? "opacity-100 cursor-pointer" : "opacity-0"
          } hover:bg-[#1B2A41]`}
          aria-label="Next slide"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-15 left-0 right-0 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-[#7BAE4B]"
                  : "bg-white bg-opacity-50 cursor-pointer"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <FaChevronDown
          size={30}
          className="animate-bounce text-white absolute bottom-1 left-1/2 -translate-x-4"
        />
      </header>
    </>
  );
};

export default Header;
