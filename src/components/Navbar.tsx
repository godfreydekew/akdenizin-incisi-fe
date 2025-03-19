import { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
interface NavbarProps {
  activeSection: string | null;
}
const Navbar = ({
  activeSection
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'glassmorphism backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className={`transition-all duration-300 ${isScrolled || !isHomePage ? 'text-ocean dark:text-ocean-light' : 'text-white'}`}>
              Smart<span className={`transition-all duration-300 ${isScrolled || !isHomePage ? 'text-gold dark:text-gold-light' : 'text-white/80'}`}>TRNC</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? <>
              <a href="#features" className={`transition-colors duration-300 hover:text-ocean hover-underline-animation ${activeSection === 'features' ? 'text-ocean dark:text-ocean-light' : isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}>
                Features
              </a>
              <a href="#how-it-works" className={`transition-colors duration-300 hover:text-ocean hover-underline-animation ${activeSection === 'how-it-works' ? 'text-ocean dark:text-ocean-light' : isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}>
                How It Works
              </a>
              <a href="#destinations" className={`transition-colors duration-300 hover:text-ocean hover-underline-animation ${activeSection === 'destinations' ? 'text-ocean dark:text-ocean-light' : isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}>
                Destinations
              </a>
              <a href="#reviews" className={`transition-colors duration-300 hover:text-ocean hover-underline-animation ${activeSection === 'reviews' ? 'text-ocean dark:text-ocean-light' : isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}>
                Reviews
              </a>
              <a href="#faq" className={`transition-colors duration-300 hover:text-ocean hover-underline-animation ${activeSection === 'faq' ? 'text-ocean dark:text-ocean-light' : isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}>
                FAQ
              </a>
            </> : <>
              <Link to="/events" className={`text-gray-700 dark:text-gray-300 hover:text-ocean dark:hover:text-ocean-light hover-underline-animation ${location.pathname.includes('/events') ? 'text-ocean dark:text-ocean-light' : ''}`}>
                Events
              </Link>
              <Link to="/transportation" className={`text-gray-700 dark:text-gray-300 hover:text-ocean dark:hover:text-ocean-light hover-underline-animation ${location.pathname === '/transportation' ? 'text-ocean dark:text-ocean-light' : ''}`}>
                Transportation
              </Link>
              <Link to="/ar" className={`text-gray-700 dark:text-gray-300 hover:text-ocean dark:hover:text-ocean-light hover-underline-animation ${location.pathname === '/ar' ? 'text-ocean dark:text-ocean-light' : ''}`}>
                AR Explorer
              </Link>
              <Link to="/chat" className={`text-gray-700 dark:text-gray-300 hover:text-ocean dark:hover:text-ocean-light hover-underline-animation ${location.pathname === '/chat' ? 'text-ocean dark:text-ocean-light' : ''}`}>
                AI Chat
              </Link>
            </>}
          
          <Link to="/login" className={`flex items-center gap-1 ${isScrolled || !isHomePage ? 'text-ocean dark:text-ocean-light hover:text-ocean-dark dark:hover:text-white' : 'text-white hover:text-white/80'}`}>
            
            
          </Link>
          <Link to="/signup" className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-1 ${isScrolled || !isHomePage ? 'bg-gradient-to-r from-ocean to-ocean-light text-white hover:from-ocean-dark hover:to-ocean' : 'glassmorphism text-white hover:bg-white/30'}`}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={`md:hidden focus:outline-none transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-6 pt-4 pb-8 space-y-4 glassmorphism backdrop-blur-xl bg-white/90 dark:bg-gray-900/90">
          {isHomePage ? <>
              <a href="#features" className={`block py-2 hover:text-ocean ${activeSection === 'features' ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#how-it-works" className={`block py-2 hover:text-ocean ${activeSection === 'how-it-works' ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#destinations" className={`block py-2 hover:text-ocean ${activeSection === 'destinations' ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>
                Destinations
              </a>
              <a href="#reviews" className={`block py-2 hover:text-ocean ${activeSection === 'reviews' ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>
                Reviews
              </a>
              <a href="#faq" className={`block py-2 hover:text-ocean ${activeSection === 'faq' ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </a>
            </> : <>
              <Link to="/events" className={`block py-2 hover:text-ocean ${location.pathname.includes('/events') ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>
                Events
              </Link>
              <Link to="/transportation" className={`block py-2 hover:text-ocean ${location.pathname === '/transportation' ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>
                Transportation
              </Link>
              <Link to="/ar" className={`block py-2 hover:text-ocean ${location.pathname === '/ar' ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>
                AR Explorer
              </Link>
              <Link to="/chat" className={`block py-2 hover:text-ocean ${location.pathname === '/chat' ? 'text-ocean dark:text-ocean-light' : 'text-gray-700 dark:text-gray-300'}`} onClick={() => setIsMobileMenuOpen(false)}>
                AI Chat
              </Link>
            </>}
          
          <div className="flex flex-col space-y-2 mt-4">
            <Link to="/login" className="block py-2 text-ocean dark:text-ocean-light hover:text-ocean-dark" onClick={() => setIsMobileMenuOpen(false)}>
              Log In
            </Link>
            <Link to="/signup" className="bg-gradient-to-r from-ocean to-ocean-light text-white px-5 py-2 rounded-full shadow-md inline-block text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;