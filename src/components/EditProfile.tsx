import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Cookies from 'js-cookie';

interface UserProfile {
    firstName: string;
    lastName: string;
    birthDate: string;
    city: string;
    state: string;
    favoriteCharacter: string;
    favoriteRide: string,
    favoriteMovie: string;
    favoriteDisneyland: string;
    lastUpdatedDate: string;
}

const EditProfile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile>({
        firstName: '',
        lastName: '',
        birthDate: '',
        city: '',
        state: '',
        favoriteCharacter: '',
        favoriteRide: '',
        favoriteMovie: '',
        favoriteDisneyland: '',
        lastUpdatedDate: '',
    });

    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
        "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
        "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
        "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
        "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    // Load user profile from cookies if it exists
    useEffect(() => {
        const savedProfile = Cookies.get('userProfile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Get the current date
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        // Update the profile with the current date for lastUpdatedDate
        const updatedProfile = { ...profile, lastUpdatedDate: currentDate };

        // Set the cookie only if it doesn't already exist
        if (!Cookies.get('userProfile')) {
            Cookies.set('userProfile', JSON.stringify(updatedProfile), { expires: 7 });
        }
        alert('Profile updated successfully!');
        window.location.href = '/account/profile'; // Redirect back to the profile page
    };

    return (
        <div className="bg-secondary mx-32 md:mx-12 sm:mx-8 px-20 py-8 md:px-12 sm:px-8">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-textSecondary">First Name <span className="text-required">*</span></label>
                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-tertiary rounded-md"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-textSecondary">Last Name <span className="text-required">*</span></label>
                        <input
                            type="text"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-tertiary rounded-md"
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-textSecondary">Birth Date <span className="text-required">*</span></label>
                        <input
                            type="date"
                            name="birthDate"
                            value={profile.birthDate}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-tertiary rounded-md"
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-textSecondary">City</label>
                        <input
                            type="text"
                            name="city"
                            value={profile.city}
                            onChange={handleChange}
                            className="w-full p-2 border border-tertiary rounded-md"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-textSecondary">State</label>
                        <select
                            name="state"
                            value={profile.state}
                            onChange={handleChange}
                            className="w-full p-2 border border-tertiary rounded-md"
                        >
                            <option value="">Select a State</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-textSecondary">Favorite Disney Character</label>
                    <input
                        type="text"
                        name="favoriteCharacter"
                        value={profile.favoriteCharacter}
                        onChange={handleChange}
                        className="w-full p-2 border border-tertiary rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-textSecondary">Favorite Disney Ride</label>
                    <input
                        type="text"
                        name="favoriteRide"
                        value={profile.favoriteRide}
                        onChange={handleChange}
                        className="w-full p-2 border border-tertiary rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-textSecondary">Favorite Disney Movie</label>
                    <input
                        type="text"
                        name="favoriteMovie"
                        value={profile.favoriteMovie}
                        onChange={handleChange}
                        className="w-full p-2 border border-tertiary rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-textSecondary">Favorite Disneyland</label>
                    <input
                        type="text"
                        name="favoriteDisneyland"
                        value={profile.favoriteDisneyland}
                        onChange={handleChange}
                        className="w-full p-2 border border-tertiary rounded-md"
                    />
                </div>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="border bg-primary hover:border hover:border-primary text-white hover:bg-white rounded-lg hover:text-primary px-[24px] py-[12px] shadow-black"
                    >
                        Update Profile
                    </button>
                    <button
                        type="button"
                        className="border border-primary text-primary px-[24px] py-[12px] rounded-md hover:bg-primary-light hover:text-primary"
                        onClick={() => window.location.href = '/account/profile'}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
