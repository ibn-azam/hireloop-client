'use client'
import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import image from "../../src/assets/images/logo.png";
import { authClient, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data :session, isPending} = useSession();
  console.log('data in nav:',session , 'pending',isPending)
  const user = session?.user;

  const handleSignOut =async()=>{
    await authClient.signOut();
  }
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#222222]">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo - left */}
        <Link href="/">
         <Image
            width={100}
            height={100}
            alt="logo"
            src={image}
         />
        </Link>

        {/* Mobile menu button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav links + actions - right */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Company
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm text-gray-300 hover:text-white">
                Pricing
              </Link>
            </li>
          </ul>

          <div className="h-5 w-px bg-white/15" />

          {user ? <>
            Hi,{user.name}!
            <Button onClick={handleSignOut} variant="danger">
              Sign Out
            </Button>
          </> : <>
            <Link href="/login" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
            Login
          </Link>
          <Link href="/signup" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
            SignUp
          </Link>
          </>}

          <Button className="rounded-full bg-[#5C53FE] px-5 font-medium text-white hover:bg-indigo-400">
            Get Started
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-white/5 md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2 text-gray-300">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 text-gray-300">
                Company
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 text-gray-300">
                Pricing
              </Link>
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Link href="/" className="block py-2 text-indigo-400">
                Sign In
              </Link>
              <Button className="w-full rounded-full bg-indigo-500 text-white hover:bg-indigo-400">
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}