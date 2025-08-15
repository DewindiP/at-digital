import React from "react";

const NavbarLinks = ({ isMobile }) => {
  return (
    <nav
      className={`flex ${
        isMobile ? "flex-col items-start gap-4" : "items-center gap-[28px]"
      } w-auto`}
    >
      {isMobile && (
        <a href="#home" className="navbarLink text-white whitespace-nowrap">
          HOME
        </a>
      )}
      <a href="#services" className="navbarLink text-white whitespace-nowrap">
        SERVICES
      </a>
      <a href="#aboutus" className="navbarLink text-white whitespace-nowrap">
        ABOUT US
      </a>
      <a href="#contactus" className="navbarLink text-white whitespace-nowrap">
        CONTACT US
      </a>
      <a href="#careers" className="navbarLink text-white whitespace-nowrap">
        CAREERS
      </a>
    </nav>
  );
};

export default NavbarLinks;