
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Clock } from 'lucide-react';

interface PopularRoute {
  id: string;
  name: string;
  departureCity: string;
  arrivalCity: string;
  duration: string;
  description: string;
  transportOptions: string[];
  price: {
    bus?: string;
    taxi?: string;
    car?: string;
  };
  notes: string;
  imageUrl: string;
}

interface RouteFinderProps {
  routes: PopularRoute[];
  cities: { id: string; name: string }[];
  onSelectRoute: (id: string) => void;
}

const RouteFinder = ({ routes, cities, onSelectRoute }: RouteFinderProps) => {
  const [originCity, setOriginCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  
  // Find routes between cities
  const findRoutes = () => {
    if (!originCity || !destinationCity) return [];
    
    return routes.filter(
      route => route.departureCity === originCity && route.arrivalCity === destinationCity
    );
  };
  
  const filteredCities = cities.filter(city => city.name !== 'All Cities');
  const matchedRoutes = findRoutes();

  return (
    <Card className="mb-8 bg-white border border-gray-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search size={18} className="text-ocean" />
          Route Finder
        </CardTitle>
        <CardDescription>Find the best transport options between cities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Origin City</label>
            <Select
              value={originCity}
              onValueChange={setOriginCity}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select origin city" />
              </SelectTrigger>
              <SelectContent>
                {filteredCities.map((city) => (
                  <SelectItem key={`origin-${city.id}`} value={city.name}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Destination City</label>
            <Select
              value={destinationCity}
              onValueChange={setDestinationCity}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select destination city" />
              </SelectTrigger>
              <SelectContent>
                {filteredCities.map((city) => (
                  <SelectItem key={`dest-${city.id}`} value={city.name}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          className="w-full md:w-auto"
          disabled={!originCity || !destinationCity}
        >
          Find Routes
        </Button>
        
        {originCity && destinationCity && matchedRoutes.length > 0 ? (
          <div className="mt-6">
            <h3 className="font-medium mb-3">Available Routes</h3>
            <div className="space-y-3">
              {matchedRoutes.map(route => (
                <div key={route.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{route.name}</p>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Clock size={14} className="mr-1" />
                      <span>{route.duration}</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onSelectRoute(route.id)}
                  >
                    Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ) : originCity && destinationCity ? (
          <div className="mt-6 text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No direct routes found between {originCity} and {destinationCity}</p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default RouteFinder;
