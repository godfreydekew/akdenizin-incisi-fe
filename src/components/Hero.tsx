
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  // 🔗 Backend Integration Needed: Fetch hero content from the backend CMS
  // Expected API Route: GET /api/content/hero
  // Expected Response Format:
  // {
  //   headline: "Discover TRNC Like Never Before",
  //   subheadline: "Your journey to discovering TRNC starts here",
  //   backgroundImage: "https://example.com/hero-bg.jpg",
  //   ctaText: "Get Started – It's Free!",
  //   ctaLink: "/signup",
  //   showChat: true,
  //   chatDelay: 2500,
  //   chatMessage: "Hey there! Need help planning your trip to Northern Cyprus?"
  // }
  // This would allow admins to update the hero section content without code changes.

  const [showChat, setShowChat] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Show elements after a short delay for smooth animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Show chat bubble after a delay
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 2500);

    // Hide chat bubble after some time
    const hideTimer = setTimeout(() => {
      setShowChat(false);
    }, 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);
  
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30 z-10"></div>
        <img src="/hero/hero.avif" alt="Kyrenia Harbor, Northern Cyprus" className="h-full w-full object-cover transition-transform duration-10000 ease-in-out scale-105" />
        
        {/* Animated overlay elements */}
        <div className="absolute inset-0 z-20 overflow-hidden bg-gradient-to-b from-black/20 to-transparent opacity-80">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNTUwVjBoMTQ0MHY1NTB6IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjAyIi8+PHBhdGggZD0iTTUwIDBENjAwIDM1MEE1MCA1MCAwIDEgMSA5MDAgMjAwQzEyMDAgMTAwIDE0NDAgMCAxNDQwIDBINTBaIiBmaWxsPSIjMGVhNWU5IiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] bg-cover bg-center"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-30 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-jakarta tracking-tight">
              Discover TRNC Like <span className="bg-gradient-to-r from-ocean-light via-ocean to-blue-600 bg-clip-text text-transparent">Never Before</span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">Your journey to discovering TRNC starts here</p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 mt-4 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
            <a href="#" className="bg-gradient-to-r from-ocean to-ocean-light text-white px-7 py-3 rounded-full relative overflow-hidden group shadow-lg shadow-ocean/20 transition-all duration-300 hover:shadow-xl hover:shadow-ocean/30">
              <span className="relative z-10 font-medium">Get Started – It's Free!</span>
              <span className="absolute inset-0 bg-gradient-to-r from-ocean-light to-ocean transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            </a>
          </div>

          <div className={`mt-16 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="glassmorphism p-3 px-5 rounded-full text-sm text-white bg-stone-700">
              Powered by advanced AI to create your perfect TRNC adventure
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat bubble */}
      <div className={`absolute bottom-40 right-10 max-w-xs z-40 transition-all duration-700 ${showChat ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="glassmorphism rounded-xl rounded-br-none p-4 shadow-lg border border-white/30">
          <p className="text-white text-sm">
            Hey there! Need help planning your trip to Northern Cyprus?
          </p>
          <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ocean to-ocean-light flex items-center justify-center shadow-md border-2 border-white animate-pulse-subtle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
      </div>
    </section>;
};
export default Hero;
