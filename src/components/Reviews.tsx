import { useRef, useEffect } from 'react';
import { Flag, Star, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
const Reviews = () => {
  const reviews = [{
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "This AI guide made my trip to Northern Cyprus absolutely incredible! It recommended places I never would have found on my own.",
    location: "London, UK",
    country: "gb",
    travelers: 143,
    recent: false
  }, {
    id: 2,
    name: "Mark Thompson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "The AR features brought the historical sites to life in a way I've never experienced before. Mind-blowing!",
    location: "Berlin, Germany",
    country: "de",
    travelers: 89,
    recent: false
  }, {
    id: 3,
    name: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    rating: 4,
    text: "I loved how the app suggested activities based on my interests. The restaurant recommendations were spot on!",
    location: "Toronto, Canada",
    country: "ca",
    travelers: 212,
    recent: false
  }, {
    id: 4,
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "The transport finder feature saved my trip! Quick alternative transportation after our rental car broke down.",
    location: "Sydney, Australia",
    country: "au",
    travelers: 67,
    recent: false
  }, {
    id: 5,
    name: "Olivia Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5,
    text: "I've used many travel apps, but this one is on another level. The AI understood exactly what experiences I wanted.",
    location: "Paris, France",
    country: "fr",
    travelers: 178,
    recent: false
  }];
  return <section id="reviews" className="py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center dark:text-white">What Tourists Say</h2>
        <p className="section-subtitle text-center dark:text-gray-300">Be one of many happy travelers discovering TRNC with us!</p>

        <div className="mt-12 relative">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="py-4">
              {reviews.map(review => <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className={`review-card group ${review.recent ? 'ring-2 ring-ocean/20 dark:ring-ocean/30' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white dark:border-gray-700 shadow-md">
                        <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-semibold dark:text-white">{review.name}</h4>
                          <div className="ml-2 flex items-center">
                            <Flag size={14} className="text-gray-400 dark:text-gray-500 mr-1" />
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">{review.country}</span>
                          </div>
                        </div>
                        {/* <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Users size={12} className="mr-1" />
                          <span>Joined {review.travelers} travelers</span>
                        </div> */}
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} className={`${i < review.rating ? 'text-gold fill-gold' : 'text-gray-300 dark:text-gray-600'} ${review.recent && i < review.rating ? 'animate-pulse' : ''}`} />)}
                    </div>
                    
                    <p className={`text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300 ${review.recent ? 'text-shadow-glow dark:text-shadow-glow-dark' : ''}`}>
                      {review.text}
                    </p>
                    
                    {review.recent}
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static translate-y-0 mr-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
              <CarouselNext className="static translate-y-0 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default Reviews;