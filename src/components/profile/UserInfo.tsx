import { User, Mail, MapPin, Calendar, Heart, Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ProfilePicture } from './ProfilePicture';

export const UserInfo = () => {
  const userInfo = {
    profilePicture: "/placeholder.svg",
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'Nicosia, Cyprus',
    joinedDate: 'January 2023',
    interests: 'Photography, Hiking, Local Cuisine',
    bio: 'Avid traveler exploring the beauty of Northern Cyprus. Love to share my experiences and connect with locals.'
  };

  const [profileImage, setProfileImage] = useState(userInfo.profilePicture);
  const { toast } = useToast();

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

  return (
    <Card className="border border-gray-100/50 dark:border-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-ocean/5 to-transparent dark:from-ocean/10 dark:to-transparent border-b border-gray-100 dark:border-gray-800">
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-ocean/10 dark:bg-ocean/20">
            <User className="h-5 w-5 text-ocean dark:text-ocean-light" />
          </div>
          <span>Profile Information</span>
        </CardTitle>
        <CardDescription>
          Your public profile information visible to others
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
          <div className="relative w-60 ">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border border-gray-300 dark:border-gray-700 shadow-md"
            />
            
            <label 
              htmlFor="profile-image" 
              className="absolute bottom-2 right-2 bg-ocean text-white p-2 rounded-full cursor-pointer hover:bg-ocean-dark transition-all shadow-lg"
            >
              <Camera className="h-5 w-5" />
            </label>
            <input 
              id="profile-image" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageChange} 
            />
          </div>

          {/* User Info */}
          <div className="space-y-4 w-full">
            {[
              { icon: <User className="h-4 w-4" />, label: "Name", value: userInfo.name },
              { icon: <Mail className="h-4 w-4" />, label: "Email", value: userInfo.email },
              { icon: <MapPin className="h-4 w-4" />, label: "Location", value: userInfo.location },
              { icon: <Calendar className="h-4 w-4" />, label: "Joined", value: userInfo.joinedDate },
              { icon: <Heart className="h-4 w-4" />, label: "Interests", value: userInfo.interests }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 min-w-32">
                  {item.icon}
                  <span className="font-medium">{item.label}:</span>
                </div>
                <span>{item.value}</span>
              </div>
            ))}

            {/* Bio Section */}
            <div className="flex flex-col gap-2">
              <span className="font-medium text-gray-600 dark:text-gray-400">Bio:</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {userInfo.bio}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
