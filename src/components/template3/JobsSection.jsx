import React from "react";
import DynamicValues from "@/data/data";
import JobCard from "./JobCard";

const JobsSection = () => {
  return (
    <section className="py-12 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold">Available Positions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        {/* Filters Section */}
        <div className="col-span-1 md:col-span-3 bg-white shadow-md p-6 rounded-md">
          <h3 className="text-2xl font-bold mb-2">Filter By</h3>
          <hr className="border-black mb-4" />
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Teams</h4>
            {DynamicValues.departments.map((department, index) => (
              <div key={index} className="flex items-center mb-3">
                <input
                  type="checkbox"
                  id={`department-${index}`}
                  className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                />
                <label htmlFor={`department-${index}`} className="ml-3 text-sm text-gray-700">
                  {department.label}
                </label>
              </div>
            ))}
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Locations</h4>
            {["Nugegoda Office", "Pamankada Office"].map((location, index) => (
              <div key={index} className="flex items-center mb-3">
                <input
                  type="checkbox"
                  id={`location-${index}`}
                  className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                />
                <label htmlFor={`location-${index}`} className="ml-3 text-sm text-gray-700">
                  {location}
                </label>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Job Types</h4>
            {DynamicValues.jobType.map((type, index) => (
              <div key={index} className="flex items-center mb-3">
                <input
                  type="checkbox"
                  id={`jobType-${index}`}
                  className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                />
                <label htmlFor={`jobType-${index}`} className="ml-3 text-sm text-gray-700">
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 md:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {DynamicValues.jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
          {DynamicValues.jobs.length > 10 && (
            <div className="text-center">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
