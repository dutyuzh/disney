import React, { ChangeEvent } from 'react';
import Logo from "./Logo";
import Link from 'next/link';
import { ProfileIcon } from "./Icons";

interface NavbarProps {
  onSearch: (searchText: string) => void;
}


const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); // Call the function passed as a prop to update the search text
  };
  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light
    lg:px-16 relative z-1 md:px-12 sm:px-8">
      <Link href="/">
        <Logo />
      </Link>
      <div className="w-full px-8">
      <input
        type="text"
        placeholder="Find a character..."
        onChange={handleInputChange}
        className="placeholder-tertiary w-full border px-4 py-3 text-sm bg-secondary rounded-full"
      />
      </div>
      <Link href="/account/profile" className="min-w-[48px] h-[48px] bg-primary rounded-full flex justify-center items-center">
        <ProfileIcon />
      </Link>
    </header>
  );
};

export default Navbar;
