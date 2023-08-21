import Image from '@/ui-components/Image';
import { GitHubUser } from '@/types/GitHubUser';

export default function DetailsHeader({ user }: { user: GitHubUser }) {
  return (
    <div className="flex items-center justify-self-auto mb-12">
      <Image
        height={460}
        width={460}
        className="h-32 w-32 flex-none rounded-full bg-gray-50"
        src={user?.avatar_url as string}
        alt={`Avatar for ${user?.login as string}`}
        priority={true}
      />
      <h1 className="font-bold tracking-tight ml-10 text-gray-900 text-3xl sm:text-5xl">
        {user?.name}
      </h1>
    </div>
  );
}
