import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with opacity via overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('https://media.istockphoto.com/id/1795133707/photo/pet-owner-stroking-his-old-cat-and-dog-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=QFiBMwWBygtBzxlei6c1U6wlTI2_fC9KoBSqN820uXk=')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh]">
          <div className="w-full lg:w-3/4 xl:w-2/3">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
 
              {/* Main Section */}
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center">
                  Bird Care<span className="text-[#7BAE4B]"> & </span> Conservation
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed text-center">
                  Dedicated to improving the lives of birds through proper care, nutrition, and habitat preservation. Our team of experts ensures every bird receives the love and attention they deserve.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                  <button className="px-4 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-green-500 to-[#7BAE4B] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform text-sm sm:text-base">
                    Learn More
                  </button>
                  <button className="px-4 py-2 sm:px-5 sm:py-3 bg-white text-[#7BAE4B] font-medium rounded-full border-2 border-[#7BAE4B] shadow-md hover:bg-green-50 transition-all duration-300 text-sm sm:text-base">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="hidden lg:block">
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
      </main>
    </div>
  );
};

export default Hero;