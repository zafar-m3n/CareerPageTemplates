import React from "react";
import DynamicValues from "@/data/data";

const Benefits = () => {
  return (
    <section className="py-6 md:py-12 px-6 lg:px-20 bg-white">
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center max-w-3xl">
          Interview Process - What to expect
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DynamicValues.interviewProcess.map((step) => {
          return (
            <div
              key={step.id}
              className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <h3 className="text-lg font-bold text-blue-500 text-center">
                Step {step.id}
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-center">{step.description[0]}</p>
              <p className="text-sm text-gray-500 mb-4 text-center">{step.description[1]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
