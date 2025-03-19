
import { Separator } from '@/components/ui/separator';
import CarRentalCard from './CarRentalCard';

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

interface CarRentalsSectionProps {
  carRentals: CarRental[];
  savedServices: string[];
  onToggleSave: (id: string) => void;
}

const CarRentalsSection = ({ carRentals, savedServices, onToggleSave }: CarRentalsSectionProps) => {
  // 🔗 Backend Integration Needed: Fetch car rental services from the backend
  // Expected API Route: GET /api/transportation/car-rentals?city=:cityName
  // Expected Response Format:
  // [
  //   {
  //     id: "rental1",
  //     name: "Cyprus Car Rentals",
  //     logoUrl: "https://example.com/logo.png",
  //     location: "1234 Kyrenia Harbor Road",
  //     contactNumber: "+90 123 456 7890",
  //     rates: "From €20/day",
  //     vehicles: ["Economy", "SUV", "Luxury"],
  //     requirements: "Valid driver's license, minimum age 21",
  //     website: "https://example.com",
  //     email: "info@example.com",
  //     keywords: ["airport pickup", "no deposit", "unlimited mileage"],
  //     rating: 4.5,
  //     cities: ["Kyrenia", "Famagusta"]
  //   },
  //   ...
  // ]
  // This data would be fetched in the parent Transportation component
  // and passed to this component as props.

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Available Car Rental Services</h2>
        <Separator />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {carRentals.map((carRental) => (
          <CarRentalCard
            key={carRental.id}
            carRental={carRental}
            isSaved={savedServices.includes(carRental.id)}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
      {carRentals.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No car rental services available for the selected city.
        </div>
      )}
    </div>
  );
};

export default CarRentalsSection;
