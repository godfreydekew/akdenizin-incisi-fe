import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Bus, CarTaxiFront, Car, MapPin, Route, ChevronUp } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';

// Import refactored components
import RoutesSection from '@/components/transportation/RoutesSection';
import BusesSection from '@/components/transportation/BusesSection';
import TaxisSection from '@/components/transportation/TaxisSection';
import CarRentalsSection from '@/components/transportation/CarRentalsSection';
import RouteFinder from '@/components/transportation/RouteFinder';
import InfoCard from '@/components/transportation/InfoCard';

// Sample data for cities
const cities = [{
  id: 'c1',
  name: 'Kyrenia'
}, {
  id: 'c2',
  name: 'Nicosia'
}, {
  id: 'c3',
  name: 'Famagusta'
}, {
  id: 'c4',
  name: 'All Cities'
}];

// Sample data for transportation options - refer to the original sample data arrays

// Sample data for transportation options
const busRoutes = [{
  id: 'b1',
  name: 'Route 101: Nicosia - Kyrenia',
  company: 'TRNC Bus Services',
  logoUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  departureCity: 'Nicosia',
  arrivalCity: 'Kyrenia',
  stops: ['Nicosia Central Bus Station', 'Gönyeli', 'Çatalköy', 'Kyrenia Harbor'],
  schedule: ['07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00'],
  price: '20 TL',
  seatsAvailable: 14,
  duration: '45 min',
  contactPhone: '+90 533 123 4567',
  website: 'https://example.com/buses',
  email: 'info@trnc-bus.com',
  rating: 4.2,
  cities: ['Nicosia', 'Kyrenia']
}, {
  id: 'b2',
  name: 'Route 102: Kyrenia - Famagusta',
  company: 'Cyprus Express',
  logoUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  departureCity: 'Kyrenia',
  arrivalCity: 'Famagusta',
  stops: ['Kyrenia Harbor', 'Çatalköy', 'Tatlısu', 'Esentepe', 'Famagusta Central'],
  schedule: ['08:00', '10:30', '13:30', '16:00', '18:30'],
  price: '35 TL',
  seatsAvailable: 8,
  duration: '1 hour 20 min',
  contactPhone: '+90 533 765 4321',
  website: 'https://example.com/cyprus-express',
  email: 'info@cyprus-express.com',
  rating: 4.0,
  cities: ['Kyrenia', 'Famagusta']
}, {
  id: 'b3',
  name: 'Route 103: Nicosia - Famagusta',
  company: 'Famagusta Transit',
  logoUrl: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  departureCity: 'Nicosia',
  arrivalCity: 'Famagusta',
  stops: ['Nicosia Central Bus Station', 'Mağusa Gate', 'Famagusta Central'],
  schedule: ['06:30', '09:30', '12:30', '15:30', '18:30'],
  price: '25 TL',
  seatsAvailable: 22,
  duration: '1 hour',
  contactPhone: '+90 533 987 6543',
  website: 'https://example.com/famagusta-transit',
  email: 'info@famagusta-transit.com',
  rating: 4.5,
  cities: ['Nicosia', 'Famagusta']
}, {
  id: 'b4',
  name: 'Route 104: Kyrenia Coastal Route',
  company: 'Coastal Lines',
  logoUrl: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  departureCity: 'Kyrenia',
  arrivalCity: 'Kyrenia',
  stops: ['Kyrenia Harbor', 'Bellapais', 'Karşıyaka', 'Lapta', 'Alsancak'],
  schedule: ['08:30', '10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'],
  price: '15 TL',
  seatsAvailable: 17,
  duration: '35 min',
  contactPhone: '+90 533 345 6789',
  website: 'https://example.com/coastal-lines',
  email: 'info@coastal-lines.com',
  rating: 4.7,
  cities: ['Kyrenia']
}];
const taxiServices = [{
  id: 't1',
  name: 'Kyrenia Taxi Association',
  logoUrl: 'https://images.unsplash.com/photo-1585503418537-88331351ad99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  phone: '+90 533 123 4567',
  baseRate: '50 TL + 15 TL/km',
  areas: ['Kyrenia', 'Lapta', 'Karşıyaka', 'Alsancak', 'Çatalköy'],
  hours: '24/7',
  website: 'https://example.com/kyreniataxis',
  email: 'info@kyreniataxis.com',
  keywords: ['24/7 Service', 'Fixed Airport Rates', 'Credit Cards Accepted'],
  rating: 4.8,
  cities: ['Kyrenia']
}, {
  id: 't2',
  name: 'Nicosia Taxi Service',
  logoUrl: 'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  phone: '+90 533 987 6543',
  baseRate: '45 TL + 14 TL/km',
  areas: ['Nicosia', 'Gönyeli', 'Dikmen', 'Alayköy'],
  hours: '24/7',
  website: 'https://example.com/nicosiataxis',
  email: 'info@nicosiataxis.com',
  keywords: ['City Tours', 'English Speaking Drivers', 'Online Booking'],
  rating: 4.5,
  cities: ['Nicosia']
}, {
  id: 't3',
  name: 'Famagusta Taxi Cooperative',
  logoUrl: 'https://images.unsplash.com/photo-1621976360623-004223992275?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  phone: '+90 533 456 7890',
  baseRate: '45 TL + 14 TL/km',
  areas: ['Famagusta', 'Trikomo', 'Yeniboğaziçi'],
  hours: '06:00-00:00',
  website: 'https://example.com/famagustataxis',
  email: 'info@famagustataxis.com',
  keywords: ['Beach Transportation', 'Historical Tours', 'Cash Only'],
  rating: 4.3,
  cities: ['Famagusta']
}, {
  id: 't4',
  name: 'Airport Taxi Service',
  logoUrl: 'https://images.unsplash.com/photo-1554222413-474c49bc8c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  phone: '+90 533 789 0123',
  baseRate: 'Fixed rates: Ercan to Nicosia: 220 TL, Ercan to Kyrenia: 280 TL',
  areas: ['Ercan Airport', 'All major cities'],
  hours: '24/7',
  website: 'https://example.com/airporttaxis',
  email: 'info@airporttaxis.com',
  keywords: ['Airport Transfers', 'Pre-booking', 'Meet & Greet'],
  rating: 4.7,
  cities: ['Nicosia', 'Kyrenia', 'Famagusta']
}];
const carRentals = [{
  id: 'c1',
  name: 'Kyrenia Car Hire',
  logoUrl: 'https://images.unsplash.com/photo-1609520505218-7421df2a7363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  location: 'Kyrenia Harbor, near the castle',
  contactNumber: '+90 533 234 5678',
  rates: 'From 300 TL/day',
  vehicles: ['Economy', 'Compact', 'SUV', 'Luxury'],
  requirements: 'Valid driver\'s license, Credit card, Age 21+',
  website: 'https://example.com/kyreniacars',
  email: 'info@kyreniacars.com',
  keywords: ['Free GPS', 'No Deposit', 'Free Cancellation'],
  rating: 4.6,
  cities: ['Kyrenia']
}, {
  id: 'c2',
  name: 'Nicosia Auto Rentals',
  logoUrl: 'https://images.unsplash.com/photo-1572441832264-2ed6c37c3a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  location: 'Nicosia Central, near Ledra Street',
  contactNumber: '+90 533 345 6789',
  rates: 'From 280 TL/day',
  vehicles: ['Economy', 'Compact', 'Sedan', 'Minivan'],
  requirements: 'Valid driver\'s license, Credit card, Age 23+',
  website: 'https://example.com/nicosiacars',
  email: 'info@nicosiacars.com',
  keywords: ['Airport Delivery', 'Unlimited Mileage', 'Multi-day Discounts'],
  rating: 4.4,
  cities: ['Nicosia']
}, {
  id: 'c3',
  name: 'Famagusta Vehicle Hire',
  logoUrl: 'https://images.unsplash.com/photo-1604054094723-3a949e4a8d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  location: 'Near Famagusta Walled City',
  contactNumber: '+90 533 456 7891',
  rates: 'From 250 TL/day',
  vehicles: ['Economy', 'Compact', 'Sedan'],
  requirements: 'Valid driver\'s license, Credit card, Age 21+',
  website: 'https://example.com/famagustacars',
  email: 'info@famagustacars.com',
  keywords: ['Local Map Included', 'Student Discounts', '24/7 Support'],
  rating: 4.2,
  cities: ['Famagusta']
}, {
  id: 'c4',
  name: 'Airport Car Rental',
  logoUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  location: 'Ercan Airport, Arrival Hall',
  contactNumber: '+90 533 567 8901',
  rates: 'From 350 TL/day',
  vehicles: ['Economy', 'Compact', 'Sedan', 'SUV', 'Luxury'],
  requirements: 'Valid driver\'s license, Credit card, Passport, Age 25+',
  website: 'https://example.com/airportcars',
  email: 'info@airportcars.com',
  keywords: ['Meet & Greet', 'All-inclusive Insurance', 'Pre-booking'],
  rating: 4.7,
  cities: ['Nicosia', 'Kyrenia', 'Famagusta']
}];

// Sample user reviews data
const userReviews = [{
  id: 'r1',
  serviceId: 'b1',
  serviceType: 'bus',
  userName: 'Alex M.',
  rating: 4,
  comment: 'The bus was on time and clean. The driver was professional.',
  date: '2023-07-15'
}, {
  id: 'r2',
  serviceId: 't1',
  serviceType: 'taxi',
  userName: 'Maria K.',
  rating: 5,
  comment: 'Excellent service! The driver was very knowledgeable about the area.',
  date: '2023-08-02'
}, {
  id: 'r3',
  serviceId: 'c1',
  serviceType: 'car',
  userName: 'John D.',
  rating: 4,
  comment: 'Great car, no issues. Return process was quick and easy.',
  date: '2023-06-22'
}];

// Sample route data
const popularRoutes = [{
  id: 'r1',
  name: 'Nicosia → Kyrenia',
  departureCity: 'Nicosia',
  arrivalCity: 'Kyrenia',
  duration: '30 min',
  description: 'Scenic coastal road with beautiful views',
  transportOptions: ['bus', 'taxi', 'car'],
  price: {
    bus: '20 TL',
    taxi: '220 TL',
    car: 'Self-drive'
  },
  notes: 'Most popular route, frequent departures',
  imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'r2',
  name: 'Famagusta → Lefke',
  departureCity: 'Famagusta',
  arrivalCity: 'Lefke',
  duration: '1 hr 20 min',
  description: 'Historical tour route passing ancient sites',
  transportOptions: ['bus', 'taxi'],
  price: {
    bus: '35 TL',
    taxi: '350 TL'
  },
  notes: 'Historical route with beautiful scenery',
  imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'r3',
  name: 'Ercan Airport → Nicosia',
  departureCity: 'Ercan Airport',
  arrivalCity: 'Nicosia',
  duration: '25 min',
  description: 'Direct shuttle available for travelers',
  transportOptions: ['bus', 'taxi'],
  price: {
    bus: '30 TL',
    taxi: '180 TL'
  },
  notes: 'Airport transfer, runs every hour',
  imageUrl: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'r4',
  name: 'Kyrenia → Bellapais',
  departureCity: 'Kyrenia',
  arrivalCity: 'Bellapais Monastery',
  duration: '15 min',
  description: 'Cultural site route to historic monastery',
  transportOptions: ['bus', 'taxi', 'car'],
  price: {
    bus: '15 TL',
    taxi: '120 TL',
    car: 'Self-drive'
  },
  notes: 'Cultural destination, historic landmark',
  imageUrl: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'r5',
  name: 'Nicosia → Famagusta',
  departureCity: 'Nicosia',
  arrivalCity: 'Famagusta',
  duration: '1 hr',
  description: 'Direct route to the historic walled city',
  transportOptions: ['bus', 'taxi', 'car'],
  price: {
    bus: '25 TL',
    taxi: '280 TL',
    car: 'Self-drive'
  },
  notes: 'Regular departures throughout the day',
  imageUrl: 'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 'r6',
  name: 'Kyrenia → Karpaz',
  departureCity: 'Kyrenia',
  arrivalCity: 'Karpaz Peninsula',
  duration: '2 hr 30 min',
  description: 'Scenic ride to the untouched peninsula',
  transportOptions: ['taxi', 'car'],
  price: {
    taxi: '600 TL',
    car: 'Self-drive'
  },
  notes: 'Nature lovers route, wild donkey reserve',
  imageUrl: 'https://images.unsplash.com/photo-1604054094723-3a949e4a8d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}];
const Transportation = () => {
  const isMobile = useIsMobile();
  const {
    toast
  } = useToast();
  const [activeTab, setActiveTab] = useState('routes');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [savedServices, setSavedServices] = useState<string[]>([]);
  const [filteredBuses, setFilteredBuses] = useState(busRoutes);
  const [filteredTaxis, setFilteredTaxis] = useState(taxiServices);
  const [filteredCars, setFilteredCars] = useState(carRentals);
  const [showRouteFinder, setShowRouteFinder] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedRouteForFilter, setSelectedRouteForFilter] = useState<string | null>(null);
  const pageTopRef = useRef<HTMLDivElement>(null);

  // Filter transport options based on selected city
  useEffect(() => {
    if (selectedCity === 'All Cities') {
      setFilteredBuses(busRoutes);
      setFilteredTaxis(taxiServices);
      setFilteredCars(carRentals);
    } else {
      setFilteredBuses(busRoutes.filter(bus => bus.cities.includes(selectedCity)));
      setFilteredTaxis(taxiServices.filter(taxi => taxi.cities.includes(selectedCity)));
      setFilteredCars(carRentals.filter(car => car.cities.includes(selectedCity)));
    }
  }, [selectedCity]);

  // Additional filter for bus routes if coming from route details
  useEffect(() => {
    if (selectedRouteForFilter) {
      const routeObj = popularRoutes.find(r => r.id === selectedRouteForFilter);
      if (routeObj) {
        setFilteredBuses(busRoutes.filter(bus => bus.departureCity === routeObj.departureCity && bus.arrivalCity === routeObj.arrivalCity));
      }
    }
  }, [selectedRouteForFilter]);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Toggle saved status for a service
  const toggleSaveService = (id: string) => {
    setSavedServices(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  // Handle transport selection from route details
  const handleTransportSelect = (type: 'bus' | 'taxi' | 'car', route?: any) => {
    // Clear any existing route filter
    setSelectedRouteForFilter(null);

    // Change to appropriate tab
    setActiveTab(type === 'bus' ? 'buses' : type === 'taxi' ? 'taxis' : 'car-rentals');

    // If it's a bus and we have route info, filter buses by route
    if (type === 'bus' && route) {
      setSelectedRouteForFilter(route.id);
      // Also set city for consistency
      if (route.departureCity) {
        setSelectedCity(route.departureCity);
      }
    }
    // For taxi and car rental, just set the city filter
    else if (route && route.departureCity) {
      setSelectedCity(route.departureCity);
    }
  };
  return <PageLayout activeSection="transportation">
      <div ref={pageTopRef} className="container mx-auto px-4 pt-20 pb-8 md:py-8">
        <div className="max-w-7xl mx-auto py-[48px]">
          <h1 className="text-3xl font-bold mb-2">Transportation in TRNC</h1>
          <p className="text-gray-600 mb-8">Find the best way to get around Northern Cyprus</p>
          
          {/* City Selection Dropdown */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div className="w-full md:w-auto">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-ocean" />
                <span className="font-medium">Select City:</span>
              </div>
              <Select value={selectedCity} onValueChange={value => setSelectedCity(value)}>
                <SelectTrigger className="w-full md:w-[200px] mt-2">
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map(city => <SelectItem key={city.id} value={city.name}>
                      {city.name}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowRouteFinder(!showRouteFinder)}>
              <Route size={16} />
              {showRouteFinder ? "Hide Route Finder" : "Find Routes Between Cities"}
            </Button>
          </div>
          
          {/* Route Finder */}
          {showRouteFinder && <RouteFinder routes={popularRoutes} cities={cities} onSelectRoute={routeId => {
          const route = popularRoutes.find(r => r.id === routeId);
          if (route) {
            handleTransportSelect('bus', route);
          }
        }} />}
          
          {/* Transport Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-8 w-full">
              <TabsTrigger value="routes" className="flex items-center gap-2">
                <Route size={16} />
                <span>Routes</span>
              </TabsTrigger>
              <TabsTrigger value="buses" className="flex items-center gap-2">
                <Bus size={16} />
                <span className="hidden sm:inline">Buses & Public Transport</span>
                <span className="inline sm:hidden">Buses</span>
              </TabsTrigger>
              <TabsTrigger value="taxis" className="flex items-center gap-2">
                <CarTaxiFront size={16} />
                <span>Taxis</span>
              </TabsTrigger>
              <TabsTrigger value="car-rentals" className="flex items-center gap-2">
                <Car size={16} />
                <span>Car Rentals</span>
              </TabsTrigger>
            </TabsList>

            {/* Info Cards */}
            <InfoCard activeTab={activeTab} />
            
            {/* Routes Content */}
            <TabsContent value="routes">
              <RoutesSection routes={popularRoutes} onSelectTransport={handleTransportSelect} />
            </TabsContent>
            
            {/* Buses Content */}
            <TabsContent value="buses">
              <BusesSection buses={filteredBuses} savedServices={savedServices} onToggleSave={toggleSaveService} />
            </TabsContent>
            
            {/* Taxis Content */}
            <TabsContent value="taxis">
              <TaxisSection taxis={filteredTaxis} savedServices={savedServices} onToggleSave={toggleSaveService} />
            </TabsContent>
            
            {/* Car Rentals Content */}
            <TabsContent value="car-rentals">
              <CarRentalsSection carRentals={filteredCars} savedServices={savedServices} onToggleSave={toggleSaveService} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Back to Top Button */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition-colors z-50" aria-label="Back to top">
          <ChevronUp size={20} />
        </button>}
    </PageLayout>;
};
export default Transportation;