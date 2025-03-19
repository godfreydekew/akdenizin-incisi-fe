
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

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

interface BusTimetableProps {
  bus: BusRoute | null;
  isOpen: boolean;
  onClose: () => void;
}

const BusTimetable = ({ bus, isOpen, onClose }: BusTimetableProps) => {
  if (!bus) return null;

  const morningTimes = bus.schedule.filter(time => {
    const hour = parseInt(time.split(':')[0]);
    return hour < 12;
  });

  const afternoonTimes = bus.schedule.filter(time => {
    const hour = parseInt(time.split(':')[0]);
    return hour >= 12 && hour < 17;
  });

  const eveningTimes = bus.schedule.filter(time => {
    const hour = parseInt(time.split(':')[0]);
    return hour >= 17;
  });

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md rounded-xl animate-fade-in">
        <DialogHeader>
          <DialogTitle className="text-xl">{bus.name} Timetable</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Schedule and route information for {bus.departureCity} to {bus.arrivalCity}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] md:h-auto pr-4">
          <div className="space-y-6 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Morning</h3>
                <ul className="space-y-1">
                  {morningTimes.length > 0 ? (
                    morningTimes.map((time, index) => (
                      <li key={index} className="text-sm py-1 px-2 bg-blue-50 rounded">
                        {time}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-400">No departures</li>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Afternoon</h3>
                <ul className="space-y-1">
                  {afternoonTimes.length > 0 ? (
                    afternoonTimes.map((time, index) => (
                      <li key={index} className="text-sm py-1 px-2 bg-blue-50 rounded">
                        {time}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-400">No departures</li>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Evening</h3>
                <ul className="space-y-1">
                  {eveningTimes.length > 0 ? (
                    eveningTimes.map((time, index) => (
                      <li key={index} className="text-sm py-1 px-2 bg-blue-50 rounded">
                        {time}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-400">No departures</li>
                  )}
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Route Information</h3>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">From:</span> {bus.departureCity}
                  </div>
                  <div>
                    <span className="text-gray-500">To:</span> {bus.arrivalCity}
                  </div>
                  <div>
                    <span className="text-gray-500">Duration:</span> {bus.duration}
                  </div>
                  <div>
                    <span className="text-gray-500">Price:</span> {bus.price}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Stops</h3>
              <ul className="space-y-1">
                {bus.stops.map((stop, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-ocean"></div>
                    <span className="text-sm">{stop}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-sm text-gray-500 italic mt-2">
              <p>* Timetable subject to change on holidays and weekends.</p>
              <p>* Please arrive 10 minutes before departure time.</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BusTimetable;
