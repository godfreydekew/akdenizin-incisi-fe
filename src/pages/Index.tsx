
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FeatureSections from '../components/FeatureSections';
import AdditionalFeatures from '../components/AdditionalFeatures';
import Destinations from '../components/Destinations';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Function to handle scroll reveal animation
  useEffect(() => {
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
          
          // Get the section id for navigation highlighting
          const section = element.closest('section');
          if (section && section.id) {
            setActiveSection(section.id);
          }
        } else {
          // Only remove active class if not in viewport
          if (elementTop > windowHeight) {
            element.classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    
    // Initial check for elements in view on page load
    setTimeout(handleScrollAnimation, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar activeSection={activeSection} />
      <Hero />
      
      <div className="reveal">
        <HowItWorks />
      </div>
      
      <div className="reveal">
        <FeatureSections />
      </div>
      
      <div className="reveal">
        <AdditionalFeatures />
      </div>
      
      <div className="reveal">
        <Destinations />
      </div>
      
      <div className="reveal">
        <Reviews />
      </div>
      
      <div className="reveal">
        <FAQ />
      </div>
      
      <div className="reveal">
        <FinalCTA />
      </div>
      
      <Footer />
      
      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-12 h-12 bg-ocean rounded-full flex items-center justify-center shadow-lg hover:bg-ocean-light transition-colors duration-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="absolute right-full mr-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Need help?
          </span>
        </button>
      </div>
    </div>
  );
};

export default Index;
