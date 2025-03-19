
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
              href="#" 
              className="hero-button bg-white text-ocean hover:bg-gray-100 shadow-lg inline-flex items-center"
            >
              Sign Up for Free
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-white mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">No credit card required</span>
              </div>
              
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-white mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">Cancel anytime</span>
              </div>
              
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-white mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-white text-sm">24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
