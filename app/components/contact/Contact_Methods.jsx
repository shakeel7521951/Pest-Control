import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCommentDots, FaArrowRight, FaClock } from 'react-icons/fa';

const Contact_Methods = () => {
  return (
    <section className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 sm:p-10 lg:p-12 mb-20 shadow-xl max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full filter blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-10 -z-10"></div>
      
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
          CONNECT WITH US
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Reach Us</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Multiple convenient ways to get in touch with our avian specialists
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Phone Support */}
        <div className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100">
          <div className="absolute top-6 right-6 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
            <FaPhone className="text-2xl" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Phone Support</h3>
          <a 
            href="tel:+18005551234" 
            className="text-lg text-green-600 hover:text-green-800 font-medium block mb-3 transition-colors flex items-center gap-2"
            aria-label="Call us at 1-800-555-1234"
          >
            +1 (800) 555-1234 <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaClock className="text-green-400" />
            Mon-Fri: 8am-6pm EST
          </p>
        </div>

        {/* Email */}
        <div className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100">
          <div className="absolute top-6 right-6 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
            <FaEnvelope className="text-2xl" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
          <a 
            href="mailto:support@aviancarehub.com" 
            className="text-lg text-green-600 hover:text-green-800 font-medium block mb-3 transition-colors break-words flex items-center gap-2"
            aria-label="Email us at support@aviancarehub.com"
          >
            support@aviancarehub.com <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <p className="text-sm text-gray-500">
            Typically respond within 24 hours
          </p>
        </div>

        {/* Visit */}
        <div className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100">
          <div className="absolute top-6 right-6 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
            <FaMapMarkerAlt className="text-2xl" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Visit Us</h3>
          <address className="text-lg text-gray-700 font-medium not-italic mb-3">
            123 Bird Lane<br />
            Avian City, AC 12345
          </address>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaClock className="text-green-400" />
            By appointment only
          </p>
        </div>

        {/* Live Chat */}
        <div className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100">
          <div className="absolute top-6 right-6 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
            <FaCommentDots className="text-2xl" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Live Chat</h3>
          <button className="text-lg text-green-600 hover:text-green-800 font-medium mb-3 transition-colors flex items-center gap-2">
            Start Chat Now <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaClock className="text-green-400" />
            Mon-Fri: 9am-5pm EST
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact_Methods;