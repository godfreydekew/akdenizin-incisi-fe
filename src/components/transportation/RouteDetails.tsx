
import { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bus, CarTaxiFront, Car, ArrowRight, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

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

interface RouteDetailsProps {
  route: PopularRoute | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectTransport: (type: 'bus' | 'taxi' | 'car', route?: PopularRoute) => void;
}

const RouteDetails = ({ route, isOpen, onClose, onSelectTransport }: RouteDetailsProps) => {
  const { toast } = useToast();
  
  if (!route) return null;
  
  const handleTransportSelect = (type: 'bus' | 'taxi' | 'car') => {
    onSelectTransport(type, route);
    onClose();
    toast({
      title: `Redirecting to ${type} services`,
      description: type === 'bus' ? `For route: ${route.departureCity} to ${route.arrivalCity}` : `In ${route.departureCity}`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md rounded-xl animate-fade-in">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span>{route.departureCity}</span>
            <ArrowRight size={16} className="text-gray-400" />
            <span>{route.arrivalCity}</span>
            <span className="ml-1 text-sm font-normal text-gray-500">({route.duration})</span>
          </DialogTitle>
          <DialogDescription>
            {route.name} - Transportation options
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] md:max-h-none pr-4">
          <div className="space-y-6 mt-2">
            <div>
              <h3 className="font-medium text-sm text-gray-500">Description</h3>
              <p className="mt-1">{route.description}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-sm text-gray-500">Notes</h3>
              <p className="mt-1">{route.notes}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-sm text-gray-500 mb-2">Available Transport Options</h3>
              <div className="grid grid-cols-1 gap-2">
                {route.transportOptions.includes('bus') && (
                  <div 
                    className="p-3 border rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => handleTransportSelect('bus')}
                  >
                    <div className="flex items-center gap-2">
                      <Bus size={18} className="text-blue-500" />
                      <span>Bus</span>
                    </div>
                    <div className="text-sm font-medium">{route.price.bus}</div>
                  </div>
                )}
                
                {route.transportOptions.includes('taxi') && (
                  <div 
                    className="p-3 border rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => handleTransportSelect('taxi')}
                  >
                    <div className="flex items-center gap-2">
                      <CarTaxiFront size={18} className="text-yellow-600" />
                      <span>Taxi</span>
                    </div>
                    <div className="text-sm font-medium">{route.price.taxi}</div>
                  </div>
                )}
                
                {route.transportOptions.includes('car') && (
                  <div 
                    className="p-3 border rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => handleTransportSelect('car')}
                  >
                    <div className="flex items-center gap-2">
                      <Car size={18} className="text-green-600" />
                      <span>Car Rental</span>
                    </div>
                    <div className="text-sm font-medium">{route.price.car || 'Self-drive'}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RouteDetails;
