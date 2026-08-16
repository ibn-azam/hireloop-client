import React from "react";
import { getCompanyJobs } from "@/lib/api/jobs";
import RecruiterJobsTable from "@/components/dashboard/RecruiterJobsTable";


const RecruiterJobsPage = async () => {
  const companyId = "comp_123";

  const jobs = (await getCompanyJobs(companyId)) || [];

  return (
    <div className="w-full max-w-5xl mx-auto my-6 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Found {jobs.length} Professional Jobs
        </h2>
        <p>View,update and manage your all jobs</p>

        <button className="text-sm text-gray-400 hover:text-white transition-colors">
          View all
        </button>
      </div>

      {/* Client Table */}
      <RecruiterJobsTable jobs={jobs} />
    </div>
  );
};

export default RecruiterJobsPage;