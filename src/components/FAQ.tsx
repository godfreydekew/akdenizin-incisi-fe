
import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Bot } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [isTyping, setIsTyping] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const faqs = [
    {
      question: "What is SmartTRNC AI Guide?",
      answer: "SmartTRNC is an AI-powered tourism guide for Northern Cyprus that provides personalized recommendations, interactive AR experiences, event information, and transportation assistance to enhance your travel experience."
    },
    {
      question: "How does the AI personalization work?",
      answer: "Our AI analyzes your preferences, interests, and travel history to provide recommendations tailored specifically to you. The more you interact with the app, the better it gets at understanding your preferences and making relevant suggestions."
    },
    {
      question: "Do I need internet connection to use the app?",
      answer: "While most features require an internet connection for real-time data and AI processing, we offer offline maps and basic information that can be downloaded for use without internet access."
    },
    {
      question: "Is the AR Explorer feature available for all historical sites?",
      answer: "Currently, AR Explorer is available for major historical sites including Kyrenia Castle, Bellapais Abbey, Salamis Ruins, and St. Hilarion Castle. We're continuously adding more sites to enhance your experience."
    },
    {
      question: "How accurate is the Transport Finder information?",
      answer: "Our Transport Finder uses real-time data from local transportation providers to ensure high accuracy. For buses and public transport, we update schedules regularly and provide notifications for any changes or delays."
    },
  ];

  const toggleItem = (index: number) => {
    // If clicking on a closed item
    if (openItem !== index) {
      setOpenItem(index);
      // Simulate AI typing effect
      setIsTyping(index);
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set timeout for "typing" effect (1-2 seconds)
      timeoutRef.current = setTimeout(() => {
        setIsTyping(null);
      }, 1500);
    } else {
      // If clicking on an open item
      setOpenItem(null);
    }
  };

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center">
          Find answers to common questions about our AI-powered tourism guide
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openItem === index ? (
                  <ChevronUp className="text-gray-500" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500" size={20} />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index ? 'max-h-96 p-5 bg-white' : 'max-h-0'
                }`}
              >
                {isTyping === index ? (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-ocean/10 rounded-full flex items-center justify-center mt-1">
                      <Bot size={18} className="text-ocean" />
                    </div>
                    <div>
                      <div className="flex space-x-1 items-center h-6">
                        <div className="w-2 h-2 bg-ocean rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-ocean rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-ocean rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-ocean/10 rounded-full flex items-center justify-center mt-1">
                      <Bot size={18} className="text-ocean" />
                    </div>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
