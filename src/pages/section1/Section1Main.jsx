import React from "react";
import Section1Text from "./Section1Text";

const Section1Main = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between gap-[40px] px-6 md:px-12 lg:px-20 py-10"
      style={{
        width: "100%",
        height: "auto", 
      }}
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="public/assets/image 2.png" 
          alt="Web & Mobile App Development"
          className="w-[300px] h-auto"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2">
        <Section1Text />
      </div>
    </section>
  );
};

export default Section1Main;