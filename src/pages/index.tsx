
import React, { useState } from 'react';
import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import CharacterList, { Character } from '../components/CharacterList';
import FeaturedCharacter from "@/components/FeaturedCharacter";
import CharacterDetails from "@/components/CharacterDetails";

interface HomeProps {
  filteredCharacters: Character[];
  featuredCharacters: Character[];
  searchString: string;
}

export default function Home({ filteredCharacters, featuredCharacters, searchString }: HomeProps) {
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
      <Head>
        <title>Disney Fan Site | Explore Your Favorite Characters</title>
        <meta
          name="description"
          content="Welcome to the ultimate Disney fan site! Dive into the enchanting world of Disney, 
          where you can search and learn about your favorite characters, explore magical stories, 
          and celebrate the magic of Disney. Join us for a whimsical journey filled with fun and nostalgia."
        />
      </Head>

      <TransitionEffect />

      <article
        className={`flex min-h-screen items-start text-dark sm:items-start mx-32 lg:mx-16 md:mx-12 sm:mx-8`}
      >
        <Layout className="bg-secondary pt-[40px]">

          {selectedCharacterId ? (
            <CharacterDetails
              characterId={selectedCharacterId}
              onGoBack={handleGoBack}
              srcUrl={selectedSourceUrl || ''}
              lastUpdatedDate={selectedUpdatedDate || ''}
            />
          ) : (
            <div className="">
              {searchString && (
                <h2 className="text-[36px] text-center">
                  Search Results - {searchString}
                </h2>
              )}
              {filteredCharacters.length === 0 && <p className="text-2xl font-bold text-center">Oops! Even magic couldn't find that character. Try another spell (or name)!</p>}
            </div>
          )}
          {filteredCharacters && !selectedCharacterId &&
            <div className="p-[80px] pt-[40px]">
              <CharacterList
                onClickViewDetails={handleViewDetails}
                searchString={searchString}
                characters={filteredCharacters} />
            </div>
          }

          {featuredCharacters &&
            <FeaturedCharacter
              onClickViewDetails={handleViewDetails}
              characters={featuredCharacters} />}
        </Layout>
      </article>
    </>
  );

}
