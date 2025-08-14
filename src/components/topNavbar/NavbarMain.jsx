import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-primaryColor px-6 md:px-6 lg:px-[80px] py-[20px] flex justify-between items-center overflow-x-hidden">
      
      {/* Logo */}
      <NavbarLogo />

      {/* Desktop Links */}
      <div className="hidden md:flex">
        <NavbarLinks />
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-primaryColor shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <NavbarLinks mobile />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
