
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, Edit, Trash2, Plus, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Type for user events
export interface UserEvent {
  id: string;
  title: string;
  date?: Date;
  dateString?: string;
  time: string;
  location: string;
  description: string;
  category: string;
  image: string | null;
}

export const UserEvents = () => {
  const [userEvents, setUserEvents] = useState<UserEvent[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // 🔗 Backend Integration Needed: Fetch user's created events from the backend
  // Expected API Route: GET /api/users/events
  // Expected Response Format:
  // [
  //   {
  //     id: "user1",
  //     title: "Community Meetup",
  //     dateString: "2023-10-15",
  //     time: "18:00",
  //     location: "Kyrenia Center",
  //     description: "A community gathering...",
  //     category: "Social",
  //     image: "https://example.com/image.jpg"
  //   },
  //   ...
  // ]
  // Replace localStorage with an API call:
  // useEffect(() => {
  //   fetch('/api/users/events')
  //     .then(response => response.json())
  //     .then(data => setUserEvents(data))
  //     .catch(error => console.error("Error fetching user events:", error));
  // }, []);
  
  // Load user events from localStorage
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('userEvents') || '[]');
    setUserEvents(savedEvents);
  }, []);

  const handleEditEvent = (id: string) => {
    // Navigate to the edit page with the event ID
    navigate(`/events/${id}/edit`);
  };

  const confirmDeleteEvent = (id: string) => {
    setEventToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteEvent = () => {
    if (eventToDelete) {
      // 🔗 Backend Integration Needed: Delete user's event from the backend
      // Expected API Route: DELETE /api/users/events/:id
      // Expected Response Format:
      // { success: true, message: "Event deleted successfully" }
      // Replace localStorage with an API call:
      // fetch(`/api/users/events/${eventToDelete}`, {
      //   method: 'DELETE'
      // })
      // .then(response => response.json())
      // .then(data => {
      //   if (data.success) {
      //     const updatedEvents = userEvents.filter(event => event.id !== eventToDelete);
      //     setUserEvents(updatedEvents);
      //     toast({
      //       title: "Event Deleted",
      //       description: "Your event has been deleted successfully.",
      //     });
      //   }
      // })
      // .catch(error => console.error("Error deleting event:", error))
      // .finally(() => {
      //   setDeleteDialogOpen(false);
      //   setEventToDelete(null);
      // });
      
      const updatedEvents = userEvents.filter(event => event.id !== eventToDelete);
      setUserEvents(updatedEvents);
      localStorage.setItem('userEvents', JSON.stringify(updatedEvents));
      
      toast({
        title: "Event Deleted",
        description: "Your event has been deleted successfully.",
      });
      
      setDeleteDialogOpen(false);
      setEventToDelete(null);
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <>
      <Card className="border border-gray-100/50 dark:border-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-ocean/5 to-transparent dark:from-ocean/10 dark:to-transparent border-b border-gray-100 dark:border-gray-800">
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-ocean/10 dark:bg-ocean/20">
              <Calendar className="h-5 w-5 text-ocean dark:text-ocean-light" />
            </div>
            <span>My Events</span>
          </CardTitle>
          <CardDescription>
            Events you've created and shared with the community.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {userEvents.length > 0 ? (
            <div className="space-y-4">
              {userEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="flex flex-col sm:flex-row gap-4 p-5 border border-gray-100/50 dark:border-gray-800/50 rounded-xl hover:border-ocean/20 dark:hover:border-ocean/30 hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-all duration-300 group"
                >
                  <div className="sm:w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img 
                      src={event.image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg group-hover:text-ocean dark:group-hover:text-ocean-light transition-colors duration-300">
                      {event.title}
                    </h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {formatDate(event.dateString || (event.date ? event.date.toString() : ''))} • {event.time} • {event.location}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2 mb-3">
                      {event.description}
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-ocean hover:text-ocean-dark hover:bg-ocean/10 dark:hover:bg-ocean/20"
                        onClick={() => handleEditEvent(event.id)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                        onClick={() => confirmDeleteEvent(event.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full mt-4 border-dashed border-gray-300 dark:border-gray-700 hover:border-ocean hover:bg-ocean/5 dark:hover:border-ocean-light dark:hover:bg-ocean/10 group"
                onClick={() => navigate('/events/create')}
              >
                <div className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 mr-2 group-hover:bg-ocean/10 dark:group-hover:bg-ocean/20 transition-colors duration-300">
                  <Plus className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-ocean dark:group-hover:text-ocean-light transition-colors duration-300" />
                </div>
                <span className="group-hover:text-ocean dark:group-hover:text-ocean-light transition-colors duration-300">Create New Event</span>
              </Button>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="bg-gray-50 dark:bg-gray-800/50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-10 w-10 text-gray-300 dark:text-gray-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">No events yet</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">You haven't created any events yet. Share your first event with the community!</p>
              <Button 
                onClick={() => navigate('/events/create')}
                className="bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-dark hover:to-ocean text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Event
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="border-none shadow-lg glassmorphism">
          <DialogHeader>
            <DialogTitle>Delete Event</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this event? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteEvent}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
