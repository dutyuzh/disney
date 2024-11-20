import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import EditProfile from "@/components/EditProfile";
import { formatDateToFriendlyString } from "@/utils/formatDateToFriendlyString";

interface UserProfile {
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
  state: string;
  favoriteCharacter: string;
  favoriteRide: string;
  favoriteMovie: string;
  favoriteDisneyland: string;
  lastUpdatedDate: string;
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const savedProfile = Cookies.get('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Function to calculate age from birthdate
  const calculateAge = (birthDate: string) => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDateObj.getMonth();
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  if (!profile) {
    return <EditProfile />;
  }

  const age = calculateAge(profile.birthDate);
  const updatedDate = formatDateToFriendlyString(new Date(profile.lastUpdatedDate).toLocaleDateString());

  return (
    <div className="bg-secondary mx-32 md:mx-12 sm:mx-8 px-20 py-8 md:px-12 sm:px-8">
      <h1 className="font-lato text-[40px] font-semibold">{profile.firstName} {profile.lastName}</h1>
      <small className="text-ellipsisdarkGray">Last Updated: {updatedDate}</small>
      <p className="mt-6"><strong>Age:</strong> {age}</p>
      <p className="mt-4"><strong>Location:</strong> {profile.city}{profile.city && profile.state && <>, </>} {profile.state}</p>
      <p className="mt-4"><strong>Favorite Disney Character:</strong> {profile.favoriteCharacter}</p>
      <p className="mt-4"><strong>Favorite Disney Ride:</strong> {profile.favoriteRide}</p>
      <p className="mt-4"><strong>Favorite Disney Movie:</strong> {profile.favoriteMovie}</p>
      <p className="mt-4"><strong>Favorite Disneyland:</strong> {profile.favoriteDisneyland}</p>
      <button className="mt-8 border bg-primary hover:border hover:border-primary text-white hover:bg-white rounded-lg hover:text-primary px-[24px] py-[12px] shadow-black" onClick={() => window.location.href = '/account/edit'}>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;
