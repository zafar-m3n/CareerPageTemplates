import React from "react";
import DynamicValues from "@/data/data";
import JobCard from "./JobCard";

const JobsSection = () => {
  return (
    <section className="py-12 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold">Join Our Team</h2>
      </div>

      <div className="mb-8">
        <div className="md:border md:border-black rounded-md md:px-4 md:py-2">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 border border-black md:border-none rounded-md">
              <input
                type="text"
                placeholder="Search jobs"
                className="w-full py-2 px-4 rounded-md bg-transparent"
              />
            </div>
            <div className="border-l my-2 border-black md:block hidden"></div>
            <div className="flex-1 border border-black md:border-none rounded-md">
              <select className="w-full py-2 px-4 rounded-md bg-transparent focus:outline-none hover:bg-transparent">
                <option value="">Department</option>
                {DynamicValues.departments.map((dept, index) => (
                  <option key={index} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="border-l my-2 border-black md:block hidden"></div>
            <div className="flex-1 border border-black md:border-none rounded-md">
              <select className="w-full py-2 px-4 rounded-md bg-transparent focus:outline-none hover:bg-transparent">
                <option value="">Job Type</option>
                {DynamicValues.jobType.map((jobType, index) => (
                  <option key={index} value={jobType.value}>
                    {jobType.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {DynamicValues.jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>

      <div className="text-center">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Load More
        </button>
      </div>
    </section>
  );
};

export default JobsSection;
