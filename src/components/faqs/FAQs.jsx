import React, { useState } from "react";

const FAQs = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-accentColor1 rounded-md p-4 mb-4">
      {/* Question Section */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
         <p
          className={`text-lg font-semibold ${
            isOpen ? "text-primaryColor" : "text-black"
          }`}
        >
          {question}
        </p>
        <span
          className={`text-xl font-bold ${
            isOpen ? "text-primaryColor" : "text-black"
          }`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </div>

      {/* Answer Section */}
      {isOpen && (
        <div className="mt-4">
          <p className="text-sm text-neutral">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQs;