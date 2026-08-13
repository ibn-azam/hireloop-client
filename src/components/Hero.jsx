"use client";
import image from "../../src/assets/images/globe.png"
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Building2,
  Users,
  Star,
} from "lucide-react";

const trendingTags = [
  "Product Designer",
  "AI Engineering",
  "DevOps Engineer",
];

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: Building2,
    value: "12K",
    label: "Companies",
  },
  {
    icon: Users,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: Star,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(79,70,229,0.12),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:py-20">
        {/* =========================================
            TOP BADGE
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md">
            <span className="text-[10px]">💼</span>

            <span className="text-[10px] font-medium text-white/80">
              50,000+
            </span>

            <span className="text-[10px] text-white/40">
              NEW JOBS THIS MONTH
            </span>
          </div>
        </motion.div>

        {/* =========================================
            HERO HEADING
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mx-auto mt-6 max-w-3xl text-center"
        >
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            Find Your{" "}
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Dream Job
            </span>{" "}
            Today
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/45 sm:text-[15px]">
            Hireloop connects top talent with world-class companies.
            Browse thousands of curated opportunities and land your
            next role faster.
          </p>
        </motion.div>

        {/* =========================================
            SEARCH BAR
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-8 max-w-3xl"
        >
          <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#0d0d0e]/90 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl sm:flex-row">
            {/* Job Search */}
            <div className="flex h-12 flex-1 items-center gap-3 rounded-xl px-4 transition-colors hover:bg-white/[0.035]">
              <Search
                size={17}
                strokeWidth={1.8}
                className="shrink-0 text-white/35"
              />

              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>

            {/* Divider */}
            <div className="hidden h-8 w-px self-center bg-white/10 sm:block" />

            {/* Location */}
            <div className="flex h-12 flex-1 items-center gap-3 rounded-xl px-4 transition-colors hover:bg-white/[0.035]">
              <MapPin
                size={17}
                strokeWidth={1.8}
                className="shrink-0 text-white/35"
              />

              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>

            {/* Search Button */}
            <button
              type="button"
              aria-label="Search jobs"
              className="flex h-12 w-full items-center justify-center rounded-xl bg-indigo-600 text-white transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/25 sm:w-12"
            >
              <Search size={18} strokeWidth={2} />

              <span className="ml-2 text-sm sm:hidden">
                Search Jobs
              </span>
            </button>
          </div>
        </motion.div>

        {/* =========================================
            TRENDING TAGS
        ========================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-3 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="mr-1 text-[10px] text-white/30">
            Trending Position
          </span>

          {trendingTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[9px] text-white/50 transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* =========================================
            GLOBE SECTION
        ========================================= */}
        <div className="relative mx-auto h-[390px] w-full sm:h-[450px] lg:h-[500px] mt-80">
          {/* Stars */}
          <div className="pointer-events-none absolute inset-0">
            <span className="absolute left-[12%] top-[22%] h-1 w-1 rounded-full bg-indigo-400 shadow-[0_0_12px_3px_rgba(99,102,241,0.45)]" />

            <span className="absolute left-[21%] top-[40%] h-1 w-1 rounded-full bg-indigo-300/70" />

            <span className="absolute left-[31%] top-[27%] h-0.5 w-0.5 rounded-full bg-white/60" />

            <span className="absolute right-[17%] top-[25%] h-1 w-1 rounded-full bg-indigo-400 shadow-[0_0_12px_3px_rgba(99,102,241,0.45)]" />

            <span className="absolute right-[25%] top-[44%] h-1 w-1 rounded-full bg-white/50" />

            <span className="absolute right-[34%] top-[18%] h-0.5 w-0.5 rounded-full bg-indigo-300" />

            <span className="absolute left-[40%] top-[16%] h-0.5 w-0.5 rounded-full bg-white/40" />
          </div>

          {/* Globe Glow */}
          <div className="absolute bottom-[-100px] left-1/2 h-[350px] w-full -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[90px] sm:h-[460px] sm:w-full "/>

          {/* Globe Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="absolute bottom-[-150px] left-1/2 w-full max-w-none -translate-x-1/2 sm:bottom-[-190px] sm:w-full lg:w-full -z-50"
          >
            <Image
              src={image}
              alt="Global job opportunities"
              width={1200}
              height={700}
              priority
              className="h-auto w-full object-contain"
            />
          </motion.div>

          {/* Globe Message */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="absolute left-1/2 top-[53%] z-10 w-full -translate-x-1/2 text-center -mt-40"
          >
            <h4 className="text-2xl font-medium tracking-tight text-white/70 sm:text-2xl lg:text-2xl">
              Assisting over{" "}
              <span className="text-white">
                15,000 job seekers
              </span>
            </h4>

            <h4 className="mt-1 text-2xl font-medium tracking-tight text-white/70 sm:text-2xl lg:text-2xl">
              find their dream positions.
            </h4>
          </motion.div>
        </div>

        {/* =========================================
            STAT CARDS
        ========================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
          className="relative z-20 -mt-70 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group rounded-xl border border-white/10 bg-[#0c0c0d]/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-5"
              >
                {/* Icon */}
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <Icon
                    size={14}
                    strokeWidth={1.8}
                    className="text-white/50 transition-colors duration-200 group-hover:text-indigo-400"
                  />
                </div>

                {/* Value */}
                <div className="mt-5">
                  <p className="text-2xl font-medium tracking-tight text-white sm:text-[27px]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] text-white/35">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}