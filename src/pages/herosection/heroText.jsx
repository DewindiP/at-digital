import React from "react";
import ButtonMain from "../../components/button/ButtonMain";

const HeroText = () => {
  return (
    <div className="bg-gradient-to-r from-darkColor2 to-analogousColor2 shadow-lg w-full h-auto p-4 flex flex-col gap-3">
      <h1 className="font-inter font-bold text-[32px] md:text-[48px] leading-[100%] tracking-[-0.02em] capitalize text-white text-left">
        We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
      </h1>
      <div className="self-start">
        <ButtonMain text="GET FREE CONSULTATION" onClick={() => alert("Button Clicked!")} />
      </div>
    </div>
  );
};

export default HeroText;