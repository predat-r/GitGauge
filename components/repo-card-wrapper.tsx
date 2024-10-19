import React from "react";
import RepoCard from "./repo-card";
import { Repo } from "@/lib/definitions";

const RepoCardWrapper = ({ repositories }: { repositories: Repo[] | null }) => {
  console.log(repositories);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repositories?.map((element) => {
          return (
            <RepoCard
              key={element.id}
              name={element.name}
              description={element.description}
              stars={element.stars}
              forks={element.forks}
              language={element.language}
              contributors={element.contributors}
              codeSize="2.5MB"
              branches={3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RepoCardWrapper;
