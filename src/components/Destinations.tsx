
const Destinations = () => {
  // 🔗 Backend Integration Needed: Fetch destinations from the backend
  // Expected API Route: GET /api/destinations
  // Expected Response Format:
  // [
  //   {
  //     id: 1,
  //     name: "Kyrenia Harbor",
  //     description: "A picturesque historic harbor surrounded by restaurants and cafes.",
  //     image: "https://images.unsplash.com/photo-1590770423158-b670cb3badc2"
  //   },
  //   ...
  // ]
  // Replace the static destinations array below with an API call:
  // const [destinations, setDestinations] = useState([]);
  // useEffect(() => {
  //   fetch('/api/destinations')
  //     .then(response => response.json())
  //     .then(data => setDestinations(data))
  //     .catch(error => console.error("Error fetching destinations:", error));
  // }, []);
  
  const destinations = [{
    id: 1,
    name: "Kyrenia Harbor",
    description: "A picturesque historic harbor surrounded by restaurants and cafes.",
    image: "https://media.istockphoto.com/id/1177847896/photo/kyrenia.jpg?s=1024x1024&w=is&k=20&c=HkbXW1rYi9D0-nfhQnIiTPVh2APPZDeVXGcKl4szdSU="
  }, {
    id: 2,
    name: "Bellapais Abbey",
    description: "Gothic abbey ruins with breathtaking mountain and sea views.",
    image: "https://media.istockphoto.com/id/656336458/photo/bellapais-abbey-monastery-in-northern-cyprus.jpg?s=1024x1024&w=is&k=20&c=fLCHEv94p_srf__H9yKLaQ-LWCyI7JQ3-xFFsqP-4QU="
  }, {
    id: 3,
    name: "Famagusta",
    description: "Historical walled city with rich architectural heritage.",
    image: "https://media.istockphoto.com/id/1448279091/photo/landscape-with-nissi-beach-ayia-napa-cyprus.jpg?s=1024x1024&w=is&k=20&c=GVJ_BcZpfLN1DR1acFXjZnHh5OQgXLz-WjNxJLW0xU8="
  }, {
    id: 4,
    name: "Golden Beach",
    description: "Pristine sandy beach with crystal clear turquoise waters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
  }, {
    id: 5,
    name: "St. Hilarion Castle",
    description: "Fairytale-like castle perched atop a mountain with panoramic views.",
    image: "https://media.istockphoto.com/id/172207129/photo/st-hilarion-castle.jpg?s=1024x1024&w=is&k=20&c=C7uFTjJe03S6iYivmCPg2lRpZgKZ2OrY-922Sto65t8="
  }, {
    id: 6,
    name: "Salamis Ruins",
    description: "Ancient Roman ruins including a theater, gymnasium, and baths.",
    image: "https://media.istockphoto.com/id/1466368618/photo/vacation-in-turkey-view-of-ancient-city-hierapolis-during-summer.jpg?s=1024x1024&w=is&k=20&c=MiRXrv4XudthHx__Yk6IhNa_6k4fLZMWChrwU-27o2M="
  }];
  
  return <section id="destinations" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Popular Destinations</h2>
        <p className="section-subtitle text-center">
          Explore the most breathtaking and must-visit locations in Northern Cyprus
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {destinations.map(destination => <div key={destination.id} className="destination-card group">
              <div className="image-container h-56">
                <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
              </div>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="hero-button primary-button inline-block">
            View All Destinations
          </a>
        </div>
      </div>
    </section>;
};
export default Destinations;
