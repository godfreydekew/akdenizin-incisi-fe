
import { Separator } from '@/components/ui/separator';
import PageLayout from '@/components/PageLayout';
import { ProfilePicture } from '@/components/profile/ProfilePicture';
import { UserInfo } from '@/components/profile/UserInfo';
import { UserEvents } from '@/components/profile/UserEvents';
import { SavedEvents } from '@/components/profile/SavedEvents';
import { ProfileForm } from '@/components/profile/ProfileForm';
import { PasswordForm } from '@/components/profile/PasswordForm';
import { LogoutButton } from '@/components/profile/LogoutButton';

const Profile = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

        <div className="grid gap-8">
          <ProfilePicture />
          <UserInfo />
          <UserEvents />
          <SavedEvents />
          <Separator className="my-2" />
          <h2 className="text-2xl font-semibold">Account Settings</h2>
          <ProfileForm />
          <PasswordForm />
          <Separator />
          <LogoutButton />
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
