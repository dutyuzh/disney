
import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import CharacterList, { Character } from '../components/CharacterList';
import FeaturedCharacter from "@/components/FeaturedCharacter";

interface HomeProps {
  filteredCharacters: Character[];
  featuredCharacters: Character[];
  searchString: string;
}

export default function Home({ filteredCharacters, featuredCharacters, searchString }: HomeProps) {
  
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
        <Layout className="bg-secondary">
          {filteredCharacters && <CharacterList searchString={searchString} characters={filteredCharacters}/>}
          {featuredCharacters && <FeaturedCharacter characters={featuredCharacters} />}
        </Layout>
      </article>
    </>
  );
  
}
