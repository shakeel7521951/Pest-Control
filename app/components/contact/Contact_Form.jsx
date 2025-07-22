import React from 'react'

const Contact_Form = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 mb-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
                  alt="Bird care"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-3xl font-semibold text-green-700 mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="bird-type" className="block text-gray-700 mb-2">Bird Type (Optional)</label>
                    <select 
                      id="bird-type" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select bird type</option>
                      <option value="parrot">Parrot</option>
                      <option value="canary">Canary</option>
                      <option value="finch">Finch</option>
                      <option value="cockatiel">Cockatiel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Tell us about your bird care questions..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </section>
  )
}

export default Contact_Form;
