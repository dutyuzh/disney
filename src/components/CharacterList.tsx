import React from 'react';
import CharacterCard from './CharacterCard';

// Define the structure of a single character
export interface Character {
  _id: number; // Unique identifier for the character
  films: string[]; // List of films the character appears in
  shortFilms: string[]; // List of short films the character appears in
  tvShows: string[]; // List of TV shows the character appears in
  videoGames: string[]; // List of video games the character appears in
  parkAttractions: string[]; // List of park attractions the character is involved in
  allies: string[]; // List of allies (if available)
  enemies: string[]; // List of enemies (if available)
  sourceUrl: string; // URL to the character's source page
  name: string; // Name of the character
  imageUrl: string; // URL of the character's image
  createdAt: string; // Date the character was created
  updatedAt: string; // Date the character data was last updated
  url: string; // URL to access the character's API data
  __v: number; // Version number (often used for database records)
}

interface CharacterListProps {
  characters: Character[];
  searchString: string;
  onClickViewDetails: (id: number, sourceUrl: string, updatedAt: string) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, onClickViewDetails }) => {


  return (
    <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {characters.length > 0 && (
        characters.map((character) => (
          <div key={character._id} className="w-full">
            <CharacterCard
              characterId={character._id}
              sourceUrl={character.sourceUrl}
              updatedAtDate={character.updatedAt}
              onClickViewDetails={onClickViewDetails}
              key={character._id}
              imageSrc={character.imageUrl}
              characterName={character.name}
              featuredFilms={character.films} />
          </div>
        ))
      )}
    </div>

  );
};


export default CharacterList;
