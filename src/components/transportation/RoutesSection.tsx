
import { useState } from 'react';
import { CarouselItem } from '@/components/ui/carousel';
import { 
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RouteCard from './RouteCard';
import RouteDetails from './RouteDetails';
import { useIsMobile } from '@/hooks/use-mobile';

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

interface RoutesSectionProps {
  routes: PopularRoute[];
  onSelectTransport: (type: 'bus' | 'taxi' | 'car', route?: PopularRoute) => void;
}

const RoutesSection = ({ routes, onSelectTransport }: RoutesSectionProps) => {
  // 🔗 Backend Integration Needed: Fetch popular routes from the backend
  // Expected API Route: GET /api/transportation/routes
  // Expected Response Format:
  // [
  //   {
  //     id: "route1",
  //     name: "Kyrenia to Famagusta",
  //     departureCity: "Kyrenia",
  //     arrivalCity: "Famagusta",
  //     duration: "1h 30m",
  //     description: "Scenic coastal route connecting two historic cities...",
  //     transportOptions: ["bus", "taxi", "car"],
  //     price: {
  //       bus: "€5",
  //       taxi: "€35",
  //       car: "€20 (rental)"
  //     },
  //     notes: "Buses run every hour from the main terminal.",
  //     imageUrl: "https://example.com/kyrenia-famagusta.jpg"
  //   },
  //   ...
  // ]
  // This data would be fetched in the parent Transportation component
  // and passed to this component as props.
  
  const isMobile = useIsMobile();
  const [selectedRoute, setSelectedRoute] = useState<PopularRoute | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleRouteSelect = (route: PopularRoute) => {
    setSelectedRoute(route);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedRoute(null), 300); // Clear after animation
  };

  return (
    <div className="space-y-6 pt-4">
      <RouteDetails 
        route={selectedRoute} 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectTransport={onSelectTransport}
      />
      
      {isMobile ? (
        <Carousel className="w-full">
          <CarouselContent>
            {routes.map((route) => (
              <CarouselItem key={route.id} className="basis-full">
                <RouteCard 
                  route={route} 
                  onSelect={() => handleRouteSelect(route)}
                  isSelected={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {routes.map((route) => (
            <RouteCard 
              key={route.id} 
              route={route} 
              onSelect={() => handleRouteSelect(route)}
              isSelected={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoutesSection;
