
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const LogoutButton = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  return (
    <div className="flex justify-end">
      <Button 
        variant="outline" 
        className="flex gap-2 items-center text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200"
        onClick={handleLogout}
      >
        <LogOut className="h-4 w-4" />
        Log Out
      </Button>
    </div>
  );
};
