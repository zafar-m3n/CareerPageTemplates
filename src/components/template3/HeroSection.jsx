import React from "react";
import backgroundImage from "@/assets/template1-bg.png";
import DynamicValues from "@/data/data";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row bg-white h-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-96">
        <img
          src={backgroundImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right px-6 md:pr-20 w-full md:w-1/2 py-6 md:py-0">
        <div className="text-black max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {DynamicValues.heroText.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            {DynamicValues.heroText.subheading}
          </p>
          <p className="text-sm md:text-md mb-8">
            {DynamicValues.heroText.description}
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            View Jobs
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
