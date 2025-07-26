import React from 'react';
import Link from 'next/link'
const Testimonials = () => {
  return (
    <section className="bg-green-100 text-black rounded-t-xl px-4 sm:px-6 lg:px-12 py-10 sm:py-12 relative -top-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center">
          What <span className="text-[#7BAE4B]">Bird Owners</span> Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Testimonial Card */}
          {[
            {
              name: 'Sarah M.',
              role: 'Cockatoo Owner',
              text: `The nutrition consultation completely transformed my bird's health. After following their dietary recommendations, his feathers have never looked better!`,
              img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&q=80',
            },
            {
              name: 'Raj P.',
              role: 'Parrotlet Owner',
              text: `The safety audit identified several hazards in my home I never would have noticed. My bird is much safer now thanks to their expertise.`,
              img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80',
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-[#7BAE4B] p-6 sm:p-7 rounded-lg hover:bg-green-500 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-green-100 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="italic text-sm sm:text-base">{`"${t.text}"`}</p>
              <div className="flex mt-4 text-yellow-300 text-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-10">
       <Link href="/about">   <button className="bg-white text-[#7BAE4B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg">
            Read More Testimonials
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
