"use client";

import { useEffect } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const { user } = useUser();
  const syncUser = useMutation(api.users.syncUser);

  useEffect(() => {
    if (!user) return;

    syncUser({
      clerkId: user.id,
      name: user.fullName ?? "",
      email: user.primaryEmailAddress?.emailAddress ?? "",
      imageUrl: user.imageUrl,
    });
  }, [user, syncUser]);

  return (
    <div className="flex h-screen items-center justify-center">
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg font-semibold">You are signed in!</p>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}