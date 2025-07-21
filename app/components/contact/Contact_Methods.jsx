import React from 'react'

const Contact_Methods = () => {
  return (
    <section className="bg-white rounded-xl p-8 mb-16 shadow-md">
          <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">How to Reach Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="flex justify-center text-green-600 mb-4">
                <FaPhone className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-2">+1 (800) 555-1234</p>
              <p className="text-sm text-gray-500">Mon-Fri: 8am-6pm EST</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="flex justify-center text-green-600 mb-4">
                <FaEnvelope className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">support@aviancarehub.com</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="flex justify-center text-green-600 mb-4">
                <FaMapMarkerAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">123 Bird Lane, Avian City</p>
              <p className="text-sm text-gray-500">By appointment only</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="flex justify-center text-green-600 mb-4">
                <FaClock className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-2">Available on website</p>
              <p className="text-sm text-gray-500">Mon-Fri: 9am-5pm EST</p>
            </div>
          </div>
        </section>
  )
}

export default Contact_Methods;
