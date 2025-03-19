
import { Button } from '@/components/ui/button';

interface NoResultsProps {
  onClearFilters: () => void;
}

export const NoResults = ({ onClearFilters }: NoResultsProps) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium text-gray-600">No events match your search</h3>
      <p className="text-gray-500 mt-2">Try adjusting your filters or search term</p>
      <Button 
        variant="outline" 
        className="mt-4"
        onClick={onClearFilters}
      >
        Clear filters
      </Button>
    </div>
  );
};
