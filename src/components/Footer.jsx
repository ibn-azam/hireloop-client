'use client'

import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  const linkColumns = [
    {
      title: "Product",
      links: ["Job discovery", "Worker AI", "Companies", "Salary data"],
    },
    {
      title: "Navigations",
      links: ["Help center", "Career library", "Contact"],
    },
    {
      title: "Resources",
      links: ["Brand Guideline", "Newsroom"],
    },
  ];

  return (
    <footer className="w-full bg-[#222222] px-6 pt-16 pb-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        {/* Logo + tagline */}
        <div className="max-w-xs">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-white">
              hire
            </span>
            <span className="relative inline-flex items-center text-xl font-bold tracking-tight text-white">
              l
              <span className="mx-[1px] inline-block h-[14px] w-[14px] rounded-full bg-orange-500" />
              <span className="mx-[1px] inline-block h-[14px] w-[14px] rounded-full bg-blue-500" />
              p
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            The AI-native career platform. Built for people who take their
            work seriously.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16">
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-indigo-400">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/"
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 pt-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10"
            aria-label="Facebook"
          >
            <FaFacebook className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white hover:bg-indigo-400"
            aria-label="Dribbble"
          >
            <FaInstagram className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span>Copyright 2024 — Programming Hero</span>
          <span className="h-3 w-px bg-white/15" />
          <Link href="/" className="hover:text-white">
            Terms &amp; Policy
          </Link>
          <span>·</span>
          <Link href="/" className="hover:text-white">
            Privacy Guideline
          </Link>
        </div>
      </div>
    </footer>
  );
}