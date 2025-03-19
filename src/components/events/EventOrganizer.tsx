
import React from 'react';
import { Users } from 'lucide-react';

interface EventOrganizerProps {
  organizer: string;
  attendees?: number;
}

const EventOrganizer: React.FC<EventOrganizerProps> = ({ organizer, attendees }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold mb-4">Organizer</h2>
      <p className="text-gray-700">{organizer}</p>
      
      {attendees && (
        <div className="mt-4">
          <span className="inline-flex items-center text-sm text-gray-500">
            <Users size={14} className="mr-1" />
            {attendees} people going
          </span>
        </div>
      )}
    </div>
  );
};

export default EventOrganizer;
