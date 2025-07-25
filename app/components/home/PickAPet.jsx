"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const PickAPet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const pets = [
    {
      id: 1,
      name: "Ants",
      image: "/home/ants.jpg",
      bgColor: "bg-[#FFD166]",
    },
    {
      id: 2,
      name: "Bedbug",
      image: "/home/bedbug.png",
      bgColor: "bg-[#06D6A0]",
    },
    {
      id: 3,
      name: "Fox",
      image: "/home/fox.jpg",
      bgColor: "bg-[#118AB2]",
    },
    {
      id: 4,
      name: "Flies",
      image: "/home/flies.jpg",
      bgColor: "bg-[#073B4C]",
    },
    {
      id: 5,
      name: "Flea",
      image: "/home/flea.jpg",
      bgColor: "bg-[#EF476F]",
    },
    {
      id: 6,
      name: "Cockroach",
      image: "/home/cockroach.jpg",
      bgColor: "bg-[#7209B7]",
    },
    {
      id: 7,
      name: "HoneyBee",
      image: "/home/honey-bee-1.jpg",
      bgColor: "bg-[#3A86FF]",
    },
    {
      id: 8,
      name: "Rat",
      image: "/home/rodent1.png",
      bgColor: "bg-[#8338EC]",
    },
    {
      id: 9,
      name: "Pigeon",
      image: "/home/pigeon11.png",
      bgColor: "bg-[#FF006E]",
    },
    {
      id: 10,
      name: "Squirrel",
      image: "/home/squirrel.jpg",
      bgColor: "bg-[#FB5607]",
    },
  ];

  // Determine how many pets to show based on screen size
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth >= 1024) return 5; // lg screens
    if (window.innerWidth >= 768) return 3;  // md screens
    if (window.innerWidth >= 640) return 2;  // sm screens
    return 1;                                // xs screens
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isHovering) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % pets.length);
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, pets.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % pets.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + pets.length) % pets.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % pets.length);
      }, 2000);
    }
  };

  // Calculate visible pets with loop-around
  const getVisiblePets = () => {
    const visiblePets = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % pets.length;
      visiblePets.push(pets[index]);
    }
    return visiblePets;
  };

  return (
    <section
      className="relative py-25 px-4 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/home/wasps.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-[4px]"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pick Your <span className="text-[#7BAE4B]">Perfect Pet</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Discover the ideal companion for your lifestyle from our wide
            selection of pets.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={carouselRef}
        >
          {/* Navigation Buttons */}
          {isHovering && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-5 max-md:left-0 top-2/5 transform -translate-y-1/2 z-20 bg-[#7BAE4B] cursor-pointer p-3 rounded-full hover:bg-[#7bae4bc3] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-5 max-md:right-0 top-2/5 transform -translate-y-1/2 z-20 bg-[#7BAE4B] cursor-pointer p-3 rounded-full hover:bg-[#7bae4bc3] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Pet Carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  md:gap-6  md:mx-12">
            {getVisiblePets().map((pet) => (
              <div
                key={`${pet.id}-${currentIndex}`} // Ensure unique key during animation
                className="flex flex-col items-center transition-transform duration-500 ease-in-out group"
              >
                <div className="relative overflow-hidden border-2 w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg mb-4 transition-transform group-hover:scale-110">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    layout="fill"
                    objectFit="cover"
                    className="drop-shadow-2xl"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white transition-colors cursor-pointer group-hover:text-[#7BAE4B]">
                  {pet.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickAPet;