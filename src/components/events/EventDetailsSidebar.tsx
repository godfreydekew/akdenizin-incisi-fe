
import React from 'react';
import { CalendarIcon, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface EventDetailsSidebarProps {
  date: string;
  time: string;
  location: string;
  ticketPrice?: string;
  formatDate: (dateString: string) => string;
}

const EventDetailsSidebar: React.FC<EventDetailsSidebarProps> = ({ 
  date, 
  time, 
  location, 
  ticketPrice,
  formatDate 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Event Details</h2>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center text-gray-700 mb-1">
            <CalendarIcon size={18} className="mr-2 text-gray-500" />
            <span className="font-medium">Date</span>
          </div>
          <p className="pl-7 text-gray-600">
            {formatDate(date)}
          </p>
        </div>
        
        <div>
          <div className="flex items-center text-gray-700 mb-1">
            <Clock size={18} className="mr-2 text-gray-500" />
            <span className="font-medium">Time</span>
          </div>
          <p className="pl-7 text-gray-600">{time}</p>
        </div>
        
        <div>
          <div className="flex items-center text-gray-700 mb-1">
            <MapPin size={18} className="mr-2 text-gray-500" />
            <span className="font-medium">Location</span>
          </div>
          <p className="pl-7 text-gray-600">{location}</p>
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(location)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="pl-7 text-ocean hover:text-ocean-dark text-sm inline-flex items-center mt-1"
          >
            View on map <ExternalLink size={12} className="ml-1" />
          </a>
        </div>
        
        {ticketPrice && (
          <div>
            <div className="flex items-center text-gray-700 mb-1">
              <span className="mr-2 text-gray-500">🎟️</span>
              <span className="font-medium">Ticket Price</span>
            </div>
            <p className="pl-7 text-gray-600">{ticketPrice}</p>
          </div>
        )}
      </div>
      
      <Separator className="my-6" />
    </div>
  );
};

export default EventDetailsSidebar;
