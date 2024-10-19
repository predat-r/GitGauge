import { authOptions } from "@/lib/authoptions";
import { getServerSession } from "next-auth";
import React from "react";
import {
  ChevronDown,
  Users,
  GitBranch,
  AlertCircle,
  Clock,
} from "lucide-react";
import RepoCardWrapper from "@/components/repo-card-wrapper";
import { Repo } from "@/lib/definitions";

export const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  let repos: Repo[] | null = [];
  let yum: [] = [];
  if (session && session.accessToken) {
    const orgs = await fetch(
      `https://api.github.com/orgs/GitGauge/memberships/predat-r`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    yum = await orgs.json();
    console.log(yum);
  }
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Organization Repository Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Monitor developer activity, track repository health, and analyze
            team performance across all projects.
          </p>
        </div>

        {/* Developer Activity Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Active Developers
              </p>
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-blue-700">42</p>
            <p className="text-xs text-green-500">↑ 12% from last month</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Open PRs
              </p>
              <GitBranch className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-blue-700">28</p>
            <p className="text-xs text-yellow-500">8 need review</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Critical Issues
              </p>
              <AlertCircle className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-blue-700">15</p>
            <p className="text-xs text-red-500">5 high priority</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avg Response Time
              </p>
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-blue-700">4.2h</p>
            <p className="text-xs text-green-500">↓ 1.5h from last week</p>
          </div>
        </div>

        {/* Team Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Contributors
            </h3>
            <div className="space-y-4">
              {["John Doe", "Jane Smith", "Alex Johnson"].map((name, index) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700 mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {150 - index * 30} commits
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Review Activity
            </h3>
            <div className="space-y-4">
              {["Frontend Team", "Backend Team", "DevOps Team"].map((team) => (
                <div key={team} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      {team}
                    </span>
                    <span className="text-sm text-gray-500">
                      85% response rate
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 mb-8 flex flex-wrap gap-4 items-center justify-between shadow-sm border border-gray-200 dark:border-zinc-800">
          <div className="flex gap-4">
            <div className="relative">
              <select className="appearance-none rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black text-gray-700 dark:text-gray-300 px-4 py-2 pr-10 text-sm w-40">
                <option>All Teams</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>DevOps</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black text-gray-700 dark:text-gray-300 px-4 py-2 pr-10 text-sm w-40">
                <option>Activity Level</option>
                <option>High Priority</option>
                <option>Needs Review</option>
                <option>Inactive</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search repositories or developers..."
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

        <RepoCardWrapper repositories={repos}></RepoCardWrapper>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white">
              1
            </button>
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
