"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setIsDrawerVisible(false), 300);
  };

  const openDrawer = () => {
    setIsDrawerVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsDrawerOpen(true);
      });
    });
  };

  const primaryLinks = [
    "About Us",
    "Careers",
    "Student Stories",
    "Events",
    "Universities Case Study",
  ];

  const secondaryLinks = [
    "Blogs",
    "Immigration Guide",
    "Career Ignition Hub",
    "Country Guides",
    "Campus Ambassador Programme",
    "FAQ & Support Center",
    "Get In Touch",
    "Partner With Us",
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden py-2">
        <div className="absolute inset-0 bg-[var(--blue-darkest)] backdrop-blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center h-16 w-full">
            {/* Logo */}
            <Link href="/" className="relative h-12 w-32 sm:h-14 sm:w-40 md:h-16 md:w-56 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Veda Scholars"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ml-auto flex-shrink-0">
              {/* Desktop Links */}
              <div className="hidden lg:flex items-center gap-6">
              </div>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex items-center gap-4">
                <Button
                  variant="outline"
                  className="px-6 py-2 h-auto text-sm border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--blue-darkest)]"
                  href="/students"
                >
                  For Students
                </Button>
                <div className="hidden lg:block h-6 w-px bg-white/20"></div>
                <Button
                  variant="outline"
                  className="px-6 py-2 h-auto text-sm border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--blue-darkest)]"
                  href="/universities"
                >

                  For Organizations
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-2 h-auto text-sm border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--blue-darkest)]"
                  href="/jobs/search"
                >
                  For Job Seekers
                </Button>
              </div>

              <div className="h-6 w-px bg-white/20"></div>

              {/* Hamburger */}
              <button
                className="text-white cursor-pointer p-2"
                onClick={openDrawer}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav >

      {/* Drawer */}
      {
        isDrawerVisible && (
          <>
            <div
              className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0"}`}
              onClick={closeDrawer}
            ></div>

            <div
              className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-[70] shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-out ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="flex items-center justify-between p-6 border-b border-[var(--blue-medium-dark)]/20 sticky top-0 bg-white z-10">
                <div className="relative h-12 w-32">
                  <Image src="/logo.png" alt="Veda Scholars" fill className="object-contain" />
                </div>
                <button className="text-[var(--blue-dark)] hover:text-[var(--blue-darkest)] p-2 -mr-2" onClick={closeDrawer}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="py-4">
                {primaryLinks.map((link, index) => {
                  const getHref = (linkName: string) => {
                    if (linkName === "About Us") return "/about-us";
                    if (linkName === "Events") return "/events";
                    if (linkName === "Careers") return "/careers";
                    if (linkName === "Student Stories") return "/student-stories";
                    if (linkName === "Universities Case Study") return "/university-case-study";
                    return "/resources"; // Fallback
                  };
                  return (
                    <Link
                      key={index}
                      href={getHref(link)}
                      className="flex items-center justify-between px-6 py-4 text-[var(--blue-darkest)] hover:bg-[var(--blue-medium-dark)]/10 transition-colors group"
                      onClick={closeDrawer}
                    >
                      <span className="font-semibold text-base">{link}</span>
                      <svg className="w-5 h-5 text-[var(--blue-light)] group-hover:text-[var(--blue-medium-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  );
                })}
              </div>

              <div className="py-4 border-t border-[var(--blue-medium-dark)]/20">
                {secondaryLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={
                      link === "Get In Touch" ? "/get-in-touch" :
                        link === "Partner With Us" ? "/partner" :
                          link === "FAQ & Support Center" ? "/support" :
                            link === "Campus Ambassador Programme" ? "/careers" :
                              link === "Career Ignition Hub" ? "/book-counselling" :
                                link === "Immigration Guide" ? "/immigration-guide" :
                                  link === "Country Guides" ? "/country-guides" :
                                    link === "Blogs" ? "/blogs" :
                                      "/resources"
                    }
                    className="block px-6 py-3 text-[var(--blue-medium)] hover:bg-[var(--blue-medium-dark)]/10 hover:text-[var(--blue-darkest)] transition-colors text-sm"
                    onClick={closeDrawer}
                  >
                    {link}
                  </Link>
                ))}
              </div>

              <div className="px-6 py-4 border-t border-[var(--blue-medium-dark)]/20 space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  href="/students"
                  onClick={closeDrawer}
                >
                  For Students
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  href="/universities"
                  onClick={closeDrawer}
                >
                  For Organizations
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  href="/jobs/search"
                  onClick={closeDrawer}
                >
                  For Job Seekers
                </Button>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}
