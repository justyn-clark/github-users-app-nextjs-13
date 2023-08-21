import { Suspense } from 'react';
import { GitHubUser } from '@/types/GitHubUser';
import { getUsers } from '@/utils/api';

import Header from '../ui-components/Header';
import UserList from '../ui-components/UserList';

export default async function HomePage() {
  const users: GitHubUser[] = await getUsers('users');
  return (
    <div
      data-testid="home-page"
      className="bg-white mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8 "
    >
      <Header
        title="Github Users"
        body="An application that uses the public Github API to render Github users and display information about their account."
      />
      <Suspense fallback={<p>Loading user data for the home page...</p>}>
        <UserList users={users} />
      </Suspense>
    </div>
  );
}
