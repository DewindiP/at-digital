import React from "react";
import HeroText from "./heroText";

const HeroMain = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('src/assets/Hero Image.png')",
        width: "100%",
        height: "87vh",
      }}
    >
      <div className="absolute bottom-[10%] left-[5%] z-10">
        <HeroText />
      </div>
    </section>
  );
};

export default HeroMain;