
import { EventCard } from './EventCard';

interface Event {
  id: string;
  title: string;
  date?: string;
  dateString?: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

interface EventsListProps {
  events: Event[];
}

export const EventsList = ({ events }: EventsListProps) => {
  // 🔗 Backend Integration Needed: Fetch events with pagination
  // Expected API Route: GET /api/events?page=1&limit=9
  // Expected Response Format:
  // {
  //   "events": [
  //     { id: "1", title: "TRNC International Music Festival", ... },
  //     ...
  //   ],
  //   "pagination": {
  //     "totalEvents": 27,
  //     "totalPages": 3,
  //     "currentPage": 1,
  //     "limit": 9
  //   }
  // }
  // This would require adding pagination state and UI components.

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-600">No events match your search</h3>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search term</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
