import Link from 'next/link';
import { GitHubUser } from '@/types/GitHubUser';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from './Image';

export default function UserList({ users }: { users: GitHubUser[] }) {
  return (
    <ul
      role="list"
      className="sm:w-2/3 mx-auto divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
      {users?.map((user: GitHubUser) => (
        <Link key={user?.id} href={`/user/${user?.login}`}>
          <li className="relative flex cursor-pointer gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
            <div className="flex gap-x-4">
              <Image
                height={460}
                width={460}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={user?.avatar_url as string}
                alt={`Avatar for ${user?.login}`}
                priority
              />
            </div>
            <div className="flex items-center gap-x-4">
              <div className="sm:flex sm:flex-col sm:items-end">
                <p className="text-sm font-semibold leading-6 text-gray-900">{user?.login}</p>
              </div>
              <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
