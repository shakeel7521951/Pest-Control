import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('https://media.istockphoto.com/id/1995860236/photo/happy-dog-with-owner-at-vets-office.jpg?s=612x612&w=0&k=20&c=8ldaUlB-T3aXTcTAhWI27hF_kqSeHkjj-9LvsjCn3B4=')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div className="w-full lg:w-2/3">
            <div className="relative">
              {/* Blurred Decorative Circle */}
              <div className="absolute inset-0 -z-10">
                <div className="w-48 h-48 mx-auto bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
              </div>

              {/* Text Content */}
              <div className="px-4 sm:px-6 md:px-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Professional
                  <span className="text-[#7BAE4B]"> Bird Care </span>
                  Services
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Comprehensive care solutions for your feathered friends. From nutrition to habitat design, 
                  our certified avian specialists provide expert care for all bird species.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-[#7BAE4B] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                    Book a Consultation
                  </button>
                  <button className="px-6 py-3 bg-white text-[#7BAE4B] font-medium rounded-full border-2 border-[#7BAE4B] shadow-md hover:bg-green-50 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="hidden lg:block">
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
