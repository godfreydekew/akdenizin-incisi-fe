
import { useState } from 'react';
import { Phone, Globe, Mail, Star, Heart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BusTimetable from './BusTimetable';

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

interface BusCardProps {
  bus: BusRoute;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

const BusCard = ({ bus, isSaved, onToggleSave }: BusCardProps) => {
  const [showTimetable, setShowTimetable] = useState(false);
  
  return (
    <>
      <Card className="h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                <img 
                  src={bus.logoUrl} 
                  alt={bus.company} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <CardTitle className="text-lg">{bus.company}</CardTitle>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(bus.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">{bus.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onToggleSave(bus.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <Heart className={isSaved ? "fill-red-500 text-red-500" : ""} size={18} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="space-y-3">
            <h3 className="font-medium">{bus.name}</h3>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">Price</p>
                <p className="font-medium">{bus.price}</p>
              </div>
              <div>
                <p className="text-gray-500">Duration</p>
                <p className="font-medium">{bus.duration}</p>
              </div>
              <div>
                <p className="text-gray-500">Seats Available</p>
                <p className="font-medium">{bus.seatsAvailable}</p>
              </div>
              <div>
                <p className="text-gray-500">Next Departure</p>
                <p className="font-medium">{bus.schedule[0]}</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-1">Stops</p>
              <div className="text-sm space-y-1">
                {bus.stops.map((stop, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-ocean"></div>
                    <span>{stop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-2">
          <Button className="w-full" onClick={() => setShowTimetable(true)}>See Timetable</Button>
          <div className="flex justify-between gap-2">
            <Button variant="outline" size="icon" className="flex-1">
              <Phone size={16} />
            </Button>
            <Button variant="outline" size="icon" className="flex-1">
              <Globe size={16} />
            </Button>
            <Button variant="outline" size="icon" className="flex-1">
              <Mail size={16} />
            </Button>
          </div>
        </CardFooter>
      </Card>
      
      <BusTimetable 
        bus={bus} 
        isOpen={showTimetable} 
        onClose={() => setShowTimetable(false)} 
      />
    </>
  );
};

export default BusCard;
