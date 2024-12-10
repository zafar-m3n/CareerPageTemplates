import React from "react";
import Icon from "@/components/ui/Icon";

const JobRow = ({ job }) => {
  return (
    <div className="py-4 border-b border-black">
      <div className="flex flex-col md:grid md:grid-cols-[repeat(4,_1fr)_min-content] md:items-center">
        <div className="text-left">
          <div className="mb-2 md:mb-0 flex justify-between items-center">
            <h3 className="text-lg font-bold text-blue-500">{job.title}</h3>
            <a
              href="#"
              className="text-blue-500 hover:underline flex items-center justify-end md:hidden"
            >
              Apply
              <Icon icon="heroicons:chevron-right" className="ml-2" />
            </a>
          </div>
          <p className="text-sm text-gray-500 hidden md:block">
            Posted {job.posted} days ago
          </p>
        </div>
        <div className="mb-1 md:mb-0 md:text-center text-left">
          <p className="text-sm text-gray-500 flex flex-wrap md:block">
            {job.department}
            <span className="ml-2 md:hidden">| {job.seniority}</span>
          </p>
        </div>
        <div className="mb-1 md:mb-0 md:text-center text-left">
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        <div className="mb-1 md:mb-0 md:text-center text-left">
          <p className="text-sm text-gray-500">{job.jobType}</p>
        </div>
        <div className="flex items-center justify-between text-right">
          <p className="text-sm text-gray-500 md:hidden block">
            Posted {job.posted} days ago
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline md:flex items-center justify-end hidden"
          >
            Apply
            <Icon icon="heroicons:chevron-right" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobRow;
