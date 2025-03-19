import { Bot, Compass, Calendar, Car, MessageSquare } from 'lucide-react';
const FeatureSections = () => {
  return <section id="features" className="py-20">
      {/* Smart AI Guide */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-lg mx-auto">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center">
                  <Bot size={20} className="text-ocean" />
                </div>
                <div>
                  <h4 className="font-medium">Smart AI Guide</h4>
                  <p className="text-sm text-gray-500">Always ready to help</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-gray-100 rounded-lg rounded-tl-none max-w-xs">
                  <p className="text-sm">I want to spend 3 days in Northern Cyprus. What should I see?</p>
                </div>
                
                <div className="p-3 bg-ocean/10 rounded-lg rounded-tr-none ml-auto max-w-xs">
                  <p className="text-sm">For a 3-day trip to Northern Cyprus, I'd recommend:

Day 1: Explore Kyrenia Harbor and Bellapais Abbey

Day 2: Visit Famagusta and the ghost town of Varosha

Day 3: Relax at Golden Beach and visit St. Hilarion Castle</p>
                </div>
                
                
                
                
                
                
                
                <div className="p-3 bg-gray-100 rounded-lg rounded-tl-none max-w-xs">
                  <p className="text-sm">That sounds perfect! Are there any local foods I should try?</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="max-w-lg">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-ocean">AI ASSISTANT</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Your Personalized AI Travel Assistant</h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">Chat with our AI assistant to plan your perfect trip to Northern Cyprus. Get instant answers to your questions, personalized recommendations, and create detailed itineraries based on your interests, travel style, and preferences.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">24/7 availability to answer all your travel questions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Personalized itineraries based on your interests</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Real-time information on attractions, dining, and local customs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AR Explorer */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="max-w-lg">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center">
                    <Compass size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-ocean">AR EXPLORER</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-6">Explore TRNC's Heritage with AR</h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Experience Northern Cyprus's cultural heritage in a whole new way with our 
                  Augmented Reality explorer. See historical sites come to life with 
                  interactive 3D reconstructions, learn about their history, and discover 
                  hidden stories behind TRNC's most iconic landmarks.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Interactive 3D reconstructions of historical sites</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Audio narration of historical facts and stories</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Virtual tour guides for immersive exploration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative mx-auto w-auto h-auto">
                <img alt="AR Explorer" src="/lovable-uploads/0141e8f8-29f3-43e5-adf7-f805bda70c21.jpg" className="rounded-3xl shadow-xl object-fill" />
                
                <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-ocean rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.5 9C9.5 8.17157 10.1716 7.5 11 7.5H13C13.8284 7.5 14.5 8.17157 14.5 9C14.5 9.82843 13.8284 10.5 13 10.5H11C10.1716 10.5 9.5 11.1716 9.5 12C9.5 12.8284 10.1716 13.5 11 13.5H13C13.8284 13.5 14.5 14.1716 14.5 15C14.5 15.8284 13.8284 16.5 13 16.5H11C10.1716 16.5 9.5 15.8284 9.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 7.5V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 18V16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Portal */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg">Upcoming Events</h3>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border border-gray-100 rounded-xl flex hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-ocean/10 rounded-lg flex flex-col items-center justify-center mr-4">
                    <span className="text-ocean text-sm font-bold">May</span>
                    <span className="text-ocean text-xl font-bold">14</span>
                  </div>
                  <div>
                    <h4 className="font-medium">TRNC Food Festival</h4>
                    <p className="text-sm text-gray-500 mb-1">Kyrenia </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      <span>6:00 PM - 10:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-xl flex hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-ocean/10 rounded-lg flex flex-col items-center justify-center mr-4">
                    <span className="text-ocean text-sm font-bold">JUN</span>
                    <span className="text-ocean text-xl font-bold">22</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Traditional Music Concert</h4>
                    <p className="text-sm text-gray-500 mb-1">Bellapais Abbey</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      <span>7:30 PM - 9:30 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-100 rounded-xl flex hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-ocean/10 rounded-lg flex flex-col items-center justify-center mr-4">
                    <span className="text-ocean text-sm font-bold">JUL</span>
                    <span className="text-ocean text-xl font-bold">05</span>
                  </div>
                  <div>
                    <h4 className="font-medium">International Arts Festival</h4>
                    <p className="text-sm text-gray-500 mb-1">Lefkosa</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      <span>All Day Event</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 p-2 border border-ocean text-ocean rounded-lg hover:bg-ocean/5 transition-colors duration-300 text-sm font-medium">
                View All Events
              </button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="max-w-lg">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center">
                  <Calendar size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-ocean">EVENT PORTAL</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Never Miss an Exciting Event</h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay up-to-date with all the exciting events happening in Northern Cyprus. 
                From traditional festivals to concerts, art exhibitions, and cultural 
                performances, our Event Portal keeps you informed about everything happening 
                during your visit.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Comprehensive calendar of local events and activities</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">RSVP functionality and ticket purchasing options</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Personalized event recommendations based on your interests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Transport Finder */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="max-w-lg">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center">
                    <Car size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-ocean">TRANSPORT FINDER</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-6">Navigate TRNC with Ease</h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Getting around Northern Cyprus has never been easier. Our Transport Finder 
                  provides up-to-date information on all transportation options, from taxis and 
                  buses to car rentals, helping you travel comfortably and efficiently throughout 
                  your stay.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Real-time bus and shuttle schedules</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Taxi booking and fare estimates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Car rental comparison and booking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 13V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V13M8 13C8 14.0609 8.42143 15.0783 9.17157 15.8284C9.92172 16.5786 10.9391 17 12 17C13.0609 17 14.0783 16.5786 14.8284 15.8284C15.5786 15.0783 16 14.0609 16 13M8 13H16M20 15V11C20 9.93913 19.5786 8.92172 18.8284 8.17157C18.0783 7.42143 17.0609 7 16 7M4 15V11C4 9.93913 4.42143 8.92172 5.17157 8.17157C5.92172 7.42143 6.93913 7 8 7M12 17V21M9 21H15" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Taxi Service</h3>
                  <p className="text-sm text-gray-600">Book a taxi instantly with upfront pricing</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 11H9M15 11C15.5304 11 16.0391 10.7893 16.4142 10.4142C16.7893 10.0391 17 9.53043 17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5H9C8.46957 5 7.96086 5.21071 7.58579 5.58579C7.21071 5.96086 7 6.46957 7 7V9C7 9.53043 7.21071 10.0391 7.58579 10.4142C7.96086 10.7893 8.46957 11 9 11M15 11V19L12 17L9 19V11M4 17H2V5H4M20 17H22V5H20" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Car Rental</h3>
                  <p className="text-sm text-gray-600">Compare prices from top rental agencies</p>
                </div>
              </div>
              
              <div className="space-y-6 mt-12">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 14H15M4 8H20M6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V9C20 8.46957 19.7893 7.96086 19.4142 7.58579C19.0391 7.21071 18.5304 7 18 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 5C14 4.44772 13.5523 4 13 4H11C10.4477 4 10 4.44772 10 5V7H14V5Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Bus Schedule</h3>
                  <p className="text-sm text-gray-600">View real-time bus schedules and routes</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 11L12 8M12 8L15 11M12 8V16M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Shuttle Service</h3>
                  <p className="text-sm text-gray-600">Book affordable airport and hotel shuttles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeatureSections;