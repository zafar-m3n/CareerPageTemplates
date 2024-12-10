import React, { useState } from "react";
import DynamicValues from "@/data/data";
import Icon from "@/components/ui/Icon";

const HowToApply = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-6 md:py-12 px-6 lg:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
        <div className="col-span-1 md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">How To Apply</h2>
          <p>Follow these simple steps to join the Cleveri Team!</p>
        </div>
        <div className="col-span-1 md:col-span-6">
          <div className="border">
            {DynamicValues.howToApply.map((item, index) => (
              <div key={item.id}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-3 px-4 bg-gray-100 border-b text-lg font-semibold flex justify-between items-center"
                >
                  <span>{item.title}</span>
                  <Icon
                    icon={
                      activeIndex === index
                        ? "heroicons:minus"
                        : "heroicons:plus"
                    }
                    className="ml-2"
                  />
                </button>
                <div
                  className={`text-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-screen py-3 px-4" : "max-h-0 p-0"
                  }`}
                >
                  {activeIndex === index && <p>{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
