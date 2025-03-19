
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventNotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <Button 
        variant="ghost" 
        className="flex items-center text-gray-600 hover:text-ocean group transition-all hover:translate-x-[-2px] mb-8 mx-auto"
        onClick={() => navigate('/events')}
      >
        <ArrowLeft size={18} className="mr-2 transition-transform group-hover:scale-110" />
        <span>Back to Events</span>
      </Button>
      
      <AlertTriangle size={48} className="mx-auto text-amber-500 mb-4" />
      <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
      <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
      <Button onClick={() => navigate('/events')}>Browse All Events</Button>
    </div>
  );
};

export default EventNotFound;
