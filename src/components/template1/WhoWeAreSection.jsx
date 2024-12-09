import React from "react";
import DynamicValues from "@/data/data";

const WhoWeAreSection = () => {
  return (
    <section className="py-12 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold">Who We Are</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0 md:space-x-4">
        <div>
          <p className="text-lg lg:text-xl mb-6 font-bold max-w-3xl">
            Empowering Human Insight with AI Precision. We harness the full
            potential of AI to enhance, not replace, the human touch in the
            recruitment process.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {DynamicValues.stats.map((stat) => {
              return (
                <div key={stat.id}>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm">{stat.stat}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-auto md:max-w-3xl">
          <img
            src="https://picsum.photos/400/200?grayscale"
            alt="Who We Are"
            className="w-full max-w-xs lg:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
