import React from "react";
import DynamicValues from "@/data/data";

const HowToJoin = () => {
  return (
    <section className="py-12 px-6 lg:px-20 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold">How To Join Us</h2>
      </div>
      {DynamicValues.howToApply.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row md:space-x-4 items-center mb-4"
        >
          <div className="flex items-center justify-center w-12 h-12 text-blue-500 border-4 border-blue-500 text-2xl font-bold rounded-full">
            {item.id}
          </div>
          <div className="text-center md:text-left flex-1">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowToJoin;
