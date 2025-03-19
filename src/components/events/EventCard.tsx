
import { Link } from 'react-router-dom';
import { CalendarIcon, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date?: string;
    dateString?: string;
    time: string;
    location: string;
    description: string;
    image: string;
    category: string;
  };
}

export const EventCard = ({ event }: EventCardProps) => {
  // Format date to display
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Link to={`/events/${event.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-500 group event-card border border-gray-100/50 dark:border-gray-800/50">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-3 right-3 glassmorphism px-2 py-1 rounded-full text-xs font-medium">
            {event.category}
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-2 group-hover:text-ocean dark:group-hover:text-ocean-light transition-colors duration-300">{event.title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <CalendarIcon size={16} className="mr-2 text-gray-400 dark:text-gray-500" />
              {formatDate(event.date || event.dateString || '')}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Clock size={16} className="mr-2 text-gray-400 dark:text-gray-500" />
              {event.time}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-2 text-gray-400 dark:text-gray-500" />
              {event.location}
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{event.description}</p>
            <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-ocean group-hover:border-ocean transition-all duration-300">
              <ArrowUpRight size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
