import { Users, GitBranch, AlertCircle, Clock } from "lucide-react";
import React from "react";

const DeveloperActivityOverview = () => {
  return (
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
          <p className="text-sm text-gray-600 dark:text-gray-400">Open PRs</p>
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
  );
};

export default DeveloperActivityOverview;
