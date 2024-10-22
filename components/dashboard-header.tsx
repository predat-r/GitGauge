import React from "react";

const DashboardHeader = ({organization}:{organization:string}) => {
  return (
    <div className="text-center mb-12">
      <div className="flex  flex-col md:flex-row items-center justify-center w-full text-center gap-x-5">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          {organization}
        </h1>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Dashboard
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Monitor developer activity, track repository health, and analyze team
        performance across all projects.
      </p>
    </div>
  );
};

export default DashboardHeader;
