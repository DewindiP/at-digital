import React from "react";
import Section2Text from "./section2Text";

const Section2Main = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between gap-[40px] px-6 md:px-12 lg:px-20 py-10"
      style={{
        width: "100%",
        height: "auto", 
      }}
    >
      {/* Left Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <Section2Text />
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="src/assets/image 1.png"
          alt="Digital Strategy Consulting"
          className="w-[200px] md:w-[300px] h-auto"
        />
      </div>
    </section>
  );
};

export default Section2Main;