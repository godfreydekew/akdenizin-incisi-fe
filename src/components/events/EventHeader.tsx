
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventHeaderProps {
  onShare: () => void;
}

const EventHeader: React.FC<EventHeaderProps> = ({
  onShare
}) => {
  // 🔗 Backend Integration Needed: Authenticate user to check permissions
  // Expected API Route: GET /api/auth/me
  // Expected Response Format:
  // {
  //   id: "user1",
  //   name: "John Smith",
  //   email: "john@example.com",
  //   isAuthenticated: true,
  //   roles: ["user"]
  // }
  // This would be handled by a global auth context that wraps the app.
  
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center justify-between mb-6">
      <Button 
        variant="outline" 
        onClick={() => navigate('/events')}
        className="flex items-center gap-2 hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft size={18} />
        <span>Back to Events</span>
      </Button>
      
      <Button 
        variant="ghost" 
        onClick={onShare}
        className="flex items-center gap-2"
      >
        <Share2 size={18} />
        <span className="hidden sm:inline">Share</span>
      </Button>
    </div>
  );
};

export default EventHeader;
