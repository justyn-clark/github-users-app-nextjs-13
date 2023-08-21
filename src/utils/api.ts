import { notFound } from 'next/navigation';
import { API_KEY, API_URL } from '@/constants';
import { Follower } from '@/types/Follower';
import { GitHubUser } from '@/types/GitHubUser';
import { GitHubRepository } from '@/types/Repos';
import { GitHubOrganization } from '@/types/GitHubOrganization';

interface RequestOptions {
  headers?: HeadersInit;
}

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${API_KEY}`,
};

export async function getUsers<T>(path: string, options: RequestOptions = {}): Promise<T[]> {
  const mergedOptions: RequestInit = {
    headers,
    ...(options.headers || {}),
    ...options,
  };

  const res = await fetch(`${API_URL}${path}`, API_KEY ? mergedOptions : undefined);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getUser({ slug }: { slug: string }) {
  const res = await fetch(
    `${API_URL}users${slug ? `/${slug}` : ''}`,
    API_KEY ? { headers } : undefined,
  );

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const user = (await res.json()) as GitHubUser;

  if (!user) {
    notFound();
  }

  return user;
}

export async function getFollowers(username: string | string[]) {
  const res = await fetch(
    `${API_URL}users/${username}/followers`,
    API_KEY ? { headers } : undefined,
  );

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const followers = (await res.json()) as Follower[];

  if (!followers) {
    notFound();
  }

  return followers;
}

export async function getRepos(username: string | string[]) {
  const res = await fetch(`${API_URL}users/${username}/repos`, API_KEY ? { headers } : undefined);

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const repos = (await res.json()) as GitHubRepository[];

  if (!repos) {
    notFound();
  }

  return repos;
}

export async function getOrganizations(username: string | string[]) {
  const res = await fetch(`${API_URL}users/${username}/orgs`, API_KEY ? { headers } : undefined);

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const orgs = (await res.json()) as GitHubOrganization[];

  if (!orgs) {
    notFound();
  }

  return orgs;
}
