import React from "react";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#e8c34a] text-white flex items-baseline justify-between px-4 py-5 ">
      <h1 className="text-3xl">Sloth</h1>

      <GiHamburgerMenu  className="hidden sm:flex"/>

      <nav className="sm:hidden">
        <NavLink to='/about' className="rounded-md hover:bg-[#ececec] hover:text-white px-4 py-2">
          About
        </NavLink>
        <NavLink to='/contact' className="rounded-md hover:bg-[#ececec] hover:text-white px-4 py-2">
          Contact
        </NavLink>
      </nav>

    </header>

    
  );
};

export default Footer;
