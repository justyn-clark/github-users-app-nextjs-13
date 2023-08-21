import { GitHubOrganization } from '@/types/GitHubOrganization';
import Image from '@/ui-components/Image';

const copy = {
  heading: 'Organizations',
  noResultsText: 'No orgs available',
};

export default function Organizations({ orgs }: { orgs: GitHubOrganization[] }) {
  return (
    <section className="mb-8 sm:mb-12">
      <div className="flex my-2 items-center">
        <h2 className="font-bold tracking-tight text-gray-900">{copy.heading}</h2>
      </div>
      <ul role="list" className="isolate flex -space-x-1 overflow-hidden">
        {orgs.length ? (
          orgs
            .map((orgs: GitHubOrganization) => (
              <Image
                key={orgs?.id}
                height={460}
                width={460}
                className="h-10 w-10 md:h-12 md:w-12 flex-none rounded-full bg-gray-50"
                src={orgs?.avatar_url as string}
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
