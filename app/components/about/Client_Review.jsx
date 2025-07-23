'use client'

import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';

const Client_Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const trackRef = useRef(null);
  const autoSlideInterval = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      quote: "The service was exceptional from start to finish. The team went above and beyond to deliver exactly what we needed.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateSoft",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      quote: "We've seen a 40% increase in productivity since implementing their solution. The onboarding process was seamless.",
      rating: 4.5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CEO, DesignHub",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      quote: "Their attention to detail and customer support is unmatched. We've partnered with them for all our digital needs.",
      rating: 4
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Operations Manager, GlobalLogix",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      quote: "The ROI was evident within the first quarter. Their platform has become indispensable to our operations.",
      rating: 5
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      setVisibleCards(newVisibleCards);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    startAutoSlide();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(autoSlideInterval.current);
    };
  }, []);

  useEffect(() => {
    updateCarousel();
  }, [currentIndex, visibleCards]);

  const updateCarousel = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]?.offsetWidth || 0;
      const gap = 16; // px-4 gap
      const offset = -currentIndex * (cardWidth + gap);
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % (testimonials.length - visibleCards + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + (testimonials.length - visibleCards + 1)) % (testimonials.length - visibleCards + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(nextSlide, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    startAutoSlide();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold bg-[#7BAE4B] text-white rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-[#7BAE4B]">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-[#7BAE4B] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              resetAutoSlide();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-white hover:bg-gradient-to-r from-green-500 to-[#7BAE4B] transition-all duration-300 group"
          >
            <FaChevronLeft className="text-xl group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => {
              nextSlide();
              resetAutoSlide();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-white hover:bg-gradient-to-r from-green-500 to-[#7BAE4B] transition-all duration-300 group"
          >
            <FaChevronRight className="text-xl group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel Container */}
          <div
            className="overflow-hidden relative"
            onMouseEnter={() => clearInterval(autoSlideInterval.current)}
            onMouseLeave={startAutoSlide}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-out"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-md h-full border border-gray-100 hover:border-blue-100 transition-all duration-500 hover:shadow-xl group">
                    <div className="relative">
                      <FaQuoteLeft className="text-blue-100 text-4xl absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-center mb-4">
                        <div className="flex space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 relative z-10">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-green-300 group-hover:border-green-400 transition-colors duration-300"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.slice(0, testimonials.length - visibleCards + 1).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gradient-to-r from-green-500 to-green-600 w-8' : 'bg-green-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client_Review;