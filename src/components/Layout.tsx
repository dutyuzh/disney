import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`z-0 inline-block h-full w-full bg-light ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
