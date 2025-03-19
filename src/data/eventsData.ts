
// 🔗 Backend Integration Needed: Fetch real events data from the backend
// Expected API Route: GET /api/events
// Expected Response Format:
// [
//   {
//     id: "1",
//     title: "TRNC International Music Festival",
//     date: "2023-07-15",
//     time: "19:00",
//     location: "Bellapais Abbey, Kyrenia",
//     description: "Annual music festival featuring international and local musicians performing classical, jazz, and traditional Cypriot music.",
//     image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
//     category: "Music",
//   },
//   ...
// ]
// Replace the dummy events array below with API data in the Events.tsx component.

// Sample data for events
export const eventsData = [
  {
    id: '1',
    title: 'TRNC International Music Festival',
    date: '2023-07-15',
    time: '19:00',
    location: 'Bellapais Abbey, Kyrenia',
    description: 'Annual music festival featuring international and local musicians performing classical, jazz, and traditional Cypriot music.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    category: 'Music',
  },
  {
    id: '2',
    title: 'Traditional Crafts Exhibition',
    date: '2023-07-22',
    time: '10:00',
    location: 'Büyük Han, Nicosia',
    description: 'Showcasing traditional Cypriot crafts including pottery, weaving, and silverwork with demonstrations by local artisans.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    category: 'Culture',
  },
  {
    id: '3',
    title: 'Mediterranean Food Festival',
    date: '2023-08-05',
    time: '12:00',
    location: 'Kyrenia Harbor',
    description: 'A celebration of Mediterranean cuisine with food stalls, cooking demonstrations, and tastings of Cypriot delicacies.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    category: 'Food',
  },
  {
    id: '4',
    title: 'TRNC Film Festival',
    date: '2023-08-18',
    time: '20:00',
    location: 'Salamis Ancient Theater, Famagusta',
    description: 'International film festival featuring screenings of independent films from Cyprus and around the world.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    category: 'Film',
  },
  {
    id: '5',
    title: 'Ottoman Architecture Walking Tour',
    date: '2023-09-02',
    time: '09:00',
    location: 'Walled City, Famagusta',
    description: 'Guided walking tour exploring the Ottoman architectural heritage of Famagusta with expert historians.',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e',
    category: 'Tour',
  },
  {
    id: '6',
    title: 'Karpaz Peninsula Eco Festival',
    date: '2023-09-16',
    time: '11:00',
    location: 'Golden Beach, Karpaz Peninsula',
    description: 'Environmental festival promoting eco-tourism and conservation efforts in the Karpaz National Park.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    category: 'Environment',
  },
];

// 🔗 Backend Integration Needed: Fetch real event categories from the backend
// Expected API Route: GET /api/events/categories
// Expected Response Format:
// [
//   { name: "All", color: "bg-gray-500" },
//   { name: "Music", color: "bg-purple-500" },
//   ...
// ]
// Replace the dummy categories array below with API data in the Events.tsx component.

// Event categories with colors
export const categories = [
  { name: 'All', color: 'bg-gray-500' },
  { name: 'Music', color: 'bg-purple-500' },
  { name: 'Culture', color: 'bg-blue-500' },
  { name: 'Food', color: 'bg-green-500' },
  { name: 'Film', color: 'bg-red-500' },
  { name: 'Tour', color: 'bg-amber-500' },
  { name: 'Environment', color: 'bg-emerald-500' },
  { name: 'Workshop', color: 'bg-pink-500' },
  { name: 'Festival', color: 'bg-indigo-500' },
];
