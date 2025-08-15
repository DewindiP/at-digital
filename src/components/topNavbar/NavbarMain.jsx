import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-primaryColor px-6 md:px-6 lg:px-[80px] py-[20px] flex justify-between items-center overflow-x-hidden">
      
      {/* Logo */}
      <div>
        <NavbarLogo />
      </div>

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
        <div className="absolute top-0 left-0 w-full h-screen bg-primaryColor flex flex-col items-start justify-start gap-6 z-50  px-4 pt-4">

           <div
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </div>

          <NavbarLinks isMobile={true} />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
