import React from "react"; 

const FooterMain = () => {
  return (
    <footer className="bg-primaryColor text-white px-10 lg:px-20 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        
        {/* Left Column */}
        <div className="max-w-sm">
          <img src="/images/Logo.png" alt="at digital" className="h-[40px] mb-4 w-auto" />
          <p className="text-sm leading-6 text-white align-baseline text-justify">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective – your
            business results.
          </p>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="font-semibold mb-3 text-sm sm:text-base md:text-lg text-justify">Our Technologies</h4>
          <ul className="space-y-2 text-xs sm:text-sm md:text-base text-white text-justify">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="font-semibold mb-3 text-sm sm:text-base md:text-lg text-justify">Our Services</h4>
          <ul className="space-y-2 text-xs sm:text-sm md:text-base text-white text-justify">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center mt-6 mb-1">
        <hr className="border-white w-[630px]" /> 
      </div>

      {/* Bottom Links */}
      <div className="flex justify-center items-center whitespace-nowrap gap-2 sm:gap-1 text-xs sm:text-sm md:text-base text-white w-fit mx-auto">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default FooterMain;
