import { Follower } from '@/types/Follower';
import { GitHubUser } from '@/types/GitHubUser';
import Image from '@/ui-components/Image';

const copy = {
  heading: 'Followers',
  noResultsText: 'No repos available',
};

export default function Followers({
  user,
  followers,
}: {
  user: GitHubUser;
  followers: Follower[];
}) {
  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex my-2 items-center">
        <code>{user?.followers}</code>
        <h2 className="font-bold tracking-tight ml-2 text-gray-900">{copy.heading}</h2>
      </div>
      <ul role="list" className="isolate flex -space-x-1 overflow-hidden">
        {followers.length ? (
          followers
            .map((follower: Follower) => (
              <Image
                key={follower?.id}
                height={460}
                width={460}
                className="h-10 w-10 md:h-12 md:w-12 flex-none rounded-full bg-gray-50"
                src={follower?.avatar_url as string}
                alt="follower avatar image"
                priority
              />
            ))
            .slice(0, 5)
        ) : (
          <p className="text-[13px]">{copy.noResultsText}</p>
        )}
      </ul>
    </section>
  );
}
