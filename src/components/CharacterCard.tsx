import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CharacterProps {
  imageSrc: string;
  characterName: string;
  featuredFilms: string[];
  id: number;
}

const Character: React.FC<CharacterProps> = ({ imageSrc, characterName, featuredFilms, id }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="max-w-xs overflow-hidden bg-white flex flex-col h-full">
      {/* Image at the top */}
      <div className="relative w-full h-60">
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={characterName}
            layout="fill"
            objectFit="cover"
            onError={() => {
              setImageError(true); // Trigger fallback to gray background
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            {/* Optional text or icon can be placed here */}
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

        <div className="text-xs inline-block font-semibold underline uppercase mt-auto">
          View Profile
        </div>
      </div>
    </div>
  );
};

export default Character;
