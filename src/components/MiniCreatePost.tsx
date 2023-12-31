"use client";

import { FC } from "react";
import { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import { ImageIcon, Link2 } from "lucide-react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import UserAvatar from "./UserAvatar";

interface MiniCreatePostProps {
  session: Session | null;
}
const MiniCreatePost: FC<MiniCreatePostProps> = ({ session }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li className="overflow-hidden list-none bg-white rounded-md shadow">
      <div className="flex justify-between h-full gap-4 px-6 py-4 sm:gap-6">
        <div className="relative">
          <UserAvatar
            user={{
              name: session?.user.name || null,
              image: session?.user.image || null,
            }}
          />

          <span
            className={`absolute bottom-0 right-0 w-3 bg-green-500 h-3 rounded-full outline outline-white outline-2 ${
              session?.user ? "block" : "hidden"
            }`}
          ></span>
        </div>

        <Input
          placeholder="Create post"
          readOnly
          onClick={() => router.push(pathname + "/submit")}
        />

        <Button
          variant="ghost"
          onClick={() => router.push(pathname + "/submit")}
          className="hidden sm:block"
        >
          <ImageIcon className="text-zinc-600" />
        </Button>

        <Button
          variant="ghost"
          onClick={() => router.push(pathname + "/submit")}
          className="px-0 sm:px-[unset]"
        >
          <Link2 className="text-zinc-600" />
        </Button>
      </div>
    </li>
  );
};

export default MiniCreatePost;
