import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with opacity via overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="w-full lg:w-2/2">
            <div className="relative">
              {/* Main Section */}
              <div className="p-34">
                <h2 className="text-4xl font-bold text-white mb-6 text-center">
                  Our <span className="text-[#7BAE4B]">Passion for</span>  Avian Welfare

                </h2>
                <p className="text-xl text-gray-100 mb-8 leading-relaxed text-center">
                  Founded in 2010, Feathered Friends Care is dedicated to improving the lives of birds 
                  through proper care, nutrition, and habitat preservation. Our team of experts works 
                  tirelessly to ensure every bird gets the love and attention they deserve.
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-center align-center">
                  <button className="px-5 py-3 bg-gradient-to-r from-green-500 to-[#7BAE4B] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                    Learn More
                  </button>
                  <button className="px-5 py-3 bg-white text-[#7BAE4B] font-medium rounded-full border-2 border-[#7BAE4B] shadow-md hover:bg-green-50 transition-all duration-300">
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
