import React from "react";
import Icon from "@/components/ui/Icon";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">{job.title}</h3>
        <a href="#" className="text-blue-500 hover:underline">
          Apply Now
          <Icon icon="heroicons:chevron-right" className="text-blue-500" />
        </a>
      </div>

      <div className="mb-2 font-semibold text-gray-700">{job.department}</div>
      <div className="mb-4 text-gray-500">{job.location}</div>

      <div className="flex gap-2">
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
          {job.jobType}
        </span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
          {job.seniority}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
