import React from 'react';
import { GitBranch, GitFork, Star, Users, Code, Circle } from 'lucide-react';

type Languages = 'JavaScript' | 'Python' | 'Java' | 'TypeScript' | 'Ruby' | 'Go';

interface LanguageColors {
  [key: string]: string;
}

interface RepoCardProps {
  name?: string;
  description?: string;
  language?: Languages;
  stars?: number;
  forks?: number;
  contributors?: number;
  codeSize?: string;
  branches?: number;
}

const getLanguageColor = (language: Languages): string => {
  const colors: LanguageColors = {
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    TypeScript: '#2b7489',
    Ruby: '#701516',
    Go: '#00ADD8',
  };
  return colors[language] || '#6e7681';
};

const formatNumber = (num: number): string | number => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num;
};

const RepoCard: React.FC<RepoCardProps> = ({
  name = "awesome-project",
  description = "A really cool project that does amazing things",
  language = "JavaScript",
  stars = 1234,
  forks = 123,
  contributors = 45,
  codeSize = "2.5MB",
  branches = 3
}) => {
  return (
    <div className="w-full h-56 max-w-md border text-[#818080] border-gray-200 dark:bg-[#3333] dark:border-[#37373733] rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="space-y-4">
        {/* Repository Name */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold  hover:underline text-blue-800 cursor-pointer">
            {name}
          </h3>
        </div>

        {/* Description */}
        <p className=" text-sm line-clamp-2">
          {description}
        </p>

        {/* Main Stats */}
        <div className="flex items-center space-x-6">
          {/* Language */}
          <div className="flex items-center space-x-1">
            <Circle size={12} fill={getLanguageColor(language as Languages)} stroke="none" />
            <span className="text-sm ">{language}</span>
          </div>
          {/* Stars */}
          <div className="flex items-center space-x-1">
            <Star size={16} className= "dark:text-gray-500 text-gray-600" />
            <span className="text-sm dark:text-white text-gray-600">{formatNumber(stars)}</span>
          </div>

          {/* Forks */}
          <div className="flex items-center space-x-1">
            <GitFork size={16} className= "dark:text-gray-500 text-gray-600" />
            <span className="text-sm dark:text-white text-gray-600">{formatNumber(forks)}</span>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="flex items-center space-x-6 text-sm dark:text-white text-gray-600">
          {/* Contributors */}
          <div className="flex items-center space-x-1">
            <Users size={16} className='text-gray-600'/>
            <span>{formatNumber(contributors)}</span>
          </div>

          {/* Code Size */}
          <div className="flex items-center space-x-1">
            <Code size={16} className='text-gray-600'/>
            <span>{codeSize}</span>
          </div>

          {/* Branches */}
          <div className="flex items-center space-x-1">
            <GitBranch size={16}className='text-gray-600'/>
            <span>{branches}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;