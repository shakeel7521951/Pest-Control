"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const pets = [
  { id: 1, name: "Rodents", image: "/Navbar/mouse.png", bgColor: "bg-[#FFD166]", link: "/hoverbird/rodent" },
  { id: 2, name: "Cockroaches", image: "/Navbar/cockroaches.jpg", bgColor: "bg-[#7209B7]", link: "/hoverbird/cockraches" },
  { id: 3, name: "Fleas", image: "/Navbar/fleas.jpg", bgColor: "bg-[#EF476F]", link: "/hoverbird/fleas" },
  { id: 4, name: "Bed Bugs", image: "/Navbar/bedbugs.png", bgColor: "bg-[#06D6A0]", link: "/hoverbird/bedbugs" },
  { id: 5, name: "Wasps", image: "/Navbar/wasps.jpg", bgColor: "bg-[#F4A261]", link: "/hoverbird/wasps" },
  { id: 6, name: "Pigeons", image: "/Navbar/pigeons2.webp", bgColor: "bg-[#FF006E]", link: "/hoverbird/pigeon" },
  { id: 7, name: "Honey Bee", image: "/Navbar/honeybee.jpg", bgColor: "bg-[#3A86FF]", link: "/hoverbird/honeybee" },
  { id: 8, name: "Moths", image: "/Navbar/moths.jpg", bgColor: "bg-[#8338EC]", link: "/hoverbird/moth" },
  { id: 9, name: "Foxes", image: "/Navbar/fox2.avif", bgColor: "bg-[#118AB2]", link: "/hoverbird/fox" }
];

const PickAPet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth >= 1024) return 5;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % pets.length);
      }, 2500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovering]);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % pets.length);
      }, 2500);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pets.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + pets.length) % pets.length);
    resetInterval();
  };

  const getVisiblePets = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % pets.length;
      visible.push(pets[index]);
    }
    return visible;
  };

  return (
    <section
      className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/home/wasps.jpg')" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Pick Your <span className="text-[#7BAE4B]">Perfect Pet</span>
          </h2>
          <p className="text-lg mt-4 text-white">
            Discover the ideal companion for your lifestyle from our wide selection of pets.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#7BAE4B] hover:bg-[#5f9436] text-white p-3 rounded-full z-20"
              >
                ◀
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#7BAE4B] hover:bg-[#5f9436] text-white p-3 rounded-full z-20"
              >
                ▶
              </button>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
            {getVisiblePets().map((pet) => (
              <Link href={pet.link} key={pet.id} className="group text-center">
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white mb-4 transform transition group-hover:scale-110">
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white text-lg font-semibold group-hover:text-[#7BAE4B] transition">
                    {pet.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickAPet;
