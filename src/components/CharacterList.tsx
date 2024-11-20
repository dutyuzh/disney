import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterDetails from './CharacterDetails';

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
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, searchString }) => {

  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(null);
  const [selectedSourceUrl, setSourceUrl] = useState<string | null>(null);
  const [selectedUpdatedDate, setUpdatedDate] = useState<string | null>(null);
  // Function to handle the "View Details" click
  const handleViewDetails = (id: number, sourceUrl: string, updatedAt: string) => {
    setSelectedCharacterId(id); // Set the selected character ID
    setSourceUrl(sourceUrl);
    setUpdatedDate(updatedAt)
  };

  // Function to handle going back to the character list
  const handleGoBack = () => {
    setSelectedCharacterId(null); // Reset the selected character ID
  };

  return (
    <>
      {selectedCharacterId === null ? (
        <div className="container mx-auto mb-20 px-20 py-10 xl:p-24 lg:p-16 md:p-12 sm:p-8 ">
          {searchString && (
            <h2 className="text-[36px] pb-8 text-center">
              Search Results - {searchString}
            </h2>
          )}
          {characters.length === 0 && <p className="text-2xl font-bold text-center">Oops! Even magic couldn't find that character. Try another spell (or name)!</p>}
          <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-2 gap-4" >
            {characters.length > 0 && (
              characters.map((character) => (
                <div key={character._id} className="hover:cursor-pointer" onClick={() => handleViewDetails(character._id, character.sourceUrl, character.updatedAt)}>
                  <CharacterCard
                    key={character._id}
                    imageSrc={character.imageUrl}
                    characterName={character.name}
                    featuredFilms={character.films}
                    id={character._id} />
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <CharacterDetails 
          characterId={selectedCharacterId} 
          onGoBack={handleGoBack} 
          srcUrl={selectedSourceUrl || ''} 
          lastUpdatedDate={selectedUpdatedDate || ''} />
      )}
    </>
  );
};


export default CharacterList;
