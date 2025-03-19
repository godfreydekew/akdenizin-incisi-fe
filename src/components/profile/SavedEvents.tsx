
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { eventsData } from '@/data/eventsData'; 

export const SavedEvents = () => {
  const [savedEvents, setSavedEvents] = useState<any[]>([]);
  
  // Load saved events from localStorage
  useEffect(() => {
    // Let's assume user has saved events 1, 3, 5 for demo purposes
    // In a real app, this would come from your database or localStorage
    const savedEventIds = ['1', '3', '5']; 
    const filteredEvents = eventsData.filter(event => savedEventIds.includes(event.id));
    setSavedEvents(filteredEvents);
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Card className="border border-gray-100/50 dark:border-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-ocean/5 to-transparent dark:from-ocean/10 dark:to-transparent border-b border-gray-100 dark:border-gray-800">
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-ocean/10 dark:bg-ocean/20">
            <Bookmark className="h-5 w-5 text-ocean dark:text-ocean-light" />
          </div>
          <span>Saved Events</span>
        </CardTitle>
        <CardDescription>
          Events you've bookmarked to attend or explore later.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {savedEvents.length > 0 ? (
          <div className="space-y-4">
            {savedEvents.map((event) => (
              <Link 
                key={event.id} 
                to={`/events/${event.id}`}
                className="block"
              >
                <div 
                  className="flex flex-col sm:flex-row gap-4 p-5 border border-gray-100/50 dark:border-gray-800/50 rounded-xl hover:border-ocean/20 dark:hover:border-ocean/30 hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-all duration-300 group"
                >
                  <div className="sm:w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg group-hover:text-ocean dark:group-hover:text-ocean-light transition-colors duration-300">
                      {event.title}
                    </h4>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="bg-gray-50 dark:bg-gray-800/50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
              <Bookmark className="h-10 w-10 text-gray-300 dark:text-gray-600" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">No saved events yet</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">Browse events and save your favorites to see them here!</p>
            <Button 
              asChild
              className="bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-dark hover:to-ocean text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link to="/events">
                <Bookmark className="h-4 w-4 mr-2" />
                Browse Events
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
