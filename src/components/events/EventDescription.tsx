
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface EventDescriptionProps {
  description: string;
  website?: string;
}

const EventDescription: React.FC<EventDescriptionProps> = ({ description, website }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">About This Event</h2>
      <p className="text-gray-700 whitespace-pre-line">{description}</p>
      
      {website && (
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 inline-flex items-center text-ocean hover:text-ocean-dark"
        >
          Visit official website <ExternalLink size={14} className="ml-1" />
        </a>
      )}
    </div>
  );
};

export default EventDescription;
