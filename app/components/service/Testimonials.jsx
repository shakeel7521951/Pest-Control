import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-green-100 text-black rounded-t-xl p-8 md:p-12 relative -top-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">What <span className='text-[#7BAE4B]'> Bird Owners </span> Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Sarah's Testimonial */}
          <div className="bg-[#7BAE4B] p-6 rounded-lg hover:bg-green-500 transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="Sarah"
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-white">Sarah M.</h4>
                <p className="text-green-100 text-sm">Cockatoo Owner</p>
              </div>
            </div>
            <p className="italic">
              "The nutrition consultation completely transformed my bird's health. After following their 
              dietary recommendations, his feathers have never looked better!"
            </p>
            <div className="flex mt-4 text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          {/* Raj's Testimonial */}
          <div className="bg-[#7BAE4B] p-6 rounded-lg hover:bg-green-500 transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="Raj"
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-white">Raj P.</h4>
                <p className="text-green-100 text-sm">Parrotlet Owner</p>
              </div>
            </div>
            <p className="italic">
              "The safety audit identified several hazards in my home I never would have noticed. 
              My bird is much safer now thanks to their expertise."
            </p>
            <div className="flex mt-4 text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-white text-[#7BAE4B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;