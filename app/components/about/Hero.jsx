import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with opacity via overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('https://media.istockphoto.com/id/2149058679/photo/woman-dog-and-paw-high-five-in-home-or-learning-trick-on-sofa-for-animal-behaviour-obedience.jpg?s=612x612&w=0&k=20&c=YmbeVlECwFAD5Pvcd0hx1BkZ8VnvEvZmVBzVk9sRYtc=')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="w-full lg:w-3/4 xl:w-2/3">
            <div className="relative">
              {/* Main Section */}
              <div className="p-4 sm:p-8 md:p-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center">
                  Our <span className="text-[#7BAE4B]">Passion for</span> Avian Welfare
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 leading-relaxed text-center">
                  Founded in 2010, Feathered Friends Care is dedicated to improving the lives of birds 
                  through proper care, nutrition, and habitat preservation. Our team of experts works 
                  tirelessly to ensure every bird gets the love and attention they deserve.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <button className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-[#7BAE4B] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                    Learn More
                  </button>
                  <button className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-3 bg-white text-[#7BAE4B] font-medium rounded-full border-2 border-[#7BAE4B] shadow-md hover:bg-green-50 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;