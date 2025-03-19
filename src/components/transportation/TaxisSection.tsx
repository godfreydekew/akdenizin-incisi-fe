
import { Separator } from '@/components/ui/separator';
import TaxiCard from './TaxiCard';

interface TaxiService {
  id: string;
  name: string;
  logoUrl: string;
  phone: string;
  baseRate: string;
  areas: string[];
  hours: string;
  website: string;
  email: string;
  keywords: string[];
  rating: number;
  cities: string[];
}

interface TaxisSectionProps {
  taxis: TaxiService[];
  savedServices: string[];
  onToggleSave: (id: string) => void;
}

const TaxisSection = ({ taxis, savedServices, onToggleSave }: TaxisSectionProps) => {
  // 🔗 Backend Integration Needed: Fetch taxi services from the backend
  // Expected API Route: GET /api/transportation/taxis?city=:cityName
  // Expected Response Format:
  // [
  //   {
  //     id: "taxi1",
  //     name: "Kyrenia Express Taxi",
  //     logoUrl: "https://example.com/logo.png",
  //     phone: "+90 123 456 7890",
  //     baseRate: "€10 + €0.80/km",
  //     areas: ["City Center", "Airport", "Beaches"],
  //     hours: "24/7",
  //     website: "https://example.com",
  //     email: "info@example.com",
  //     keywords: ["reliable", "english-speaking", "card payment"],
  //     rating: 4.7,
  //     cities: ["Kyrenia", "Nicosia"]
  //   },
  //   ...
  // ]
  // This data would be fetched in the parent Transportation component
  // and passed to this component as props.

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Available Taxi Services</h2>
        <Separator />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {taxis.map((taxi) => (
          <TaxiCard
            key={taxi.id}
            taxi={taxi}
            isSaved={savedServices.includes(taxi.id)}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
      {taxis.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No taxi services available for the selected city.
        </div>
      )}
    </div>
  );
};

export default TaxisSection;
