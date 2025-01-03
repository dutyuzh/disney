import React from "react";
import Layout from "./Layout";
import Logo from "./Logo";
import Link from 'next/link';

// Functional component with no props
const Footer: React.FC = () => {
  return (
    <footer>
      <Layout className="py-8 flex flex-col items-center justify-between lg:flex-col lg:py-6">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex items-center py-4 mx-2 font-normal text-xs">
          For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
