
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { EventsHeader } from '@/components/events/EventsHeader';
import { EventsSearch } from '@/components/events/EventsSearch';
import { EventCategories } from '@/components/events/EventCategories';
import { EventsList } from '@/components/events/EventsList';
import { NoResults } from '@/components/events/NoResults';
import { eventsData, categories } from '@/data/eventsData';
const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 🔗 Backend Integration Needed: Fetch user-created events from the backend
  // Expected API Route: GET /api/users/events
  // Expected Response Format:
  // [
  //   {
  //     id: "user1",
  //     title: "Community Meetup",
  //     date: "2023-10-15",
  //     ...
  //   },
  //   ...
  // ]
  // Replace localStorage with an API call:
  // const [userEvents, setUserEvents] = useState([]);
  // useEffect(() => {
  //   fetch('/api/users/events')
  //     .then(response => response.json())
  //     .then(data => setUserEvents(data))
  //     .catch(error => console.error("Error fetching user events:", error));
  // }, []);

  // Get user-created events from localStorage
  const userEvents = JSON.parse(localStorage.getItem('userEvents') || '[]');

  // 🔗 Backend Integration Needed: Fetch all events from the backend
  // Expected API Route: GET /api/events
  // Expected Response Format:
  // [
  //   {
  //     id: "1",
  //     title: "TRNC International Music Festival",
  //     ...
  //   },
  //   ...
  // ]
  // Replace the static imports with API calls and useState:
  // const [events, setEvents] = useState([]);
  // const [eventCategories, setEventCategories] = useState([]);
  // useEffect(() => {
  //   Promise.all([
  //     fetch('/api/events').then(res => res.json()),
  //     fetch('/api/events/categories').then(res => res.json())
  //   ])
  //   .then(([eventsData, categoriesData]) => {
  //     setEvents(eventsData);
  //     setEventCategories(categoriesData);
  //   })
  //   .catch(error => console.error("Error fetching events data:", error));
  // }, []);

  // Combine demo events with user-created events
  const allEvents = [...eventsData, ...userEvents];

  // Filter events based on search term and category
  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || event.description.toLowerCase().includes(searchTerm.toLowerCase()) || event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };
  return <PageLayout>
      <div className="container mx-auto px-6 py-[91px]">
        <EventsHeader />
        <EventsSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <EventCategories categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        
        {filteredEvents.length > 0 ? <EventsList events={filteredEvents} /> : <NoResults onClearFilters={clearFilters} />}
      </div>
    </PageLayout>;
};
export default Events;
