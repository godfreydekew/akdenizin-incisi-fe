
// 🔗 Backend Integration Needed: Fetch detailed event data from the backend
// Expected API Route: GET /api/events (with detailed information)
// Expected Response Format:
// [
//   {
//     id: "1",
//     title: "TRNC International Music Festival",
//     date: "2023-07-15",
//     time: "19:00",
//     location: "Bellapais Abbey, Kyrenia",
//     description: "Annual music festival featuring international and local musicians...",
//     image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
//     category: "Music",
//     organizer: "TRNC Cultural Ministry",
//     website: "https://example.com/festival",
//     ticketPrice: "€25-€75",
//     attendees: 42
//   },
//   ...
// ]
// Replace the dummy events array below with API data in the useEventData hook.

// Sample data for events
export const eventsSampleData = [
  {
    id: '1',
    title: 'TRNC International Music Festival',
    date: '2023-07-15',
    time: '19:00',
    location: 'Bellapais Abbey, Kyrenia',
    description: 'Annual music festival featuring international and local musicians performing classical, jazz, and traditional Cypriot music. The festival takes place in the stunning Bellapais Abbey, a Gothic monastery built in the 13th century, creating a magical atmosphere for music performances. Visitors can enjoy a diverse range of musical styles in a historic setting with panoramic views of Kyrenia and the Mediterranean coast. The event attracts renowned musicians from across Europe and the Middle East, showcasing both traditional and contemporary compositions.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    category: 'Music',
    organizer: 'TRNC Cultural Ministry',
    website: 'https://example.com/festival',
    ticketPrice: '€25-€75',
    attendees: 42
  },
  {
    id: '2',
    title: 'Traditional Crafts Exhibition',
    date: '2023-07-22',
    time: '10:00',
    location: 'Büyük Han, Nicosia',
    description: 'Showcasing traditional Cypriot crafts including pottery, weaving, and silverwork with demonstrations by local artisans. Büyük Han, a beautifully restored Ottoman caravanserai built in 1572, provides the perfect historic venue for this cultural exhibition. Visitors can watch artisans at work, learn about centuries-old techniques, and purchase authentic handcrafted items directly from the makers. The exhibition includes interactive workshops where visitors can try their hand at various crafts and learn about the cultural significance behind different artistic traditions in Northern Cyprus.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    category: 'Culture',
    organizer: 'Nicosia Municipality',
    website: 'https://example.com/crafts',
    ticketPrice: 'Free',
    attendees: 86
  },
  {
    id: '3',
    title: 'Mediterranean Food Festival',
    date: '2023-08-05',
    time: '12:00',
    location: 'Kyrenia Harbor',
    description: 'A celebration of Mediterranean cuisine with food stalls, cooking demonstrations, and tastings of Cypriot delicacies. The picturesque harbor of Kyrenia offers a stunning backdrop for this culinary festival, where visitors can sample dishes from across Cyprus, Greece, Turkey, Lebanon, and Italy. Local chefs will showcase traditional cooking methods and share recipes passed down through generations. The festival highlights the rich culinary heritage of the region and the fusion of flavors that make Mediterranean cuisine so beloved worldwide. Special events include olive oil tastings, wine pairings, and competitive cooking challenges.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    category: 'Food',
    organizer: 'Kyrenia Tourism Board',
    website: 'https://example.com/foodfest',
    ticketPrice: '€15',
    attendees: 124
  },
  {
    id: '4',
    title: 'TRNC Film Festival',
    date: '2023-08-18',
    time: '20:00',
    location: 'Salamis Ancient Theater, Famagusta',
    description: 'International film festival featuring screenings of independent films from Cyprus and around the world. Held in the atmospheric ancient Roman theater at Salamis, this festival combines cinema with history, screening films under the stars in a venue that dates back to the 1st century CE. The program includes feature films, documentaries, and short films, with a special focus on Mediterranean storytelling and emerging directors from the region. Directors and actors will be present for Q&A sessions, and workshops on filmmaking will be available for aspiring creators.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    category: 'Film',
    organizer: 'TRNC Film Commission',
    website: 'https://example.com/filmfest',
    ticketPrice: '€10-€30',
    attendees: 67
  },
  {
    id: '5',
    title: 'Ottoman Architecture Walking Tour',
    date: '2023-09-02',
    time: '09:00',
    location: 'Walled City, Famagusta',
    description: 'Guided walking tour exploring the Ottoman architectural heritage of Famagusta with expert historians. This comprehensive tour takes visitors through the walled city of Famagusta, exploring buildings that showcase the distinctive characteristics of Ottoman architecture that flourished after 1571. Participants will learn about the adaptation of Byzantine churches into mosques, the development of public baths (hammams), and the evolution of residential architecture in the region. The tour offers insights into how political, religious, and cultural changes shaped the urban landscape of this historic Mediterranean port city.',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e',
    category: 'Tour',
    organizer: 'Famagusta Heritage Society',
    website: 'https://example.com/ottomantour',
    ticketPrice: '€20',
    attendees: 16
  },
  {
    id: '6',
    title: 'Karpaz Peninsula Eco Festival',
    date: '2023-09-16',
    time: '11:00',
    location: 'Golden Beach, Karpaz Peninsula',
    description: 'Environmental festival promoting eco-tourism and conservation efforts in the Karpaz National Park. Set on one of the most pristine beaches in the Mediterranean, this festival brings together environmentalists, local communities, and tourists to celebrate and protect the natural beauty of the Karpaz Peninsula. Activities include guided nature walks to spot the famous wild donkeys, marine conservation talks, beach clean-ups, and sustainable living workshops. Local organic producers will offer food and products, and traditional Cypriot music and dance performances will take place throughout the day, highlighting the connection between cultural and natural heritage.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    category: 'Environment',
    organizer: 'Karpaz Conservation Initiative',
    website: 'https://example.com/ecofest',
    ticketPrice: '€5 (Donation)',
    attendees: 93
  }
];

// 🔗 Backend Integration Needed: Fetch event category styling data from the backend
// Expected API Route: GET /api/events/categories/styles
// Expected Response Format:
// {
//   "Music": "bg-purple-100 text-purple-700",
//   "Culture": "bg-blue-100 text-blue-700",
//   ...
// }
// Replace the dummy categoryColors object below with API data in the EventDetails component.

// Event categories with colors
export const categoryColors: Record<string, string> = {
  'Music': 'bg-purple-100 text-purple-700',
  'Culture': 'bg-blue-100 text-blue-700',
  'Food': 'bg-green-100 text-green-700',
  'Film': 'bg-red-100 text-red-700',
  'Tour': 'bg-amber-100 text-amber-700',
  'Environment': 'bg-emerald-100 text-emerald-700'
};
