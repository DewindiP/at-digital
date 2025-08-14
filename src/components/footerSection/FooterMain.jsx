import React from "react";
import Logo from "../../assets/Logo.png";

const FooterMain = () => {
  return (
    <footer className="bg-primaryColor text-white px-10 lg:px-20 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        
        {/* Left Column */}
        <div className="max-w-sm">
          <img src={Logo} alt="at digital" className="h-[40px] mb-4" />
          <p className="text-sm leading-6 text-white align-baseline text-justify">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective – your
            business results.
          </p>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="font-semibold mb-3">Our Technologies</h4>
          <ul className="space-y-2 text-sm text-white align-baseline text-justify">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="font-semibold mb-3 align-baseline text-justify">Our Services</h4>
          <ul className="space-y-2 text-sm text-white align-baseline text-justify">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white my-6" />

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row justify-center gap-4 text-sm text-white">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <span className="hidden md:inline">|</span>
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default FooterMain;
