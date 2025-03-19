import { useState } from 'react';
import { Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
export const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState('/placeholder.svg');
  const {
    toast
  } = useToast();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
          toast({
            title: "Profile picture updated",
            description: "Your profile picture has been updated successfully."
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return 
     
  
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="relative">
            <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover border border-gray-200" />
            <label htmlFor="profile-image" className="absolute bottom-0 right-0 p-2 bg-ocean text-white rounded-full cursor-pointer hover:bg-ocean-dark transition-colors">
              <Camera className="h-4 w-4" />
            </label>
            <input id="profile-image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          </div>
         
        </div>
;
};