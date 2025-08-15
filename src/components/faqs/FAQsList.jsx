import React from "react";
import FAQs from "./FAQs";

const FAQsList = () => {
  const faqsData = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "How does Webflow compare to other platforms?",
      answer:
        "Webflow offers a unique combination of design freedom and development power, making it ideal for designers and developers alike.",
    },
  ];

  return (
    <div className="max-w-lg mx-auto">
      {faqsData.map((faq, index) => (
        <FAQs key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQsList;