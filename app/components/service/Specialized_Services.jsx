import React from 'react';
import { 
  FaClipboardCheck, 
  FaBook, 
  FaUserMd, 
  FaHandsHelping 
} from 'react-icons/fa';

const Specialized_Services = () => {
  return (
    <section className="bg-green-100 rounded-xl  mb-20 p-10">
      <h2 className="text-3xl font-semibold text-[#7BAE4B] mb-8 text-center">Specialized Services</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Health Assessments */}
        <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Bird health check"
              className="w-full h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-3">
              <FaClipboardCheck className="text-[#7BAE4B] text-2xl" />
              <h3 className="text-xl font-semibold text-[#7BAE4B]">Health Assessments</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Comprehensive physical exams, blood work analysis, and diagnostic testing to monitor your bird's health 
              and catch potential issues early.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Annual wellness exams</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Pre-purchase examinations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Geriatric care programs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Behavioral Training */}
        <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Bird training"
              className="w-full h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-3">
              <FaBook className="text-[#7BAE4B] text-2xl" />
              <h3 className="text-xl font-semibold text-[#7BAE4B]">Behavioral Training</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Positive reinforcement training to address behavioral issues, improve socialization, 
              and strengthen the bond between you and your bird.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Step-up training</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Biting prevention</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Vocalization management</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Services */}
        <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Bird boarding"
              className="w-full h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-3">
              <FaUserMd className="text-[#7BAE4B] text-2xl" />
              <h3 className="text-xl font-semibold text-[#7BAE4B]">Medical Services</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Specialized avian veterinary care including diagnostics, treatment plans, 
              and surgical procedures performed by certified avian veterinarians.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Diagnostic imaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Microchipping</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Specialized surgeries</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Boarding & Grooming */}
        <div className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
              alt="Bird boarding"
              className="w-full h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-3">
              <FaHandsHelping className="text-[#7BAE4B] text-2xl" />
              <h3 className="text-xl font-semibold text-[#7BAE4B]">Boarding & Grooming</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Safe, comfortable boarding facilities with avian-specialized staff and professional 
              grooming services to keep your bird looking and feeling their best.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Short-term boarding</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Wing clipping</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7BAE4B] mr-2">•</span>
                <span>Medicated bathing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Specialized_Services;
