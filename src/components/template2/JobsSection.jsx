import React from "react";
import DynamicValues from "@/data/data";
import JobRow from "./JobRow";

const JobsSection = () => {
  return (
    <section className="py-6 md:py-12 px-6 lg:px-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Job Openings
      </h2>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search jobs"
          className="w-full py-3 px-4 bg-white border border-black rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div>
          <select className="w-full py-3 px-4 bg-white border border-black rounded-md">
            <option value="">Job Type</option>
            {DynamicValues.jobType.map((jobType, index) => (
              <option key={index} value={jobType.value}>
                {jobType.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select className="w-full py-3 px-4 bg-white border border-black rounded-md">
            <option value="">Seniority</option>
            {DynamicValues.seniority.map((seniority, index) => (
              <option key={index} value={seniority.value}>
                {seniority.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select className="w-full py-3 px-4 bg-white border border-black rounded-md">
            <option value="">Department</option>
            {DynamicValues.departments.map((dept, index) => (
              <option key={index} value={dept.value}>
                {dept.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select className="w-full py-3 px-4 bg-white border border-black rounded-md">
            <option value="">Location</option>
            <option value="remote">Pamankada Office</option>
            <option value="onsite">Nugegoda Office</option>
          </select>
        </div>
      </div>
      <div className="mb-8">
        {DynamicValues.jobs.map((job, index) => (
          <JobRow key={index} job={job} />
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
