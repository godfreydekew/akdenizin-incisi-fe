import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
interface EventsSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}
export const EventsSearch = ({
  searchTerm,
  onSearchChange
}: EventsSearchProps) => {
  return <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
        <p className="text-gray-600">Discover cultural events, festivals, and activities across Northern Cyprus</p>
      </div>
      
      <div className="flex gap-2 w-full md:w-auto">
        <div className="relative flex-1 md:flex-initial">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input placeholder="Search events..." className="pl-10" value={searchTerm} onChange={e => onSearchChange(e.target.value)} />
        </div>
        
      </div>
    </div>;
};