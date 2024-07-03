import React from "react";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  return (
    <header className="bg-[#e8c34a] text-white flex items-baseline justify-between px-4 py-5 ">
      <h1 className="text-3xl">Sloth</h1>

      <GiHamburgerMenu  className="hidden sm:flex"/>

      <nav className="sm:hidden">
        <a href="#home" className="hover:bg-white hover:text-black px-4 py-2">
          About
        </a>
        <a href="#home" className="hover:bg-white hover:text-black px-4 py-2">
          Contact
        </a>
      </nav>

    </header>

    
  );
};

export default Footer;
