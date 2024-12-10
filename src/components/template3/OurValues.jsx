import React from "react";
import DynamicValues from "@/data/data";

const OurValues = () => {
  return (
    <section className="py-12 px-6 lg:px-20">
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center max-w-3xl">
          Our Values
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
          src="https://picsum.photos/600/300?grayscale"
          alt="Who We Are"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div>
          {DynamicValues.values.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:space-x-4 items-center mb-4"
            >
              <div className="flex items-center justify-center w-12 h-12 text-blue-500 border-4 border-blue-500 text-2xl font-bold rounded-full">
                {item.id}
              </div>
              <div className="text-center md:text-left flex-1">
                <p className="font-bold">{item.value}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
