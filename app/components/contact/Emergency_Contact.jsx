import React from 'react'

const Emergency_Contact = () => {
  return (
     <section className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold text-green-800 mb-4">Contact Our Avian Experts</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Have questions about bird care, nutrition, or safety? Our team of specialists is here to help you 
                  provide the best care for your feathered friends.
                </p>
                <div className="flex gap-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300">
                    Emergency Contact
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
                  alt="Colorful parrots"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </section>
  )
}

export default Emergency_Contact;
