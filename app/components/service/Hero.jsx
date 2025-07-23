export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Professional Bird Care Services</h1>
            <p className="text-lg text-gray-700 mb-6">
              Comprehensive care solutions for your feathered friends. From nutrition to habitat design, 
              our certified avian specialists provide expert care for all bird species.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300">
                Book a Consultation
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80" 
              alt="Colorful parrots"
              className="w-full h-auto rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </section>
      </main>
    </div>
  );
}