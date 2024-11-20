import React from 'react';
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
  return (
    <div className="p-[48px] flex md:flex-wrap sm:flex-wrap">
      {/* Left side - Image */}
      <div className="w-1/2 md:w-1/3 h-96 relative mb-6 md:mb-0">
        <Image
          src={imageSrc}
          alt={characterName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* Right side - Character Details */}
      <div className="w-full md:w-2/3 md:pl-4 pl-8">
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

        <Link href={srcUrl ? srcUrl : `/characters/${id}`} passHref target="_blank">
          <button className="border border-primary mt-6 bg-primary text-white hover:bg-white rounded-lg hover:text-primary px-[24px] py-[16px] shadow-black">
            Explore More Character Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetail;
