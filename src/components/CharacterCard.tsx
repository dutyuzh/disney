import React, { useState } from 'react';
import Image from 'next/image';

interface CharacterProps {
  characterId: number;
  sourceUrl: string;
  updatedAtDate: string;
  imageSrc: string;
  characterName: string;
  featuredFilms: string[];
  onClickViewDetails: (id: number, sourceUrl: string, updatedAt: string) => void;
}

const Character: React.FC<CharacterProps> = ({ 
  characterId, 
  sourceUrl, 
  updatedAtDate, 
  imageSrc, 
  characterName, 
  featuredFilms, 
  onClickViewDetails 
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="max-w-xs overflow-hidden bg-white flex flex-col h-full">
      {/* Image at the top */}
      <div className="relative w-full h-60">
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={characterName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            onError={() => {
              setImageError(true); // Trigger fallback to gray background
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-textSecondary">Image not available</span>
          </div>
        )}
      </div>

      {/* Description and "View Profile" at the bottom */}
      <div className="p-4 text-center flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {characterName}
        </h2>

        <h3 className="text-lg font-semibold">Featured Films</h3>

        <div className="text-xs line-clamp-2 overflow-hidden whitespace-normal mb-4 flex-grow">
          {featuredFilms.map((film, index) => (
            <span key={index}>
              {film}
              {index < featuredFilms.length - 1 && ', '}
            </span>
          ))}
        </div>

        <div onClick={() => onClickViewDetails(characterId, sourceUrl, updatedAtDate)} 
          className="hover:cursor-pointer text-xs inline-block font-semibold underline uppercase mt-auto">
          View Profile
        </div>
      </div>
    </div>
  );
};

export default Character;
