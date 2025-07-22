import React from 'react'

const Contact_Faq = () => {
  return (
            
<section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">What's the best diet for my parrot?</h3>
              <p className="text-gray-600">
                Parrots need a varied diet including pellets, fresh fruits, vegetables, and occasional nuts. 
                Avoid avocado, chocolate, and caffeine as they're toxic to birds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">How often should I clean my bird's cage?</h3>
              <p className="text-gray-600">
                Daily spot cleaning is essential, with a full cage cleaning at least once a week. 
                Food and water dishes should be cleaned daily.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Is my home environment safe for birds?</h3>
              <p className="text-gray-600">
                Birds are sensitive to fumes (Teflon, cleaners), drafts, and some houseplants. 
                We recommend a home safety consultation for new bird owners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">How can I tell if my bird is sick?</h3>
              <p className="text-gray-600">
                Watch for changes in appetite, droppings, feather condition, or behavior. Birds often hide illness, 
                so any noticeable change warrants a vet visit.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition duration-300">
              View All FAQs
            </button>
          </div>
        </section>
  )
}

export default Contact_Faq;
