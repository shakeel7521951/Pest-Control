import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-12 max-w-7xl">
         {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our <span className="text-green-600">Passion</span> for Avian Welfare
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Founded in 2010, Feathered Friends Care is dedicated to improving the lives of birds 
                  through proper care, nutrition, and habitat preservation. Our team of experts works 
                  tirelessly to ensure every bird gets the love and attention they deserve.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                    Learn More
                  </button>
                  <button className="px-8 py-3 bg-white text-green-600 font-medium rounded-full border-2 border-green-500 shadow-md hover:bg-green-50 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-4 border-green-300 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
                alt="Colorful parrots"
                className="relative z-10 w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-100 px-4 py-2 rounded-lg shadow-md z-20">
                <span className="font-semibold text-yellow-800">Since 2010</span>
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
  )
}

export default Hero;