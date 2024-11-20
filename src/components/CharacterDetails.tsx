import React, { useState, useEffect } from 'react';
import disneyApiClient from '../pages/api/disneyApiClient';
import CharacterDetail from './CharacterDetail';
import { Character } from './CharacterList';
import Loading from './Loading';

interface CharacterDetailsProps {
    characterId: number;
    srcUrl: string;
    lastUpdatedDate: string;
    onGoBack: () => void;
}

interface ApiResponse {
    data: Character;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ characterId, srcUrl, lastUpdatedDate, onGoBack }) => {
    const [character, setCharacter] = useState<any>(null); // Replace with proper type
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            setLoading(true);
            try {
                // Replace with actual API call to fetch character details by `characterId`
                const res = await disneyApiClient.get<ApiResponse>(`/character/${characterId}`);
                setCharacter(res.data.data as Character);
                setLoading(false);
            } catch (err) {
                setError('We couldn’t fetch their details, but don’t worry, they’re probably off on an adventure! Try again later, and we’ll bring them back to you.');
                setLoading(false);
            }
        };

        fetchCharacterDetails();
    }, [characterId]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <CharacterDetail
                        lastUpdatedDate={character.updatedAt}
                        characterName={character.name}
                        films={character.films}
                        shortFilms={character.shortFilms}
                        tvShows={character.tvShows}
                        imageSrc={character.imageUrl}
                        id={character._id}
                        srcUrl={srcUrl}
                    />
                    <button
                        className="border border-primary ml-6 mb-6 bg-primary text-white hover:bg-white rounded-lg hover:text-black px-[24px] py-[16px] shadow-black"
                        onClick={onGoBack}>Back to List</button>
                </>
            )}
        </div>
    );
};

export default CharacterDetails;
