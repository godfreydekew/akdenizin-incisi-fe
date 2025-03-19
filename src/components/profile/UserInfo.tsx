
import { User, Mail, MapPin, Calendar, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const UserInfo = () => {
  // This would normally come from your authentication state
  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'Nicosia, Cyprus',
    joinedDate: 'January 2023',
    interests: 'Photography, Hiking, Local Cuisine',
    bio: 'Avid traveler exploring the beauty of Northern Cyprus. Love to share my experiences and connect with locals.'
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
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2 min-w-32 text-gray-600 dark:text-gray-400">
              <User className="h-4 w-4" />
              <span className="font-medium">Name:</span>
            </div>
            <span>{userInfo.name}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2 min-w-32 text-gray-600 dark:text-gray-400">
              <Mail className="h-4 w-4" />
              <span className="font-medium">Email:</span>
            </div>
            <span>{userInfo.email}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2 min-w-32 text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Location:</span>
            </div>
            <span>{userInfo.location}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2 min-w-32 text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span className="font-medium">Joined:</span>
            </div>
            <span>{userInfo.joinedDate}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2 min-w-32 text-gray-600 dark:text-gray-400">
              <Heart className="h-4 w-4" />
              <span className="font-medium">Interests:</span>
            </div>
            <span>{userInfo.interests}</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="font-medium">Bio:</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {userInfo.bio}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
