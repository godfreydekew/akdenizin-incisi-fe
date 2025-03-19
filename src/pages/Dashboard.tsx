
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Camera, Calendar, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

// Mock user data - in a real application, this would come from an auth context or API
const mockUser = {
  name: "Sarah",
  recentActivity: "Last visited 2 days ago"
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>(mockUser.name);
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show welcome message after loading
      setTimeout(() => {
        setShowWelcome(true);
      }, 300);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const featureCards = [
    {
      title: "Smart Guide",
      description: "Chat with our AI assistant for personalized recommendations about Northern Cyprus.",
      icon: <Bot className="h-10 w-10 text-white" />,
      backgroundImage: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      route: "/chat",
      color: "from-blue-500 to-ocean",
      borderColor: "border-ocean/20"
    },
    {
      title: "AR Explorer",
      description: "Discover historical sites with our augmented reality experience.",
      icon: <Camera className="h-10 w-10 text-white" />,
      backgroundImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      route: "/ar",
      color: "from-amber-400 to-gold",
      borderColor: "border-gold/20"
    },
    {
      title: "Events Portal",
      description: "Browse upcoming events and activities across Northern Cyprus.",
      icon: <Calendar className="h-10 w-10 text-white" />,
      backgroundImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      route: "/events",
      color: "from-green-400 to-green-600",
      borderColor: "border-green-500/20"
    },
    {
      title: "Transport Finder",
      description: "Find transportation options to get around Northern Cyprus hassle-free.",
      icon: <MapPin className="h-10 w-10 text-white" />,
      backgroundImage: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      route: "/transportation",
      color: "from-purple-400 to-purple-600",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Top Section with Welcome Message and Wave Background */}
        <div className="relative pt-24 pb-20 sm:pt-28 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className={`transition-all duration-700 ${showWelcome ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-grow">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-ocean to-blue-600 bg-clip-text text-transparent">
                    Welcome back, {userName}!
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                    Ready to plan your next adventure? Discover personalized experiences and make the most of Northern Cyprus.
                  </p>
                </div>
                
                {/* AI Chat bubble */}
                <div className="relative flex-shrink-0 animate-float">
                  <div className="glassmorphism rounded-xl rounded-tr-none p-4 md:min-w-[220px]">
                    <p className="text-gray-800 dark:text-white text-sm">
                      Hi {userName}, ready to plan your next trip to TRNC?
                    </p>
                    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean to-ocean-dark flex items-center justify-center animate-pulse-subtle">
                        <Sparkles size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => navigate('/chat')} 
                    className="mt-3 w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-dark hover:to-ocean text-white"
                  >
                    Chat with AI
                    <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10 bg-hero-pattern opacity-70"></div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[50%] -left-[25%] w-[150%] h-[150%] rounded-full bg-gradient-radial from-ocean/5 to-transparent opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-[50%] -right-[25%] w-[150%] h-[150%] rounded-full bg-gradient-radial from-gold/5 to-transparent opacity-70 blur-3xl"></div>
          </div>
        </div>

        {/* Main Section with Feature Cards */}
        <div className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Your Explorer Tools</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Unlock the full potential of your TRNC adventure with these premium features</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featureCards.map((card, index) => (
                <div 
                  key={index}
                  className="destination-card group cursor-pointer transition-all duration-500 border-0 overflow-hidden bg-white dark:bg-gray-900"
                  onClick={() => navigate(card.route)}
                >
                  <div className="image-container h-60 overflow-hidden">
                    <img 
                      src={card.backgroundImage} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center mr-3`}>
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-ocean dark:group-hover:text-ocean-light transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-light">
                      {card.description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Explore</span>
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${card.borderColor} group-hover:bg-white group-hover:shadow-sm transition-all duration-300`}>
                        <ChevronRight size={16} className="text-gray-400 group-hover:text-ocean transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
