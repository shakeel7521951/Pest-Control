import React from 'react'

const Community_Impact = () => {
  const stats = [
    {
      value: "10,000+",
      label: "Birds helped annually",
      icon: "🦜"
    },
    {
      value: "200+",
      label: "Educational programs",
      icon: "📚"
    },
    {
      value: "50+",
      label: "Sanctuaries supported",
      icon: "🌿"
    }
  ]

  return (
    <section className="relative py-10 top-12 verflow-hidden bg-gradient-to-br from-green-500 to-green-600 rounded-3xl">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-600 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center">
        {/* Header section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gray-100">Community </span> Impact
          </h2>
          <p className="text-xl text-white leading-relaxed">
            Since our founding, we've made significant contributions to avian welfare through education, 
            conservation efforts, and direct care initiatives that span across multiple continents.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-yellow-300/30 hover:bg-white/15 transition-all duration-500 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-white mb-2 group-hover:text-green-200 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-green-200 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button className="relative overflow-hidden group bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <span className="relative z-10">Join Our Community</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-green-500 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500"></span>
        </button>

        {/* Testimonial snippet */}
        <div className="mt-16 max-w-2xl mx-auto bg-white/5 p-6 rounded-xl border border-white/10">
          <p className="text-green-200 italic mb-4">
            "Feathered Friends Care transformed our local sanctuary with their expertise and resources. 
            Their impact goes far beyond numbers."
          </p>
          <p className="text-green-100 font-medium">— Maria Sanchez, Avian Sanctuary Director</p>
        </div>
      </div>
    </section>
  )
}

export default Community_Impact;