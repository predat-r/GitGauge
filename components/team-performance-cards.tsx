import React from "react";

const TeamPerformanceCards = () => {
  return (
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
                <span className="text-gray-700 dark:text-gray-300">{name}</span>
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
                <span className="text-gray-700 dark:text-gray-300">{team}</span>
                <span className="text-sm text-gray-500">85% response rate</span>
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
  );
};

export default TeamPerformanceCards;
