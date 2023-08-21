import { Suspense } from 'react';
import Link from 'next/link';
import { getFollowers, getOrganizations, getRepos, getUser } from '@/utils/api';
import { Follower } from '@/types/Follower';
import { GitHubRepository } from '@/types/Repos';
import { GitHubOrganization } from '@/types/GitHubOrganization';

import Repos from '@/ui-components/Repos';
import Followers from '@/ui-components/Followers';
import DetailsHeader from '@/ui-components/DetailsHeader';
import Organizations from '@/ui-components/Organizations';
import { ArrowLeftIcon } from '@/ui-components/ArrowLeftIcon';
import { SkeletonCard } from '@/ui-components/SkeletonCard';

export default async function UserPage({ params }: { params: { username: string } }) {
  const user = await getUser({ slug: params.username });
  const followers: Follower[] = ([] = await getFollowers(user.login as string));
  const orgs: GitHubOrganization[] = ([] = await getOrganizations(params.username));
  const repos: GitHubRepository[] = ([] = await getRepos(params.username));
  return (
    <div data-testid="user-page" className="bg-white mx-auto max-w-4xl px-6 py-12 sm:py-12 lg:px-8">
      <Link
        href="/"
        className="mb-8 flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-transparent dark:ring-0 dark:ring-white/10"
      >
        <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      </Link>
      <DetailsHeader user={user} />
      <Suspense fallback={<SkeletonCard isLoading={true} />}>
        <Followers user={user} followers={followers} />
      </Suspense>
      <Suspense fallback={<SkeletonCard isLoading={true} />}>
        <Organizations orgs={orgs} />
      </Suspense>
      <Suspense fallback={<SkeletonCard isLoading={true} />}>
        <Repos repos={repos} />
      </Suspense>
    </div>
  );
}
