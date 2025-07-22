export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
                GET IN TOUCH
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                Contact Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Avian Experts</span>
              </h1>
              <p className="text-lg text-gray-600  max-w-2xl">
                Have questions about bird care, nutrition, or safety? Our team of specialists is here to help you 
                provide the best care for your feathered friends.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Emergency Contact gggggg
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>
              </button>
              
              <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl border-2 border-green-600 shadow-sm hover:bg-green-50 hover:shadow-md transition-all duration-300 flex items-center gap-2">
                General Inquiry
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative group h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
              <img 
                src="YOUR_NEW_IMAGE_URL_HERE" 
                alt="Background image"
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full filter blur-xl opacity-40 z-0 hidden lg:block"></div>
          </div>
        </div>
      </section>
    </div>
  );
}