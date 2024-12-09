import React from "react";
import DynamicValues from "@/data/data";

const Benefits = () => {
  return (
    <section className="py-6 md:py-12 px-6 lg:px-20">
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center max-w-3xl">
          What our employees at <span className="text-blue-500">Cleveri </span>
          say about us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DynamicValues.employeeTestimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
            >
              <img
                src={testimonial.pic}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-lg font-bold text-blue-500">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.job}</p>
              <p className="text-sm text-center italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
