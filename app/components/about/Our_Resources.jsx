import React from 'react'

const Our_Resources = () => {
  const resources = [
    {
      icon: '🍎',
      title: 'Nutrition Guides',
      description: 'Species-specific dietary requirements and feeding schedules',
      bgColor: 'bg-green-50'
    },
    {
      icon: '🏠',
      title: 'Habitat Setup',
      description: 'Cage sizes, perches, toys, and environmental enrichment',
      bgColor: 'bg-blue-50'
    },
    {
      icon: '💊',
      title: 'Health Care',
      description: 'Common illnesses, prevention, and when to see a vet',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: '💬',
      title: 'Behavior',
      description: 'Understanding bird behavior and communication',
      bgColor: 'bg-purple-50'
    }
  ]

  return (
    <section className="relative py-10 -top-14 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative group h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
                alt="Bird care resources"
                className="w-full h-full  transform transition duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 z-20">
                <h3 className="text-xl font-bold text-white">Expert-Curated Content</h3>
                <p className="text-green-400 text-sm">All resources vetted by our team of specialists</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="mb-2 text-sm font-semibold text-[#7BAE4B] uppercase tracking-wider">Learning Center</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-[#7BAE4B]">Resources</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We provide detailed guides on all aspects of bird care to help you become the best bird caretaker possible. 
              Our materials are regularly updated with the latest avian research.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {resources.map((resource, index) => (
                <div 
                  key={index}
                  className={`${resource.bgColor} p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group overflow-hidden relative`}
                >
                  <div className="text-4xl mb-4 transition duration-300 group-hover:scale-110">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Our_Resources