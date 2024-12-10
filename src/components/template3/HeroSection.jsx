import React from "react";
import backgroundImage from "@/assets/template1-bg.png";
import DynamicValues from "@/data/data";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row bg-white h-auto md:h-96">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={backgroundImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-end text-right px-6 md:pr-20 w-full md:w-1/2">
        <div className="text-black max-w-2xl">
          <div className="flex items-center justify-end space-x-1 mb-2 text-4xl">
            <h1 className="text-4xl font-bold">
              {DynamicValues.heroText.title}
            </h1>
          </div>
          <p className="text-xl lg:text-2xl mb-2">
            {DynamicValues.heroText.subheading}
          </p>
          <p className="text-md mb-12">{DynamicValues.heroText.description}</p>
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
