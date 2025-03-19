
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Mail, Languages, User, MapPin, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Profile form schema
const profileFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  location: z.string().optional(),
  interests: z.string().optional(),
  bio: z.string().optional(),
  language: z.boolean(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export const ProfileForm = () => {
  const { toast } = useToast();

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      location: 'Nicosia, Cyprus',
      interests: 'Photography, Hiking, Local Cuisine',
      bio: 'Avid traveler exploring the beauty of Northern Cyprus. Love to share my experiences and connect with locals.',
      language: false,
    },
  });

  const onProfileSubmit = (data: ProfileFormValues) => {
    console.log('Profile data:', data);
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Edit Profile
        </CardTitle>
        <CardDescription>
          Update your personal details and preferences.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...profileForm}>
          <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
            <FormField
              control={profileForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={profileForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} readOnly className="bg-gray-50 dark:bg-gray-800 cursor-not-allowed" />
                  </FormControl>
                  <FormDescription>
                    Email cannot be changed. Contact support for assistance.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={profileForm.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="City, Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={profileForm.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Interests
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Photography, Hiking, Food, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={profileForm.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us a bit about yourself..." 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Brief description visible on your public profile.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="flex gap-1 items-center">
              <Check className="h-4 w-4" />
              Save Changes
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
