
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import BusCard from './BusCard';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface BusRoute {
  id: string;
  name: string;
  company: string;
  logoUrl: string;
  departureCity: string;
  arrivalCity: string;
  stops: string[];
  schedule: string[];
  price: string;
  seatsAvailable: number;
  duration: string;
  contactPhone: string;
  website: string;
  email: string;
  rating: number;
  cities: string[];
}

interface BusesSectionProps {
  buses: BusRoute[];
  savedServices: string[];
  onToggleSave: (id: string) => void;
}

const BusesSection = ({ buses, savedServices, onToggleSave }: BusesSectionProps) => {
  const isMobile = useIsMobile();
  const [sortType, setSortType] = useState<'price' | 'rating' | 'duration'>('rating');

  const sortedBuses = [...buses].sort((a, b) => {
    if (sortType === 'price') {
      // Extract numbers from price strings (assuming format like "20 TL")
      const priceA = parseInt(a.price.split(' ')[0]);
      const priceB = parseInt(b.price.split(' ')[0]);
      return priceA - priceB;
    } else if (sortType === 'duration') {
      // Simple alphabetical sort for duration as a proxy for time
      return a.duration.localeCompare(b.duration);
    } else {
      // Sort by rating (descending)
      return b.rating - a.rating;
    }
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Available Bus Services</h2>
          <Separator />
        </div>
        
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Sort & Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[300px] rounded-t-xl">
              <div className="pt-6">
                <h3 className="text-lg font-medium mb-4">Sort By</h3>
                <div className="flex flex-col gap-2">
                  <Button 
                    variant={sortType === 'price' ? 'default' : 'outline'} 
                    onClick={() => setSortType('price')}
                    className="justify-start"
                  >
                    Price: Low to High
                  </Button>
                  <Button 
                    variant={sortType === 'rating' ? 'default' : 'outline'} 
                    onClick={() => setSortType('rating')}
                    className="justify-start"
                  >
                    Rating: High to Low
                  </Button>
                  <Button 
                    variant={sortType === 'duration' ? 'default' : 'outline'} 
                    onClick={() => setSortType('duration')}
                    className="justify-start"
                  >
                    Duration: Short to Long
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-2">
            <Button 
              variant={sortType === 'price' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setSortType('price')}
            >
              Price
            </Button>
            <Button 
              variant={sortType === 'rating' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setSortType('rating')}
            >
              Rating
            </Button>
            <Button 
              variant={sortType === 'duration' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setSortType('duration')}
            >
              Duration
            </Button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedBuses.map((bus) => (
          <BusCard 
            key={bus.id}
            bus={bus}
            isSaved={savedServices.includes(bus.id)}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
      {buses.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No bus services available for the selected route or city.
        </div>
      )}
    </div>
  );
};

export default BusesSection;
