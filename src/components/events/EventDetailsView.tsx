
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Event } from '@/hooks/useEventData';
import EventHeader from './EventHeader';
import EventImage from './EventImage';
import EventDescription from './EventDescription';
import EventOrganizer from './EventOrganizer';
import EventDetailsSidebar from './EventDetailsSidebar';
import EventActions from './EventActions';
import ContactOrganizerDialog from './ContactOrganizerDialog';
import { formatDate } from '@/utils/dateUtils';
import { categoryColors } from '@/data/eventsSampleData';

interface EventDetailsViewProps {
  event: Event;
  isSaved: boolean;
  onSave: () => void;
  onShare: () => void;
}

const EventDetailsView: React.FC<EventDetailsViewProps> = ({ 
  event, 
  isSaved, 
  onSave, 
  onShare 
}) => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const handleContactOrganizer = () => {
    setContactDialogOpen(true);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <EventHeader onShare={onShare} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <EventImage 
            image={event.image} 
            title={event.title} 
            category={event.category} 
            categoryColor={categoryColors[event.category]}
            backTo="/events"
            backLabel="Back to Events"
          />
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 mt-6">
            <h1 className="text-3xl font-bold">{event.title}</h1>
          </div>
          
          <EventDescription description={event.description} website={event.website} />
          
          <EventOrganizer organizer={event.organizer} attendees={event.attendees} />
          
          <EventActions 
            isSaved={isSaved} 
            onSave={onSave} 
            onContact={handleContactOrganizer} 
          />
        </div>
        
        <div className="lg:col-span-1">
          <EventDetailsSidebar 
            date={event.date || event.dateString || ''} 
            time={event.time} 
            location={event.location} 
            ticketPrice={event.ticketPrice}
            formatDate={formatDate}
          />
        </div>
      </div>
      
      <ContactOrganizerDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen} 
      />
    </div>
  );
};

export default EventDetailsView;
