import React from "react";
import DashboardNav from "@/components/dashboard-nav";
import Image from "next/image";
import {
  ChevronLeft,
  GitFork,
  Star,
  Eye,
  Users,
  AlertCircle,
  Check,
  Clock,
  Scale,
} from "lucide-react";
import { RepoDetailsPageProps, RepoDetails } from "@/lib/definitions";

const RepoDetailsPage: React.FC<RepoDetailsPageProps> = () => {
  const repoDetails: RepoDetails = {
    name: "Repository Name",
    description:
      "Repository description goes here. This is a longer text that explains what this repository is about and what it does.",
    stats: {
      stars: 1234,
      forks: 567,
      watchers: 890,
      contributors: 45,
    },
    health: {
      issuesResolutionTime: "2.5 days",
      prMergeTime: "1.2 days",
      codeQuality: "A+",
      testCoverage: "87%",
    },
    topContributors: [
      {
        name: "John Doe",
        commits: 156,
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Jane Smith",
        commits: 143,
        avatar:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      },
      {
        name: "Bob Wilson",
        commits: 98,
        avatar:
          "https://images.unsplash.com/photo-1672843192615-5913ef88bf17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYWxlfGVufDB8fDB8fHww",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <DashboardNav />

      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Navigation */}
          <div className="mb-8">
            <button className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Dashboard
            </button>
          </div>

          {/* Repository Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-3">{repoDetails.name}</h1>
            <p className="text-lg text-muted-foreground">
              {repoDetails.description}
            </p>
          </div>

          {/* Repository Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: Star,
                color: "yellow",
                label: "Stars",
                value: repoDetails.stats.stars,
              },
              {
                icon: GitFork,
                color: "blue",
                label: "Forks",
                value: repoDetails.stats.forks,
              },
              {
                icon: Eye,
                color: "green",
                label: "Watchers",
                value: repoDetails.stats.watchers,
              },
              {
                icon: Users,
                color: "purple",
                label: "Contributors",
                value: repoDetails.stats.contributors,
              },
            ].map(({ icon: Icon, color, label, value }, index) => (
              <div
                key={index}
                className="dark:bg-black p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 bg-${color}-100 rounded-lg flex items-center justify-center mr-3`}
                    >
                      <Icon className={`h-5 w-5 text-${color}-600`} />
                    </div>
                    <span className="text-lg">{label}</span>
                  </div>
                  <span className="text-2xl font-bold">{value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Repository Health */}
          <div className="dark:bg-black p-8 rounded-xl shadow-sm mb-8">
            <h3 className="text-2xl font-bold mb-6">Repository Health</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  color: "blue",
                  label: "Issue Resolution Time",
                  value: repoDetails.health.issuesResolutionTime,
                },
                {
                  icon: Scale,
                  color: "green",
                  label: "PR Merge Time",
                  value: repoDetails.health.prMergeTime,
                },
                {
                  icon: Check,
                  color: "yellow",
                  label: "Code Quality",
                  value: repoDetails.health.codeQuality,
                },
                {
                  icon: AlertCircle,
                  color: "purple",
                  label: "Test Coverage",
                  value: repoDetails.health.testCoverage,
                },
              ].map(({ icon: Icon, color, label, value }, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center`}
                  >
                    <Icon className={`h-6 w-6 text-${color}-600`} />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">{label}</p>
                    <p className="text-xl font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Contributors */}
          <div className="dark:bg-black p-8 rounded-xl shadow-sm mb-12">
            <h3 className="text-2xl font-bold mb-6">Top Contributors</h3>
            <div className="space-y-6">
              {repoDetails.topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center ">
                    <Image
                      src={contributor.avatar}
                      alt={contributor.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-4 bg-white overflow-hidden"
                      style={{ objectFit: "cover" }}
                    />

                    <span className="text-lg">{contributor.name}</span>
                  </div>
                  <span className="text-muted-foreground text-lg">
                    {contributor.commits} commits
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoDetailsPage;
