"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsAboutOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsAboutOpen(false);
    }, 300);
  };

  return (
    <header className="bg-white px-4 md:px-6 py-4">
      <div className="flex items-center justify-between ">
        {/* Changed ml-12 to md:ml-12 to remove left margin on mobile */}
        <Link href="/" className="ml-3 sm:ml-7 md:ml-12">
          <Image
            src="/logo/sahynex.svg"
            alt="Sahynex Logo"
            width={120}
            height={40}
            className="w-[115px] h-auto sm:w-[200px] md:w-[150px]"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm transition-colors"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm flex items-center transition-colors"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              About Us
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${
                  isAboutOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isAboutOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link
                  href="/About#info"
                  className="block px-4 py-2 text-sm text-[#0e1f51] hover:bg-[#f7f7f7] hover:text-[#EB505A] font-medium text-sm"
                  onClick={() => setIsAboutOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/About#team"
                  className="block px-4 py-2 text-sm text-[#0e1f51] hover:bg-[#f7f7f7] hover:text-[#EB505A] font-medium text-sm"
                  onClick={() => setIsAboutOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  href="/About#clients"
                  className="block px-4 py-2 text-sm text-[#0e1f51] hover:bg-[#f7f7f7] hover:text-[#EB505A] font-medium text-sm"
                  onClick={() => setIsAboutOpen(false)}
                >
                  Our Clients
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/Services"
            className="text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/Career"
            className="text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm transition-colors"
          >
            Career
          </Link>
          <Link
            href="/Contact"
            className="text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm transition-colors"
          >
            Contact
          </Link>

          <Link href="/Contact">
            <button className="bg-[#EB505A] hover:bg-[#d83a4f] text-white px-4 py-2 rounded-md font-medium text-sm ml-4 transition-colors">
              Get In Touch
            </button>
          </Link>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={28} color="#333" />
          ) : (
            <Menu size={28} color="#333" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm"
          >
            Home
          </Link>

          <div>
            <button
              className="text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm cursor-pointer flex items-center justify-between w-full"
              onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
            >
              About Us
              {isMobileAboutOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {isMobileAboutOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/About#info"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsMobileAboutOpen(false);
                  }}
                  className="block text-sm text-[#0e1f51] hover:text-[#EB505A]"
                >
                  About Us
                </Link>
                <Link
                  href="/About#team"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsMobileAboutOpen(false);
                  }}
                  className="block text-sm text-[#0e1f51] hover:text-[#EB505A]"
                >
                  Our Team
                </Link>
                <Link
                  href="/About#clients"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsMobileAboutOpen(false);
                  }}
                  className="block text-sm text-[#0e1f51] hover:text-[#EB505A]"
                >
                  Our Clients
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/Services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm"
          >
            Our Services
          </Link>
          <Link
            href="/Career"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm"
          >
            Career
          </Link>
          <Link
            href="/Contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0e1f51] hover:text-[#EB505A] font-medium text-sm"
          >
            Contact
          </Link>

          <Link
            href="/Contact"
            onClick={() => setMobileMenuOpen(false)}
            className="cursor-pointer"
          >
            <button className="w-full bg-[#EB505A] hover:bg-[#d83a4f] text-white px-4 py-2 rounded-md font-medium text-sm cursor-pointer">
              Get In Touch
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
