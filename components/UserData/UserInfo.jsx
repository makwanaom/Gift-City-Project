"use client";

import { signOut, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = async () => {
    router.push("/Login");
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        {session ? (
          <>
            <div>
              Email: <span className="font-bold">{session.user.email}</span>
            </div>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
              Log Out
            </button>
          </>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-green-500 text-white font-bold px-6 py-2 mt-3">
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
