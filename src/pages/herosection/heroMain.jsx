import React from "react";
import HeroText from "./heroText";

const HeroMain = () => {
  return (
   <section className="w-screen">
      {/* Hero image */}
      <img
        src="/images/Hero Image.png"
        alt="Hero"
        className="w-full object-contain"
      />
        {/* HeroText for larger screens (1440px and 1200px) */}
        <div
          className="
            hidden lg:block absolute z-10
          xl:top-[400px] xl:left-[50px]   /* for 1440px */
          lg:top-[360px] lg:left-[50px]  /* for 1200px */
          lg:w-[650px] lg:h-[300px] xl:w-[700px] 
          lg:p-3 xl:p-10"
        >
          <HeroText />
        </div>

      {/* HeroText for smaller screens (768px and 375px) */}
      <div className="block lg:hidden w-full">
        <HeroText />
      </div>
    </section>
  );
};

export default HeroMain;
