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
