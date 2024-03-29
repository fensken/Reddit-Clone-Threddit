import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { getAuthSession } from "@/lib/auth";
import CustomFeed from "@/components/CustomFeed";
import GeneralFeed from "@/components/GeneralFeed";
import { buttonVariants } from "@/components/ui/Button";

// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl">Your feed</h1>

      <div className="grid grid-cols-1 py-6 md:grid-cols-3 gap-y-4 md:gap-x-4">
        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : <GeneralFeed />}

        {/* subreddit info */}
        <div className="static order-first overflow-hidden border border-gray-200 rounded-lg md:sticky md:top-20 h-fit md:order-last">
          <div className="px-6 py-4 bg-emerald-100">
            <p className="font-semibold py-3 flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4" />
              Home
            </p>
          </div>

          <div className="px-6 py-4 -my-3 text-sm leading-6 divide-y divide-gray-100">
            <div className="flex justify-between py-3 gap-x-4">
              <p className="text-zinc-500">
                Your personal Threddit homepage. Come here to check in with your
                favorite communities.
              </p>
            </div>

            <Link
              href="/r/create"
              className={buttonVariants({
                className: "w-full mt-4 mb-6",
              })}
            >
              Create Community
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
