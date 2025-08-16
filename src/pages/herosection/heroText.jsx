import React from "react";
import ButtonMain from "../../components/button/ButtonMain";

const HeroText = () => {
  return (
    <div className="bg-gradient-to-r from-darkColor2 to-analogousColor2 p-4 rounded-md shadow-lg w-full md:max-w-[500px] absolute bottom-[10%] left-0 right-0 px-4 md:px-6 lg:left-[5%] lg:right-auto z-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-4 text-white text-left">
        We Crush Your <br /> Competitors, Goals, And Sales Records - Without <br />The B.S.
      </h1>
      <ButtonMain text="GET FREE CONSULTATION" onClick={() => alert("Button Clicked!")} />
    </div>
  );
};

export default HeroText;