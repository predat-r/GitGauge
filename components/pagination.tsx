import React from "react";

const Pagination = () => {
  return (
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
  );
};

export default Pagination;
