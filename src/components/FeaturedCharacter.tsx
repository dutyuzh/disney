import React, { useState } from 'react';
import { Character } from './CharacterList'; 
import CharacterCard from './CharacterCard';
interface FeaturedCharacterProps {
  characters: Character[];
}

const FeaturedCharacter: React.FC<FeaturedCharacterProps> = ({ characters }) => {
  return (
    <div className="bg-primary w-full px-20 py-10">
      <div className="text-white text-center mb-10 text-4xl">
        <h2>Featured Characters!</h2>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-2 gap-8" >
        {characters.map((character) => (
          <CharacterCard
            key={character._id}
            imageSrc={character.imageUrl}
            characterName={character.name}
            featuredFilms={character.films}
            id={character._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCharacter;
