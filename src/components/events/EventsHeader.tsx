
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const EventsHeader = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-ocean/10 rounded-lg p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h2 className="text-xl font-medium mb-1">Want to share an amazing event with the community?</h2>
        <p className="text-gray-600">Create an event to share with locals and travelers alike.</p>
      </div>
      <Button 
        onClick={() => navigate('/events/create')}
        className="whitespace-nowrap flex items-center gap-2"
      >
        <Plus size={16} />
        Add Event
      </Button>
    </div>
  );
};
