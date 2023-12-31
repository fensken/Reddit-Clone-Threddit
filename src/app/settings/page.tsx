export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

import { redirect } from "next/navigation";
import { authOptions, getAuthSession } from "@/lib/auth";
import UserNameForm from "@/components/UserNameForm";

const page = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect(authOptions.pages?.signIn || "/sign-in");
  }

  return (
    <div className="max-w-4xl py-12 mx-auto">
      <div className="grid items-start gap-8">
        <h1 className="text-3xl font-bold md:text-4xl">Settings</h1>

        <div className="grid gap-10">
          <UserNameForm
            user={{
              id: session.user.id,
              username: session.user.username || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
