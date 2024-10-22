export interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string;
  stars: number;
  forks: number;
  contributors: number;
  codeSize: string;
  branches: number;
}

export interface Organization {
  login: string;
  id: number;
  url: string;
  avatar_url: string;
  description: string | null;
}

export interface RepoDetailsPageProps {
  params: {
    organization: string;
    repository: string;
  };
}

export interface RepoStats {
  stars: number;
  forks: number;
  watchers: number;
  contributors: number;
}
//repo health
export interface RepoHealth {
  issuesResolutionTime: string;
  prMergeTime: string;
  codeQuality: string;
  testCoverage: string;
}

//repository contributor
export interface Contributor {
  name: string;
  commits: number;
  avatar: string;
}

// Defines a type for the repository details object
export interface RepoDetails {
  name: string;
  description: string;
  stats: RepoStats;
  health: RepoHealth;
  topContributors: Contributor[];
}
