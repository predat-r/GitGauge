import { ChevronDown } from "lucide-react";
import React from "react";

const FilterBar = () => {
  return (
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
  );
};

export default FilterBar;
