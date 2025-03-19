
import { Button } from '@/components/ui/button';

interface CategoryType {
  name: string;
  color: string;
}

interface EventCategoriesProps {
  categories: CategoryType[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const EventCategories = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: EventCategoriesProps) => {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex gap-2 min-w-max pb-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            className="flex items-center gap-1"
            onClick={() => onSelectCategory(category.name)}
          >
            <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
