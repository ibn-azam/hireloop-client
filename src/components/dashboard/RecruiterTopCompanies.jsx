"use client";

import React from "react";
// Optional: If you use HeroUI/NextUI or standard Tailwind, Lucide icons work great for placeholders.
import { Box, Zap, Globe, Share2 } from "lucide-react"; 

const topCompanies = [
  {
    id: 1,
    name: "Google Inc.",
    industry: "Technology",
    location: "Mountain View",
    activeJobs: 24,
    icon: Globe,
  },
  {
    id: 2,
    name: "Meta Platforms",
    industry: "Social Media",
    location: "Menlo Park",
    activeJobs: 18,
    icon: Share2,
  },
  {
    id: 3,
    name: "Stripe",
    industry: "Fintech",
    location: "San Francisco",
    activeJobs: 12,
    icon: Box,
  },
  {
    id: 4,
    name: "Tesla",
    industry: "Automotive",
    location: "Austin",
    activeJobs: 31,
    icon: Zap,
  },
];

export function RecruiterTopCompanies() {
  return (
    <div className="w-full max-w-md p-6 bg-[#121214] text-white rounded-xl">
      {/* Header section */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold tracking-wide">My Top Companies</h2>
        <button className="text-sm text-gray-400 hover:text-white transition-colors">
          View all
        </button>
      </div>

      {/* Main card box */}
      <div className="border border-zinc-800 rounded-2xl bg-[#18181c] p-4 space-y-5">
        {/* Company List */}
        <div className="space-y-6">
          {topCompanies.map((company) => {
            const IconComponent = company.icon;
            return (
              <div
                key={company.id}
                className="flex items-center justify-between group cursor-pointer"
              >
                {/* Left side: Icon + Name & Info */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-gray-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {company.industry} • {company.location}
                    </p>
                  </div>
                </div>

                {/* Right side: Active Jobs count */}
                <div className="text-right">
                  <span className="block font-semibold text-white leading-none">
                    {company.activeJobs}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                    Active Jobs
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <button className="w-full py-2 px-4 border border-zinc-700/80 hover:border-zinc-500 bg-transparent text-white font-semibold rounded-lg transition-all duration-200 hover:bg-zinc-800/40">
          View All Companies
        </button>
      </div>
    </div>
  );
}