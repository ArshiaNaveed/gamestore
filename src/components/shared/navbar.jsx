import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = ({ isActive }) =>
    `relative flex items-center h-full transition-colors hover:text-gray-400 ${isActive ? "text-white" : "text-gray-400"}`;

  return (
    <nav className="bg-black text-white font-manrope border-b border-gray-800 sticky top-0 z-50">
      <div className="flex items-center justify-between pl-4 md:pl-6 h-16">
        {/* ---left section */}
        <div className="flex flex-row gap-3 items-center h-full">
          <NavLink to="/">
            <img src="/logo.svg" alt="Game Store Logo" className="w-auto h-8" />
          </NavLink>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium h-full ml-4">
            <NavLink to="/" className={activeStyle}>
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.75 bg-red-600"></div>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/games" className={activeStyle}>
              {({ isActive }) => (
                <>
                  Games
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.75 bg-red-600"></div>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/help" className={activeStyle}>
              {({ isActive }) => (
                <>
                  Help
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.75 bg-red-600"></div>
                  )}
                </>
              )}
            </NavLink>
          </div>
        </div>

        {/* ---right section */}
        <div className="flex items-center gap-3 md:gap-7 h-full">
          <div className="hidden sm:flex items-center gap-6 mr-2">
            <button className="hover:text-gray-400 transition-colors">
              <Icon icon="mdi:web" className="text-xl" />
            </button>
            <button className="hover:text-gray-400 transition-colors">
              <Icon icon="mdi:account" className="text-xl" />
            </button>
          </div>

          <button className="hidden cursor-pointer max-w-25.75 sm:block border border-gray-600 px-8 py-3 rounded-[50px] text-sm font-bold hover:bg-white hover:text-black transition-all">
            LOGIN
          </button>

          <button className="bg-red-600 cursor-pointer px-4 md:px-6 h-full text-sm font-bold hover:bg-red-700 transition-colors">
            REGISTER
          </button>

          <button
            className="md:hidden text-2xl ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} />
          </button>
        </div>
      </div>

      {/* ---mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-gray-800 p-4 space-y-4 text-center pb-8">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 border-b border-gray-800"
          >
            Home
          </NavLink>
          <NavLink
            to="/games"
            onClick={() => setIsOpen(false)}
            className="block py-2 border-b border-gray-800"
          >
            Games
          </NavLink>
          <NavLink
            to="/help"
            onClick={() => setIsOpen(false)}
            className="block py-2 border-b border-gray-800"
          >
            Help
          </NavLink>

          <div className="flex justify-center gap-8 py-2">
            <Icon icon="mdi:web" className="text-2xl" />
            <Icon icon="mdi:account" className="text-2xl" />
          </div>
          <button className="w-full border border-gray-600 py-2 rounded-full text-sm font-bold uppercase">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
