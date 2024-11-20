import React, { useState, useEffect } from 'react';
import disneyApiClient from '../pages/api/disneyApiClient';
import CharacterDetail from './CharacterDetail';
import { Character } from './CharacterList';

interface CharacterDetailsProps {
  characterId: number;
  srcUrl: string,
  lastUpdatedDate: string,
  onGoBack: () => void;
}

interface ApiResponse {
    data: Character;
  }

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ characterId, srcUrl, lastUpdatedDate, onGoBack }) => {
  const [character, setCharacter] = useState<any>(null); // Replace with proper type
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        // Replace with actual API call to fetch character details by `characterId`
        const res = await disneyApiClient.get<ApiResponse>(`/character/${characterId}`);
        setCharacter(res.data.data as Character);
      } catch (err) {
        setError('Error fetching character details');
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
       <button className="border border-primary ml-6 mb-6 bg-primary text-white hover:bg-white rounded-lg hover:text-black px-[24px] py-[16px] shadow-black" onClick={onGoBack}>Back to List</button>
    </div>
  );
};

export default CharacterDetails;
