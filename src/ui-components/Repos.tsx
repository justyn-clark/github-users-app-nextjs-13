import { Suspense } from 'react';
import { GitHubRepository } from '@/types/Repos';
import { SkeletonCard } from '@/ui-components/SkeletonCard';

const copy = {
  heading: 'Repositories',
  noResultsText: 'No repos available',
};

export default function Repos({ repos }: { repos: GitHubRepository[] }) {
  return (
    <>
      <div className="flex py-2 items-center">
        <h2 className="font-bold tracking-tight text-gray-900">{copy.heading}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Suspense
          fallback={Array.from({ length: repos.length }).map((_, i) => (
            <SkeletonCard isLoading={true} key={i} />
          ))}
        >
          {repos.length ? (
            repos.map((repo) => (
              <div
                key={repo?.id}
                className="overflow-hidden relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
              >
                <div className="min-w-0 flex-1">
                  <a href={repo?.html_url} target="_blank" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">{repo?.full_name}</p>
                    <div className="flex mt-1">
                      {repo?.description && (
                        <p className="truncate text-sm text-gray-500">{repo?.description}</p>
                      )}
                    </div>
                    <div className="flex mt-1 items-center">
                      <div className="flex items-baseline mr-10">
                        <p data-testid="test-stars" className="truncate text-sm text-gray-900">
                          {repo?.stargazers_count}
                        </p>
                        <p className="truncate ml-1 text-[11px] text-gray-500">Stars ⭐</p>
                      </div>
                      <div className="flex items-baseline">
                        <p className="truncate text-sm text-gray-900">{repo?.forks}</p>
                        <p className="truncate ml-1 text-[11px] text-gray-500"> Forks</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[13px]">{copy.noResultsText}</p>
          )}
        </Suspense>
      </div>
    </>
  );
}
