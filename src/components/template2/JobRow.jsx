import React from "react";
import Icon from "@/components/ui/Icon";

const JobRow = ({ job }) => {
  return (
    <div className="py-4 border-b border-black">
      <div className="grid grid-cols-[repeat(4,_1fr)_min-content] items-center">
        <div className="text-left">
          <h3 className="text-lg font-bold text-blue-500">{job.title}</h3>
          <p className="text-sm text-gray-500">Posted {job.posted} days ago</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">{job.department}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">{job.jobType}</p>
        </div>
        <div className="text-right">
          <a
            href="#"
            className="text-blue-500 hover:underline flex items-center justify-end"
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
