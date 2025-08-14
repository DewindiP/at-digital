import React from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';

const NavbarMain = () => {
  return (
    <nav
      className="
        bg-primaryColor
        flex justify-between items-center
        pt-[26px] pr-[80px] pb-[26px] pl-[80px]
        w-[1440px] h-[101.621px]
        mx-auto
      "
    >
      <NavbarLogo />
      <NavbarLinks />
    </nav>
  )
}

export default NavbarMain