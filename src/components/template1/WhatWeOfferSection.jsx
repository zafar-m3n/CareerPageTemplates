import React from "react";
import DynamicValues from "@/data/data";

const WhatWeOfferSection = () => {
  return (
    <section className="py-12 px-6 lg:px-20">
      <div className="text-center mb-4">
        <h2 className="text-3xl lg:text-4xl font-bold">
          What We Have to Offer
        </h2>
      </div>
      <p className="text-md text-center max-w-3xl mx-auto mb-6">
        At Cleveri, we offer flexible work options, career growth opportunities,
        and an inclusive, supportive culture to help you thrive both personally
        and professionally.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DynamicValues.benefits.map((benefit) => {
          return (
            <div key={benefit.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-blue-500 text-xl font-bold">
                {benefit.title}
              </h3>
              <p className="mt-4 text-gray-700">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
