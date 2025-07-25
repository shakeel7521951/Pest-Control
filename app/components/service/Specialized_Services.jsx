import React from 'react';
import { 
  FaClipboardCheck, 
  FaBook, 
  FaUserMd, 
  FaHandsHelping 
} from 'react-icons/fa';

const Specialized_Services = () => {
  return (
    <section className="bg-green-100 rounded-xl mb-20 px-4 sm:px-6 lg:px-16 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#7BAE4B] mb-10 text-center">
        Specialized Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Health Assessments',
            icon: <FaClipboardCheck className="text-[#7BAE4B] text-2xl" />,
            image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=400&q=80',
            description:
              "Comprehensive physical exams, blood work analysis, and diagnostic testing to monitor your bird's health and catch potential issues early.",
            bullets: [
              'Annual wellness exams',
              'Pre-purchase examinations',
              'Geriatric care programs',
            ],
          },
          {
            title: 'Behavioral Training',
            icon: <FaBook className="text-[#7BAE4B] text-2xl" />,
            image: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?auto=format&fit=crop&w=400&q=80',
            description:
              "Positive reinforcement training to address behavioral issues, improve socialization, and strengthen the bond between you and your bird.",
            bullets: [
              'Step-up training',
              'Biting prevention',
              'Vocalization management',
            ],
          },
          {
            title: 'Medical Services',
            icon: <FaUserMd className="text-[#7BAE4B] text-2xl" />,
            image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=400&q=80',
            description:
              "Specialized avian veterinary care including diagnostics, treatment plans, and surgical procedures performed by certified avian veterinarians.",
            bullets: [
              'Diagnostic imaging',
              'Microchipping',
              'Specialized surgeries',
            ],
          },
          {
            title: 'Boarding & Grooming',
            icon: <FaHandsHelping className="text-[#7BAE4B] text-2xl" />,
            image: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?auto=format&fit=crop&w=400&q=80',
            description:
              "Safe, comfortable boarding facilities with avian-specialized staff and professional grooming services to keep your bird looking and feeling their best.",
            bullets: [
              'Short-term boarding',
              'Wing clipping',
              'Medicated bathing',
            ],
          },
        ].map((service, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="md:w-1/3 w-full">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 md:h-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-2/3 w-full">
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-[#7BAE4B]">{service.title}</h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">{service.description}</p>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                {service.bullets.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#7BAE4B] mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialized_Services;
