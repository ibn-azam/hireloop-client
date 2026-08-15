'use client';

import DashboardStats from '@/components/dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client';
import React from 'react';
import { FileText, Persons, Thunderbolt, Check } from '@gravity-ui/icons';
import { RecruiterRecentJob } from '@/components/dashboard/RecruiterRecentJob';
import { RecruiterTopCompanies } from '@/components/dashboard/RecruiterTopCompanies';

const RecruiterDashboardPage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div className="text-zinc-400 p-6">Loading...</div>;
  }

  const user = session?.user;

  const recruiterStats = [
    { title: "Total Job Posts", value: 48, icon: FileText },
    { title: "Total Applicants", value: 1284, icon: Persons },
    { title: "Active Jobs", value: 18, icon: Thunderbolt },
    { title: "Jobs Closed", value: 32, icon: Check },
  ];

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold text-white">
        Welcome back, {user?.name || "Recruiter"}
      </h2>
      <DashboardStats stats={recruiterStats} />
      <div className='flex gap-2 items-start'>
        <RecruiterRecentJob/>
      <RecruiterTopCompanies/>
      </div>
    </div>
  );
};

export default RecruiterDashboardPage;