
import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventActionsProps {
  isSaved: boolean;
  onSave: () => void;
  onContact: () => void;
}

const EventActions: React.FC<EventActionsProps> = ({ isSaved, onSave, onContact }) => {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <Button onClick={onSave} variant={isSaved ? "secondary" : "default"} className="flex-1">
        <Heart className={`mr-2 ${isSaved ? "fill-red-500" : ""}`} />
        {isSaved ? "Saved" : "Save Event"}
      </Button>
      
      <Button onClick={onContact} variant="outline" className="flex-1">
        <Mail className="mr-2" />
        Contact Organizer
      </Button>
    </div>
  );
};

export default EventActions;
