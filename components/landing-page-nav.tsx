"use client";

import { GitBranch } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Nav = () => {
  const session = useSession();
  if (session.status === "authenticated") {
    redirect("http://localhost:3000/organizations");
  }
  return (
    <nav className="fixed w-full bg-[var(--background)]/80 backdrop-blur-md z-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <GitBranch className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Git Gauge</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 ">
            <a
              className=" hover:text-blue-700 dark:hover:text-gray-700"
              href="#features"
            >
              Features
            </a>
            <a
              className=" hover:text-blue-700 dark:hover:text-gray-700"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className=" hover:text-blue-700 dark:hover:text-gray-700"
              href="#docs"
            >
              Documentation
            </a>
            <button
              onClick={() => {
                signIn("github");
              }}
              className=" hover:text-blue-700 dark:hover:text-gray-700 px-4 py-2"
            >
              Sign In
            </button>
            <button className=" px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;