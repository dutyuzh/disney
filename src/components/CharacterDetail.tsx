import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDateToFriendlyString } from "@/utils/formatDateToFriendlyString";

interface CharacterDetailProps {
  characterName: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  imageSrc: string;
  id: number;
  srcUrl: string,
  lastUpdatedDate: string,
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  characterName,
  films,
  shortFilms,
  tvShows,
  imageSrc,
  id,
  srcUrl,
  lastUpdatedDate,
}) => {
  const updatedDate = formatDateToFriendlyString(new Date(lastUpdatedDate).toLocaleDateString());
  const [imageError, setImageError] = useState(false);

  return (
    <div className="px-[80px] lg:px-[40px] flex md:flex-wrap sm:flex-wrap">
      {/* Left side - Image */}
      <div className="w-1/2 lg:w-full h-96 relative mb-6 md:mb-2">
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={characterName}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
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
      {/* Right side - Character Details */}
      <div className="w-full lg:w-100 md:pl-0 pl-6">
        <h1 className="text-3xl font-bold text-gray-900">{characterName}</h1>
        <p className="text-sm text-gray-500 mt-2">Last Updated: {updatedDate}</p>

        {films &&
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Featured Films</h3>
            <ul className="list-disc pl-6 text-textSecondary">
              {films.map((film, index) => (
                <li key={index}>{film}</li>
              ))}
            </ul>
          </div>
        }
        {shortFilms &&
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Short Films</h3>
            <ul className="list-disc pl-6 text-textSecondary">
              {shortFilms.map((film, index) => (
                <li key={index}>{film}</li>
              ))}
            </ul>
          </div>
        }
        {tvShows &&
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">TV Shows</h3>
            <ul className="list-disc pl-6 text-textSecondary">
              {tvShows.map((show, index) => (
                <li key={index}>{show}</li>
              ))}
            </ul>
          </div>
        }

        <Link href={srcUrl} passHref target="_blank">
          <button className="btn btn-primary mt-4">
            Explore More Character Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetail;
