"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  // const users = useQuery(api.users.getMany);
  return (
    <>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <OrganizationSwitcher hidePersonal/>
          <UserButton />
          web
          {/* {JSON.stringify(users)} */}
        </div>
      </div>
    </>
  );
}
