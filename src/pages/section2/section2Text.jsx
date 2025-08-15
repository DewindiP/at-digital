import React from "react";

const Section2Text = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primaryColor mb-4">
        Digital Strategy Consulting
      </h2>
      <p className="text-sm md:text-base text-textColorLight mb-6">
        Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
      </p>
      <button className="bg-secondaryColor text-white font-semibold py-2 px-4 rounded-md hover:bg-analogousColor1 transition">
        LEARN MORE
      </button>
    </div>
  );
};

export default Section2Text;