import React from "react";

const Section1Text = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-primaryColor mb-4">
        Web & Mobile App Development
      </h2>
      <p className="text-sm md:text-base text-textColorLight mb-6">
        Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
      </p>
      <button className="bg-secondaryColor text-white font-semibold py-2 px-4 rounded-md hover:bg-analogousColor1 transition">
        LEARN MORE
      </button>
    </div>
  );
};

export default Section1Text;