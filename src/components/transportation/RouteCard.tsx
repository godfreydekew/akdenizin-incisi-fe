
import { Route, Bus, CarTaxiFront, Car, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

interface RouteCardProps {
  route: PopularRoute;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

const RouteCard = ({ route, onSelect, isSelected }: RouteCardProps) => {
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-md ${isSelected ? 'ring-2 ring-ocean' : ''}`}
      onClick={() => onSelect(route.id)}
    >
      <div className="relative h-40 overflow-hidden">
        <img 
          src={route.imageUrl} 
          alt={route.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg">{route.name}</h3>
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <Clock size={14} className="mr-1" />
          <span>{route.duration}</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          {renderTransportIcons(route.transportOptions)}
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{route.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(route.id);
          }}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

// Helper function to render transport icons
const renderTransportIcons = (options: string[]) => {
  return (
    <div className="flex space-x-1">
      {options.includes('bus') && (
        <div className="p-1 bg-blue-50 rounded-full">
          <Bus size={14} className="text-blue-500" />
        </div>
      )}
      {options.includes('taxi') && (
        <div className="p-1 bg-yellow-50 rounded-full">
          <CarTaxiFront size={14} className="text-yellow-600" />
        </div>
      )}
      {options.includes('car') && (
        <div className="p-1 bg-green-50 rounded-full">
          <Car size={14} className="text-green-600" />
        </div>
      )}
    </div>
  );
};

export default RouteCard;
