import { useState } from 'react';
import Menu from '@renderer/assets/icons/Menu';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <nav className="w-full h-20 flex flex-row justify-end items-center">
        <div className="px-10 py-2">
          <button
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
            className="transform active:scale-75 transition-transform"
          >
            <Menu size="2rem" className="text-neutral-50" />
          </button>
        </div>
      </nav>
      <Sidebar sidebar={{ showSidebar, setShowSidebar }} />
    </>
  );
};

export default Navbar;
