
import { Info } from 'lucide-react';

interface InfoCardProps {
  activeTab: string;
}

const InfoCard = ({ activeTab }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 mb-8">
      {activeTab === 'routes' && (
        <div className="flex items-start gap-2 text-gray-700">
          <Info size={18} className="text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium">Popular Routes in TRNC</p>
            <p className="text-sm">Explore the most traveled routes in Northern Cyprus. Each card shows available transport options, estimated travel times, and key details to help you plan your journey.</p>
          </div>
        </div>
      )}
      
      {activeTab === 'buses' && (
        <div className="flex items-start gap-2 text-gray-700">
          <Info size={18} className="text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium">About public transportation in TRNC</p>
            <p className="text-sm">Buses are the main form of public transport in Northern Cyprus. Routes connect major cities and towns with regular schedules, though frequency may be reduced on weekends. Cash is the primary payment method, and exact change is appreciated.</p>
          </div>
        </div>
      )}
      
      {activeTab === 'taxis' && (
        <div className="flex items-start gap-2 text-gray-700">
          <Info size={18} className="text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium">About taxis in TRNC</p>
            <p className="text-sm">Taxis in Northern Cyprus generally don't use meters. It's advisable to agree on a price before starting your journey. Most taxis are available 24/7 in tourist areas and city centers. Some drivers may speak limited English.</p>
          </div>
        </div>
      )}
      
      {activeTab === 'car-rentals' && (
        <div className="flex items-start gap-2 text-gray-700">
          <Info size={18} className="text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium">About car rentals in TRNC</p>
            <p className="text-sm">Renting a car is the most flexible way to explore Northern Cyprus. An international driver's license is not mandatory but recommended. Drive on the left side of the road. Most rental agencies require a credit card for deposit.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
