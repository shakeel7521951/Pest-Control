"use client"
import { useState } from 'react';
import { FaFeatherAlt } from 'react-icons/fa';

const Contact_Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What's the best diet for my parrot?",
      answer: "Parrots need a varied diet including pellets, fresh fruits, vegetables, and occasional nuts. Avoid avocado, chocolate, and caffeine as they're toxic to birds."
    },
    {
      question: "How often should I clean my bird's cage?",
      answer: "Daily spot cleaning is essential, with a full cage cleaning at least once a week. Food and water dishes should be cleaned daily."
    },
    {
      question: "Is my home environment safe for birds?",
      answer: "Birds are sensitive to fumes (Teflon, cleaners), drafts, and some houseplants. We recommend a home safety consultation for new bird owners."
    }, 
    {
      question: "How can I tell if my bird is sick?",
      answer: "Watch for changes in appetite, droppings, feather condition, or behavior. Birds often hide illness, so any noticeable change warrants a vet visit."
    },
    {
      question: "How much social interaction do birds need?",
      answer: "Most parrots require several hours of interaction daily. Smaller birds like finches are more independent but still need environmental stimulation."
    },
    {
      question: "What's the ideal cage size for my bird?",
      answer: "The cage should be at least 1.5 times your bird's wingspan in width, with appropriate bar spacing. Taller cages are better for climbing species."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-50 py-20 px-4">
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-green-100 rounded-full px-4 py-2 mb-4">
            <FaFeatherAlt className="text-[#7BAE4B] mr-2" />
            <span className="text-sm font-semibold text-[#7BAE4B] uppercase tracking-wider">
              Avian Care FAQs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#7BAE4B]">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-[#7BAE4B] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about bird care and our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button 
                className={`flex w-full items-center justify-between p-6 text-left focus:outline-none transition-colors ${activeIndex === index ? 'bg-green-50' : 'hover:bg-green-50'}`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-green-600 pr-4">
                  {faq.question}
                </h3>
                <svg 
                  className={`flex-shrink-0 h-5 w-5 text-green-600 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact_Faq;