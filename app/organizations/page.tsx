'use client';
import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { ArrowRight, Users } from "lucide-react";

interface Organization {
  login: string;
  id: number;
  avatar_url: string;
  description: string | null;
}

const SelectOrgPage = () => {
  const [orgs, setOrgs] = useState<Organization[]>([]);

  useEffect(() => {
    const fetchOrgs = async () => {
      const session = await getSession();
      if (session?.accessToken) {
        const response = await fetch("https://api.github.com/user/orgs", {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            Accept: "application/vnd.github.v3+json",
          },
        });
        const data = await response.json();
        setOrgs(data);
      }
    };
    fetchOrgs();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-blue-800 font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Select An Organization
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose an organization to take to the next level.
          </p>
        </div>

        {orgs.length === 0 ? (
          <div className="text-center">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-xl font-medium text-gray-900">No organizations found</h3>
            <p className="mt-1 text-gray-500">You don't belong to any organizations.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orgs.map((org) => (
              <div
                key={org.id}
                className="dark:bg-[#3333] border border-gray-100 dark:border-[#3333] overflow-hidden shadow-xl rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="p-6">
                  <img
                    src={org.avatar_url}
                    alt={org.login}
                    className="w-24 h-24 mx-auto rounded-full shadow-lg"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-center">{org.login}</h3>
                  <p className="mt-2 text-gray-600 text-sm text-center line-clamp-2">
                    {org.description || "No description available"}
                  </p>
                </div>
                <div className="px-6 py-4 bg-[#27272733]">
                  <a
                    href={`/dashboard/${org.login}`}
                    className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  >
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectOrgPage;