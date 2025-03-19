
import { Phone, Globe, Mail, Star, Heart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CarRental {
  id: string;
  name: string;
  logoUrl: string;
  location: string;
  contactNumber: string;
  rates: string;
  vehicles: string[];
  requirements: string;
  website: string;
  email: string;
  keywords: string[];
  rating: number;
  cities: string[];
}

interface CarRentalCardProps {
  carRental: CarRental;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

const CarRentalCard = ({ carRental, isSaved, onToggleSave }: CarRentalCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
              <img 
                src={carRental.logoUrl} 
                alt={carRental.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{carRental.name}</CardTitle>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(carRental.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                  />
                ))}
                <span className="ml-1 text-sm text-gray-600">{carRental.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onToggleSave(carRental.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <Heart className={isSaved ? "fill-red-500 text-red-500" : ""} size={18} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500">Rates</p>
            <p className="font-medium">{carRental.rates}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">{carRental.location}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-1">Available Vehicles</p>
            <div className="flex flex-wrap gap-1">
              {carRental.vehicles.map((vehicle, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  {vehicle}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Requirements</p>
            <p className="text-sm">{carRental.requirements}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-1">Features</p>
            <div className="flex flex-wrap gap-1">
              {carRental.keywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="bg-green-50 hover:bg-green-100 text-green-800 border-green-200">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-2">
        <Button className="w-full">Reserve Now</Button>
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
  );
};

export default CarRentalCard;
