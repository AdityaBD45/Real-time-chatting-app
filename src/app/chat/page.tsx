"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function ChatPage() {
  const { user } = useUser();
  const users = useQuery(api.users.getUsers);

  if (!users) return <div>Loading...</div>;

  const otherUsers = users.filter((u) => u.clerkId !== user?.id);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users</h1>

      {otherUsers.map((u) => (
        <div
          key={u._id}
          className="border p-3 rounded mb-2"
        >
          {u.name}
        </div>
      ))}
    </div>
  );
}