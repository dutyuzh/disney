import React, { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { Character } from '../components/CharacterList';
import disneyApiClient from '../pages/api/disneyApiClient';

// If loading a variable font, you don't need to specify the font weight
const lato = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Specify the weights you need
  variable: '--font-lato', // Optional: Use CSS variables for easier styling
});

// Define the types for pageProps
interface AppProps {
  Component: React.ComponentType<any>; // Page component
  pageProps: Record<string, unknown>; // Page props
}

// Define the expected API response structure
interface CharacterApiResponse {
  data: Character[];
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [characters, setCharacters] = useState<Character[]>([]); // Original character data
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]); // Filtered character data
  const [error, setError] = useState<string | null>(null);
  const [searchString, setSearchString] = useState<string>('');
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await disneyApiClient.get<CharacterApiResponse>('/character');
        const allCharacters = res.data.data || [];
        setCharacters(allCharacters);
        setFilteredCharacters(allCharacters.slice(0, 8)); // Initialize with all characters
      } catch (error) {
        setError('Failed to fetch characters');
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  // Function to handle search input and filter characters
  const handleSearch = (searchText: string) => {
    setSearchString(searchText); // Update search string state
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCharacters(filtered.slice(0, 8));
  };

  // Extract the first four characters for the featured section
  const featuredCharacterNames = ['ahadi', 'achilles', 'abdullah', 'amos'];
  const featuredCharacters = characters.filter(character =>
    featuredCharacterNames.includes(character.name.toLowerCase())
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${lato.variable} font-lato bg-light w-full min-h-screen h-full`}
      >
        <Navbar onSearch={handleSearch} />

        {error ? <p>Oops! The characters escaped the magic kingdom. Try again later.</p> :
          <Component 
            key={router.asPath} 
            {...pageProps} 
            filteredCharacters={filteredCharacters}
            featuredCharacters={featuredCharacters} 
            searchString={searchString} />
        }
        <Footer />
      </main>
    </>
  );
}
