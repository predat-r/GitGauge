import FilterBar from "@/components/filter-bar";
import Pagination from "@/components/pagination";
import DashboardHeader from "@/components/dashboard-header";
import DeveloperActivityOverview from "@/components/developer-activity-overview";
import TeamPerformanceCards from "@/components/team-performance-cards";
import { fetchReposOfOrg } from "@/lib/actions";
import RepoCardWrapper from "@/components/repo-card-wrapper";
import DashboardNav from "@/components/dashboard-nav";

export default async function DashboardPage({
  params,
}: {
  params: { organization: string };
}) {
  const repos = await fetchReposOfOrg(params.organization);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      <DashboardNav />
      <div className="min-h-screen  mt-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <DashboardHeader organization={params.organization} />
          <DeveloperActivityOverview />
          <TeamPerformanceCards />
          <FilterBar />
          <RepoCardWrapper repositories={repos} />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
