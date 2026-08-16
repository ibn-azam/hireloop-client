"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, toast } from "@heroui/react";
import {
  Globe,
  LocationPin,
  Calendar,
  Check,
  CircleExclamation,
  ArrowLeft,
  Xmark,
  ChevronDown,
  LocationArrow,
} from "@gravity-ui/icons";
import { createJob } from "@/lib/actions/jobs";

// Mock Recruiter & Company Data
const mockRecruiterData = {
  isApproved: true,
  company: {
    id: "comp_123",
    name: "TechCorp Solutions",
    plan: "Growth", // "Free" | "Growth" | "Enterprise"
    activeJobsCount: 4,
    limits: {
      Free: 3,
      Growth: 10,
      Enterprise: 50,
    },
  },
};

export default function PostJobPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isRemote, setIsRemote] = useState(false);
  const [serverError, setServerError] = useState("");

  const { company, isApproved } = mockRecruiterData;
  const maxAllowed = company?.limits[company?.plan] || 0;
  const currentCount = company?.activeJobsCount || 0;
  const isLimitReached = currentCount >= maxAllowed;
  const canPost = isApproved && !isLimitReached;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!canPost) {
      setServerError("Posting is currently restricted for your company account.");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const jobPayload = {
      title: data.title,
      category: data.category,
      jobType: data.jobType,
      salary: {
        min: Number(data.salaryMin),
        max: Number(data.salaryMax),
        currency: data.currency,
      },
      location: isRemote
        ? { isRemote: true, city: "Remote", country: "Remote" }
        : { isRemote: false, city: data.city, country: data.country },
      deadline: data.deadline,
      description: data.description,
      responsibilities: data.responsibilities,
      requirements: data.requirements,
      benefits: data.benefits || null,
      companyId: company.id,
      companyName: company.name,
      status: "active",
      createdAt: new Date().toISOString(),
    };

    const res =await createJob(jobPayload);
    if(res.insertedId){
      toast.success('Job Posted Successfully')
      e.target.reset();
      setIsRemote(false)
      router.push('/dashboard/recruiter')
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-[#121212] border border-zinc-800/80 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="flex items-start justify-between p-6 border-b border-zinc-800/80">
          <div>
            <button
              type="button"
              onClick={() => router.back()}
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
            </button>
            <h1 className="text-xl font-semibold tracking-tight text-zinc-100">
              Post a New Job
            </h1>
            <p className="text-zinc-400 text-xs mt-1">
              Enter position details to publish a new job listing on HireLoop.
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.back()}
            className="text-zinc-400 hover:text-zinc-200 transition-colors p-1 rounded-lg hover:bg-zinc-800/50"
          >
            <Xmark className="w-5 h-5" />
          </button>
        </div>

        {/* Company Plan / Limit Warning */}
        {(!isApproved || isLimitReached) && (
          <div className="mx-6 mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CircleExclamation className="w-4 h-4 shrink-0" />
              <span>
                {!isApproved
                  ? "Your company status is pending approval."
                  : `Job limit reached (${currentCount}/${maxAllowed} active posts used).`}
              </span>
            </div>
            <span className="font-semibold uppercase tracking-wider text-[10px] px-2 py-0.5 rounded bg-amber-500/20">
              {company.plan} Plan
            </span>
          </div>
        )}

        {/* Server Error Alert */}
        {serverError && (
          <div className="mx-6 mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
            <CircleExclamation className="w-4 h-4 shrink-0" />
            <span>{serverError}</span>
          </div>
        )}

        {/* Form Body */}
        <Form
          className="p-6 space-y-6"
          validationBehavior="native"
          onSubmit={handleSubmit}
        >
          {/* Row 1: Title & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Job Title</label>
              <input
                required
                name="title"
                type="text"
                disabled={!canPost}
                placeholder="e.g. Senior Frontend Engineer"
                className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Industry / Category</label>
              <div className="relative">
                <select
                  required
                  name="category"
                  disabled={!canPost}
                  defaultValue="engineering"
                  className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 appearance-none focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 pr-10"
                >
                  <option value="engineering" className="bg-[#1c1c1c]">Engineering & Software</option>
                  <option value="design" className="bg-[#1c1c1c]">Design & Creative</option>
                  <option value="product" className="bg-[#1c1c1c]">Product Management</option>
                  <option value="marketing" className="bg-[#1c1c1c]">Marketing & Sales</option>
                  <option value="customer-support" className="bg-[#1c1c1c]">Customer Support</option>
                  <option value="finance" className="bg-[#1c1c1c]">Finance & Legal</option>
                  <option value="hr" className="bg-[#1c1c1c]">Human Resources</option>
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 2: Job Type & Currency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Job Type</label>
              <div className="relative">
                <select
                  required
                  name="jobType"
                  disabled={!canPost}
                  defaultValue="full-time"
                  className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 appearance-none focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 pr-10"
                >
                  <option value="full-time" className="bg-[#1c1c1c]">Full-time</option>
                  <option value="part-time" className="bg-[#1c1c1c]">Part-time</option>
                  <option value="contract" className="bg-[#1c1c1c]">Contract</option>
                  <option value="internship" className="bg-[#1c1c1c]">Internship</option>
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Currency</label>
              <div className="relative">
                <select
                  required
                  name="currency"
                  disabled={!canPost}
                  defaultValue="USD"
                  className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 appearance-none focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 pr-10"
                >
                  <option value="USD" className="bg-[#1c1c1c]">USD ($)</option>
                  <option value="EUR" className="bg-[#1c1c1c]">EUR (€)</option>
                  <option value="GBP" className="bg-[#1c1c1c]">GBP (£)</option>
                  <option value="BDT" className="bg-[#1c1c1c]">BDT (৳)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3: Min & Max Salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Minimum Salary</label>
              <input
                required
                name="salaryMin"
                type="number"
                disabled={!canPost}
                placeholder="e.g. 50000"
                className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Maximum Salary</label>
              <input
                required
                name="salaryMax"
                type="number"
                disabled={!canPost}
                placeholder="e.g. 80000"
                className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
              />
            </div>
          </div>

          {/* Remote Toggle & Location */}
          <div className="space-y-4 pt-1">
            <div className="flex items-center justify-between p-3.5 bg-[#1c1c1c] rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-zinc-400" />
                <div>
                  <p className="text-xs font-medium text-zinc-200">Remote Position</p>
                  <p className="text-[11px] text-zinc-500">Allow candidates from anywhere to apply</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isRemote}
                onChange={(e) => setIsRemote(e.target.checked)}
                disabled={!canPost}
                className="w-4 h-4 rounded bg-[#121212] border-zinc-700 text-zinc-100 focus:ring-0 focus:ring-offset-0 accent-zinc-100 cursor-pointer"
              />
            </div>

            {!isRemote && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-300">City</label>
                  <div className="relative">
                    <LocationArrow className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3 pointer-events-none" />
                    <input
                      required={!isRemote}
                      name="city"
                      type="text"
                      disabled={!canPost}
                      placeholder="City"
                      className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-300">Country</label>
                  <input
                    required={!isRemote}
                    name="country"
                    type="text"
                    disabled={!canPost}
                    placeholder="Country"
                    className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Deadline */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-300">Application Deadline</label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3 pointer-events-none" />
              <input
                required
                name="deadline"
                type="date"
                disabled={!canPost}
                className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 color-scheme-dark"
              />
            </div>
          </div>

          {/* Section: Description, Responsibilities, Requirements & Benefits */}
          <div className="space-y-5 pt-2 border-t border-zinc-800/80">
            <div className="space-y-2 pt-2">
              <label className="text-xs font-medium text-zinc-300">Brief Overview / Description</label>
              <textarea
                required
                name="description"
                rows={3}
                disabled={!canPost}
                placeholder="Tell candidates about the role and your team's mission..."
                className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl p-4 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Responsibilities</label>
              <textarea
                required
                name="responsibilities"
                rows={3}
                disabled={!canPost}
                placeholder="- Key role responsibilities and daily tasks..."
                className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl p-4 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Requirements & Qualifications</label>
              <textarea
                required
                name="requirements"
                rows={3}
                disabled={!canPost}
                placeholder="- Required skills, experience, and educational background..."
                className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl p-4 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Benefits & Perks (Optional)</label>
              <textarea
                name="benefits"
                rows={2}
                disabled={!canPost}
                placeholder="- Insurance, flexible hours, annual stipends..."
                className="w-full bg-[#1c1c1c] border border-zinc-800 rounded-xl p-4 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 resize-none"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800/80">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-5 py-2.5 rounded-xl border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-800/50 transition-colors"
            >
              Cancel
            </button>
            <Button
              type="submit"
              isLoading={loading}
              isDisabled={!canPost}
              className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50"
            >
              Post Job
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}