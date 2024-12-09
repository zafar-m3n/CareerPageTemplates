import React from "react";
import logo from "@/assets/logo.png";
import backgroundImage from "@/assets/template1-bg.png";
import DynamicValues from "@/data/data";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>{" "}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <div className="flex items-center justify-center space-x-1 mb-2 text-4xl">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <h1 className="text-4xl font-bold">Careers</h1>
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
    </section>
  );
};

export default HeroSection;
