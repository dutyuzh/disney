import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Disney Fan Site | 404 Page</title>
        <meta
          name="description"
          content="Step into the magic of our Disney fan site! Discover beloved characters, 
          explore fun facts, and immerse yourself in all things Disney. This page isn't 
          here, but the adventure continues on our homepage!"
        />
      </Head>
      <TransitionEffect />
      <main className="h-[75vh] w-full">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText text="404" className="" />
          <AnimatedText
            text="Oops! This page is lost in the Magic Kingdom."
            className="!text-7xl"
          />
          <Link
            href="/"
            className="self-center !mt-4 inline-block btn btn-secondary"
          >
            Return to Home
          </Link>
        </Layout>
      </main>
    </>
  );
};


export default NotFound;
