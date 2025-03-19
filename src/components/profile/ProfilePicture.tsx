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
  return <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5" />
          Profile Picture
        </CardTitle>
        <CardDescription>
          Update your profile picture visible to other users.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="relative">
            <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover border border-gray-200" />
            <label htmlFor="profile-image" className="absolute bottom-0 right-0 p-2 bg-ocean text-white rounded-full cursor-pointer hover:bg-ocean-dark transition-colors">
              <Camera className="h-4 w-4" />
            </label>
            <input id="profile-image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Profile Photo</h3>
            <p className="text-gray-600 text-sm mb-4">
              JPG, GIF or PNG. Max size 800K.
            </p>
            
          </div>
        </div>
      </CardContent>
    </Card>;
};