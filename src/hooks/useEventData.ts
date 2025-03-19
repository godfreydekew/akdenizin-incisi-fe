
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { eventsSampleData } from '@/data/eventsSampleData';

export interface Event {
  id: string;
  title: string;
  date?: string;
  dateString?: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  organizer: string;
  website?: string;
  ticketPrice: string;
  attendees: number;
}

export const useEventData = (id: string | undefined) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!id) return;
    
    // 🔗 Backend Integration Needed: Fetch single event by ID from the backend
    // Expected API Route: GET /api/events/:id
    // Expected Response Format:
    // {
    //   id: "1",
    //   title: "TRNC International Music Festival",
    //   date: "2023-07-15",
    //   time: "19:00",
    //   location: "Bellapais Abbey, Kyrenia",
    //   description: "Annual music festival...",
    //   image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    //   category: "Music",
    //   organizer: "TRNC Cultural Ministry",
    //   website: "https://example.com/festival",
    //   ticketPrice: "€25-€75",
    //   attendees: 42
    // }
    // Replace the code below with an API call:
    // fetch(`/api/events/${id}`)
    //   .then(response => response.json())
    //   .then(data => setEvent(data))
    //   .catch(error => console.error("Error fetching event:", error));
    
    let foundEvent = eventsSampleData.find(event => event.id === id);
    if (!foundEvent) {
      const userEvents = JSON.parse(localStorage.getItem('userEvents') || '[]');
      foundEvent = userEvents.find((event: any) => event.id === id);
    }
    if (foundEvent) {
      setEvent(foundEvent);
    }
  }, [id]);

  useEffect(() => {
    if (event) {
      // 🔗 Backend Integration Needed: Check if the current user has saved this event
      // Expected API Route: GET /api/users/savedEvents
      // Expected Response Format:
      // [
      //   { id: "1", title: "Event 1", ... },
      //   { id: "2", title: "Event 2", ... }
      // ]
      // Replace localStorage with an API call to check if the event is saved by the user:
      // fetch('/api/users/savedEvents')
      //   .then(response => response.json())
      //   .then(savedEvents => {
      //     const isEventSaved = savedEvents.some(evt => evt.id === event.id);
      //     setIsSaved(isEventSaved);
      //   })
      //   .catch(error => console.error("Error fetching saved events:", error));
      
      const savedEvents = JSON.parse(localStorage.getItem('savedEvents') || '[]');
      const isEventSaved = savedEvents.some((evt: any) => evt.id === event.id);
      setIsSaved(isEventSaved);
    }
  }, [event]);

  const handleSaveEvent = () => {
    if (!event) return;
    
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);

    // 🔗 Backend Integration Needed: Save or unsave event for the current user
    // Expected API Routes: 
    // POST /api/users/savedEvents (to save)
    // DELETE /api/users/savedEvents/:id (to unsave)
    // Expected Request Body (for POST):
    // { eventId: "1" }
    // Expected Response: 
    // { success: true, message: "Event saved successfully" }
    // Replace localStorage with an API call:
    // if (newSavedState) {
    //   fetch('/api/users/savedEvents', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ eventId: event.id })
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       toast({
    //         title: "Event saved",
    //         description: "Event saved to your profile"
    //       });
    //     }
    //   });
    // } else {
    //   fetch(`/api/users/savedEvents/${event.id}`, {
    //     method: 'DELETE'
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       toast({
    //         title: "Event removed",
    //         description: "Event removed from your saved events"
    //       });
    //     }
    //   });
    // }

    const savedEvents = JSON.parse(localStorage.getItem('savedEvents') || '[]');
    if (isSaved) {
      const updatedSavedEvents = savedEvents.filter((evt: any) => evt.id !== event.id);
      localStorage.setItem('savedEvents', JSON.stringify(updatedSavedEvents));
    } else {
      if (!savedEvents.some((evt: any) => evt.id === event.id)) {
        savedEvents.push(event);
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
      }
    }
    
    toast({
      title: isSaved ? "Event removed" : "Event saved",
      description: isSaved ? "Event removed from your saved events" : "Event saved to your profile"
    });
  };

  const handleShareEvent = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Event link copied to clipboard"
    });
  };

  return {
    event,
    isSaved,
    handleSaveEvent,
    handleShareEvent
  };
};
