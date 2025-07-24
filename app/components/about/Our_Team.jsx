const Our_Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Wingfield",
      role: "Avian Veterinarian",
      experience: "15 years experience",
      specialty: "Surgery & Diagnostics"
    },
    {
      name: "Raj Patel",
      role: "Ornithologist",
      experience: "Conservationist",
      specialty: "Wildlife Preservation"
    },
    {
      name: "Maria Gonzalez",
      role: "Nutrition Specialist",
      experience: "Diet Formulation",
      specialty: "Species-Specific Diets"
    },
    {
      name: "Jamal Wilson",
      role: "Habitat Designer",
      experience: "Enclosure Architecture",
      specialty: "Naturalistic Environments"
    }
  ];

  return (
    <section className="relative py-8 sm:py-12 my-8 sm:my-16 overflow-hidden bg-gradient-to-br from-green-100 to-blue-50 rounded-xl sm:rounded-2xl lg:rounded-3xl mx-4 lg:mx-auto max-w-7xl">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-green-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-28 h-28 sm:w-48 sm:h-48 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Team content */}
          <div className="w-full lg:w-1/2 lg:pr-4 xl:pr-8">
            <div className="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold text-green-500 uppercase tracking-wider">Our Experts</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-[#7BAE4B]">Dream Team</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 leading-relaxed">
              Our team consists of ornithologists, veterinarians, and bird care specialists 
              with decades of combined experience. We're passionate about sharing our 
              knowledge to help both pet birds and wild species.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="relative bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group overflow-hidden"
                >
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 relative z-10">{member.name}</h3>
                  <p className="text-[#7BAE4B] font-medium text-sm sm:text-base mb-1 sm:mb-2 relative z-10">{member.role}</p>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-1 relative z-10">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-[#7BAE4B]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {member.experience}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 relative z-10">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-[#7BAE4B]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    {member.specialty}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team image with decorative elements */}
          <div className="w-full lg:w-1/2 relative mt-6 sm:mt-0">
            <div className="relative group h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
                alt="Our team working with birds"
                className="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 z-20">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Collaborative Excellence</h3>
                <p className="text-green-200 text-xs sm:text-sm">Our team working together in our aviary research center</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full filter blur-xl opacity-40 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_Team;