import React, { useState } from 'react';
import { Character } from './CharacterList'; 
import CharacterCard from './CharacterCard';
interface FeaturedCharacterProps {
  characters: Character[];
  onClickViewDetails: (id: number, sourceUrl: string, updatedAt: string) => void;
}

const FeaturedCharacter: React.FC<FeaturedCharacterProps> = ({ characters, onClickViewDetails }) => {
  return (
    <div className="bg-primary w-full px-20 py-10">
      <div className="text-white text-center mb-10 text-4xl">
        <h2>Featured Characters!</h2>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-2 gap-8" >
        {characters.map((character) => (
          <CharacterCard
            characterId={character._id}
            sourceUrl={character.sourceUrl}
            updatedAtDate={character.updatedAt}
            onClickViewDetails={onClickViewDetails}
            key={character._id}
            imageSrc={character.imageUrl}
            characterName={character.name}
            featuredFilms={character.films} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCharacter;
