
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventImageProps {
  image: string;
  title: string;
  category: string;
  categoryColor: string;
  backTo?: string;
  backLabel?: string;
}

const EventImage: React.FC<EventImageProps> = ({ 
  image, 
  title, 
  category, 
  categoryColor,
  backTo = "/events",
  backLabel = "Back to Events"
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-4">
      <div className="relative rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-72 md:h-96 object-cover" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColor}`}>
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventImage;
