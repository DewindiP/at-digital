import React from "react";
import FAQsList from "../../components/faqs/FAQsList";

const FAQsMain = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primaryColor">
          Frequently Asked Questions
        </h2>
      </div>
      <FAQsList />
    </section>
  );
};

export default FAQsMain;