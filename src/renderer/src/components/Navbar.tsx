import React from 'react';
import Menu from '@renderer/assets/icons/Menu';

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex flex-row justify-end items-center">
      <div className="px-10 py-2">
        <button className="transform active:scale-75 transition-transform">
          <Menu size="2rem" className="text-neutral-50" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
