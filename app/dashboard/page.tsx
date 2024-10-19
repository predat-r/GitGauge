import { authOptions } from "@/lib/authoptions";
import { getServerSession } from "next-auth";
import React from "react";
import RepoCard from "../../components/repo-card";
import { ChevronDown } from "lucide-react";

export const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your GitHub Repositories
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Manage and monitor all your repositories in one place. View statistics, track changes, 
            and stay updated with your projects.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Repos</p>
            <p className="text-2xl font-bold text-blue-700">5</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Stars</p>
            <p className="text-2xl font-bold text-blue-700">6.2k</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Forks</p>
            <p className="text-2xl font-bold text-blue-700">615</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">Contributors</p>
            <p className="text-2xl font-bold text-blue-700">225</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 mb-8 flex flex-wrap gap-4 items-center justify-between shadow-sm border border-gray-200 dark:border-zinc-800">
        <div className="flex gap-4">
      <div className="relative">
        <select className="appearance-none rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black text-gray-700 dark:text-gray-300 px-4 py-2 pr-10 text-sm w-40">
          <option>All Languages</option>
          <option>JavaScript</option>
          <option>TypeScript</option>
          <option>Python</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
      </div>
      
      <div className="relative">
        <select className="appearance-none rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black text-gray-700 dark:text-gray-300 px-4 py-2 pr-10 text-sm w-40">
          <option>Sort by Stars</option>
          <option>Sort by Forks</option>
          <option>Sort by Updated</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search repositories..."
              className="rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black text-gray-700 dark:text-gray-300 px-4 py-2 pl-10 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RepoCard
            name="awesome-project"
            description="A really cool project that does amazing things with modern web technologies and frameworks"
            language="JavaScript"
            stars={1234}
            forks={123}
            contributors={45}
            codeSize="2.5MB"
            branches={3}
          />
          <RepoCard
            name="data-visualization"
            description="Interactive data visualization library built with D3.js and React"
            language="TypeScript"
            stars={892}
            forks={76}
            contributors={23}
            codeSize="1.8MB"
            branches={5}
          />
          <RepoCard
            name="ml-experiments"
            description="Collection of machine learning experiments and models"
            language="Python"
            stars={567}
            forks={89}
            contributors={12}
            codeSize="5.2MB"
            branches={2}
          />
          <RepoCard
            name="api-gateway"
            description="High-performance API gateway with built-in authentication"
            language="Go"
            stars={2341}
            forks={198}
            contributors={67}
            codeSize="1.2MB"
            branches={4}
          />
          <RepoCard
            name="mobile-app"
            description="Cross-platform mobile application built with React Native"
            language="TypeScript"
            stars={1567}
            forks={129}
            contributors={34}
            codeSize="3.7MB"
            branches={6}
          />
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800">
              2
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800">
              3
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;