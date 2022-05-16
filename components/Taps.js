import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Taps() {
  const router = useRouter();

  return (
    <>
      <div className="py-5 text-lg text-gray-400 flex justify-between items-center">
        <div className="flex space-x-8">
          <Link href="/">
            <a className={router.pathname === "/" ? "active-btn" : ""}>
              Nearest rides
            </a>
          </Link>
          <Link href="/coming">
            <a className={router.pathname === "/coming" ? "active-btn" : ""}>
              Upcoming rides
            </a>
          </Link>
          <Link href="/past">
            <a className={router.pathname === "/past" ? "active-btn" : ""}>
              Past rides
            </a>
          </Link>
        </div>
        <div className="cursor-pointer flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p>Filters</p>
        </div>
      </div>
    </>
  );
}
