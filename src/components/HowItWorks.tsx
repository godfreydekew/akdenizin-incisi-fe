import { Bot, Compass, Calendar, Map, Users, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
const HowItWorks = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFeature, setActiveFeature] = useState(0);

  // Array of features
  const features = [{
    icon: <Bot size={28} />,
    name: "Smart AI Guide",
    description: "Get personalized travel tips and answers instantly."
  }, {
    icon: <Compass size={28} />,
    name: "AR Explorer",
    description: "See historical sites come to life with augmented reality."
  }, {
    icon: <Calendar size={28} />,
    name: "Events",
    description: "Discover local festivals and activities during your visit."
  }, {
    icon: <Map size={28} />,
    name: "Transport Finder",
    description: "Find the best ways to travel around Northern Cyprus."
  }, {
    icon: <Users size={28} />,
    name: "Community",
    description: "Connect with other travelers and share experiences."
  }, {
    icon: <MessageSquare size={28} />,
    name: "Local Insights",
    description: "Get tips from locals who know the area best."
  }];

  // Rotate through features every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
        }
      });
    }, {
      threshold: 0.5
    });
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  return <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-ocean to-blue-600 bg-clip-text text-transparent">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-16">Our AI guide uses cutting-edge technology to offer personalized travel experiences based on your preferences and interests.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Block */}
          <div className="space-y-8">
            
            
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-ocean to-ocean-light rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <p className="font-medium text-gray-700 dark:text-white">Smart Recommendations</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Your AI assistant finds hidden gems perfectly suited to your preferences, creating truly personalized experiences."
              </p>
            </div>
            
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-amber-400 rounded-full flex items-center justify-center">
                  <Compass size={20} className="text-white" />
                </div>
                <p className="font-medium text-gray-700 dark:text-white">Immersive Exploration</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Augmented reality brings historic sites to life, revealing stories and details invisible to the naked eye."
              </p>
            </div>
          </div>

          {/* Interactive Feature Circle */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Central AI Icon */}
            <div className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-br from-ocean to-ocean-light flex items-center justify-center shadow-lg shadow-ocean/20 animate-pulse-subtle">
              <Bot size={40} className="text-white" />
            </div>
            
            {/* Rotating Circle */}
            <div className="absolute w-[300px] h-[300px] border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-full animate-spin-slow"></div>
            
            {/* Feature Icons */}
            {features.map((feature, index) => {
            // Calculate position around the circle
            const angle = (index * (360 / features.length) - 90) * (Math.PI / 180);
            const radius = 150;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            // Determine if this feature is active
            const isActive = index === activeFeature;
            return <div key={index} className={`absolute transition-all duration-500 ${isActive ? 'scale-125 z-20' : 'scale-100 z-0'}`} style={{
              transform: `translate(${x}px, ${y}px) ${isActive ? 'scale(1.25)' : 'scale(1)'}`,
              transition: 'all 0.5s ease'
            }}>
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${isActive ? 'bg-gradient-to-br from-ocean to-ocean-light text-white shadow-ocean/20' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}>
                    {feature.icon}
                  </div>
                  
                  {isActive && <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-md animate-fade-in">
                      {feature.name}
                    </div>}
                </div>;
          })}
            
            {/* Active Feature Description */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 animate-fade-in">
                {features[activeFeature].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;