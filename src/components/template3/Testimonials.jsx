import React from "react";
import DynamicValues from "@/data/data";
import Icon from "@/components/ui/Icon";

const Benefits = () => {
  return (
    <section className="py-6 md:py-12 px-6 lg:px-20">
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center max-w-3xl">
          Employee Testimonials
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DynamicValues.employeeTestimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4"
            >
              <Icon icon="bxs:quote-right" className="text-5xl text-blue-500" />
              <p className="text-sm italic">"{testimonial.testimonial}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.pic}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold text-blue-500">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {testimonial.job}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
