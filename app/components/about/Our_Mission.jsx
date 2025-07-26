import Link from 'next/link'
const Our_Mission = () => {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute -top-20 sm:-top-32 -left-20 sm:-left-32 w-40 sm:w-64 h-40 sm:h-64 bg-green-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 sm:-bottom-32 -right-20 sm:-right-32 w-40 sm:w-64 h-40 sm:h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Image Section with reduced height */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative z-10 group h-[250px] sm:h-[350px] overflow-hidden rounded-xl sm:rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-20 group-hover:opacity-30 transition duration-500 blur-md"></div>
              <img 
                src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
                alt="Bird conservation"
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md z-30 border border-gray-100">
              <span className="font-semibold text-green-600 text-xs sm:text-sm">Protecting Birds</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-[#7BAE4B]">Mission</span>
              </h2>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                To provide comprehensive resources for bird care, promote safe habitats, 
                and educate the public about avian welfare. We believe every bird deserves 
                proper nutrition, medical care, and a safe environment to thrive.
              </p>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "Proper feeding guidelines for all bird species",
                  "Safe housing and habitat recommendations",
                  "Medical care and prevention resources",
                  "Conservation and protection initiatives"
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1 mr-2 sm:mr-3">
                      <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full group-hover:bg-green-500 transition duration-300">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#7BAE4B] group-hover:text-white transition duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm group-hover:text-gray-900 transition duration-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link href="/contact"><button className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-green-500 to-[#7BAE4B] text-white font-medium rounded-full shadow hover:shadow-md transition-all duration-300 hover:scale-[1.02] transform text-xs sm:text-sm">
                  Join Our Cause
                </button></Link>
             <Link href="/contact">   <button className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-[#7BAE4B] font-medium rounded-full border border-[#7BAE4B] shadow-sm hover:bg-green-50 transition-all duration-300 text-xs sm:text-sm">
                  Donate Now
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_Mission;