
const FinalCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Northern Cyprus Mountains" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ocean/80 to-ocean/50"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 py-16 px-8 md:py-24 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Your Journey Today!
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Experience Northern Cyprus like never before with our AI-powered travel companion. Unlock a world of personalized recommendations, immersive experiences, and hassle-free travel.
            </p>
            <a 
              href="/login" 
              className="hero-button bg-white text-ocean hover:bg-gray-100 shadow-lg inline-flex items-center"
            >
              Sign Up for Free
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
